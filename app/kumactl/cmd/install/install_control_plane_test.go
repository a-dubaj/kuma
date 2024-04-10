package install_test

import (
	"bytes"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"strings"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	gatewayapi "sigs.k8s.io/gateway-api/apis/v1beta1"

	"github.com/kumahq/kuma/app/kumactl/cmd"
	kumactl_cmd "github.com/kumahq/kuma/app/kumactl/pkg/cmd"
	"github.com/kumahq/kuma/pkg/test/matchers"
	"github.com/kumahq/kuma/pkg/util/test"
	kuma_version "github.com/kumahq/kuma/pkg/version"
)

var _ = Describe("kumactl install control-plane", func() {
	var backupBuildInfo kuma_version.BuildInfo
	BeforeEach(func() {
		backupBuildInfo = kuma_version.Build
	})
	AfterEach(func() {
		kuma_version.Build = backupBuildInfo
	})

	BeforeEach(func() {
		kuma_version.Build = kuma_version.BuildInfo{
			Version:   "0.0.1",
			GitTag:    "v0.0.1",
			GitCommit: "91ce236824a9d875601679aa80c63783fb0e8725",
			BuildDate: "2019-08-07T11:26:06Z",
		}
	})

	var stdout *bytes.Buffer
	var stderr *bytes.Buffer

	BeforeEach(func() {
		stdout = &bytes.Buffer{}
		stderr = &bytes.Buffer{}
	})

	DescribeTable("should generate Kubernetes resources with Helm", func(inputFile string) {
		// setup - override some values to have stable YAMLs regardless of changes in versions and autogenerated values
		rootCtx := kumactl_cmd.DefaultRootContext()
		rootCtx.Runtime.NewAPIServerClient = test.GetMockNewAPIServerClient()
		rootCtx.InstallCpContext.Args.ControlPlane_image_tag = "0.0.1"
		rootCtx.InstallCpContext.Args.DataPlane_image_tag = "0.0.1"
		rootCtx.InstallCpContext.Args.DataPlane_initImage_tag = "0.0.1"

		// given
		rootCmd := cmd.NewRootCmd(rootCtx)
		rootCmd.SetArgs(
			[]string{
				"install",
				"control-plane",
				"--skip-kinds", "CustomResourceDefinition",
				"--without-kubernetes-connection",
				"--set", "testOnly=true",
				"--values", inputFile,
			},
		)
		rootCmd.SetOut(stdout)
		rootCmd.SetErr(stderr)

		// when
		err := rootCmd.Execute()

		// then command succeed
		Expect(err).ToNot(HaveOccurred())
		Expect(stderr.String()).To(BeEmpty())

		// and output matches golden files
		actual := stdout.Bytes()
		ExpectMatchesGoldenFiles(actual, strings.Replace(inputFile, ".values.yaml", ".golden.yaml", 1))
	}, func() []TableEntry {
		var res []TableEntry
		testDir := filepath.Join("testdata", "install-cp-helm")
		files, err := os.ReadDir(testDir)
		Expect(err).ToNot(HaveOccurred())
		for _, f := range files {
			if !f.IsDir() && strings.HasSuffix(f.Name(), ".values.yaml") {
				res = append(res, Entry(f.Name(), path.Join(testDir, f.Name())))
			}
		}
		return res
	}())
	It("should dump config with --dump-values", func() {
		rootCtx := kumactl_cmd.DefaultRootContext()
		rootCtx.Runtime.NewAPIServerClient = test.GetMockNewAPIServerClient()
		rootCtx.InstallCpContext.Args.ControlPlane_image_tag = "0.0.1"
		rootCtx.InstallCpContext.Args.DataPlane_image_tag = "0.0.1"
		rootCtx.InstallCpContext.Args.DataPlane_initImage_tag = "0.0.1"
		args := []string{
			"install",
			"control-plane",
			"--tls-general-secret", "general-tls-secret",
			"--tls-general-ca-bundle", "XYZ",
			"--without-kubernetes-connection",
			"--dump-values",
		}
		rootCmd := cmd.NewRootCmd(rootCtx)
		rootCmd.SetArgs(args)
		rootCmd.SetOut(stdout)
		rootCmd.SetErr(stderr)

		// when
		err := rootCmd.Execute()

		// then command succeed
		Expect(err).ToNot(HaveOccurred())
		Expect(stderr.String()).To(BeEmpty())

		// and output matches golden files
		actual := stdout.Bytes()
		Expect(actual).To(matchers.MatchGoldenEqual(filepath.Join("testdata", "install-control-plane.dump-values.yaml")))
	})

	type testCase struct {
		stdin       string
		extraArgs   []string
		goldenFile  string
		includeCRDs bool
	}
	DescribeTable("should generate Kubernetes resources",
		func(given testCase) {
			// setup - override some values to have stable YAMLs regardless of changes in versions and autogenerated values
			rootCtx := kumactl_cmd.DefaultRootContext()
			rootCtx.Runtime.NewAPIServerClient = test.GetMockNewAPIServerClient()
			rootCtx.InstallCpContext.Args.ControlPlane_image_tag = "0.0.1"
			rootCtx.InstallCpContext.Args.DataPlane_image_tag = "0.0.1"
			rootCtx.InstallCpContext.Args.DataPlane_initImage_tag = "0.0.1"
			args := []string{
				"install",
				"control-plane",
				"--tls-general-secret", "general-tls-secret",
				"--tls-general-ca-bundle", "XYZ",
				"--without-kubernetes-connection",
			}
			if !given.includeCRDs {
				args = append(args, "--skip-kinds", "CustomResourceDefinition")
			}

			args = append(args, given.extraArgs...)

			// given
			rootCmd := cmd.NewRootCmd(rootCtx)
			rootCmd.SetArgs(args)
			if given.stdin != "" {
				stdin := &bytes.Buffer{}
				stdin.WriteString(given.stdin)
				rootCmd.SetIn(stdin)
			}
			rootCmd.SetOut(stdout)
			rootCmd.SetErr(stderr)

			// when
			err := rootCmd.Execute()

			// then command succeed
			Expect(err).ToNot(HaveOccurred())
			Expect(stderr.String()).To(BeEmpty())

			// and output matches golden files
			actual := stdout.Bytes()
			ExpectMatchesGoldenFiles(actual, filepath.Join("testdata", given.goldenFile))
		},
		Entry("should generate Kubernetes resources with default settings", testCase{
			extraArgs:   []string{},
			includeCRDs: true,
			goldenFile:  "install-control-plane.defaults.golden.yaml",
		}),
		Entry("should override default env-vars with values supplied", testCase{
			extraArgs: []string{
				"--env-var", "KUMA_DEFAULTS_SKIP_MESH_CREATION=true",
			},
			goldenFile: "install-control-plane.override-env-vars.golden.yaml",
		}),
		Entry("should generate Kubernetes resources with custom settings", testCase{
			extraArgs: []string{
				"--namespace", "kuma",
				"--image-pull-policy", "Never",
				"--control-plane-version", "greatest",
				"--control-plane-registry", "kuma-ci",
				"--control-plane-service-name", "kuma-ctrl-plane",
				"--injector-failure-policy", "Crash",
				"--dataplane-registry", "kuma-ci",
				"--dataplane-version", "greatest",
				"--dataplane-init-registry", "kuma-ci",
				"--dataplane-init-version", "greatest",
				"--tls-api-server-secret", "api-server-secret",
				"--tls-api-server-client-certs-secret", "api-server-client-secret",
				"--tls-kds-global-server-secret", "kds-global-secret",
				"--tls-kds-zone-client-secret", "kds-ca-secret",
				"--tls-general-ca-secret", "general-tls-secret-ca",
				"--mode", "zone",
				"--kds-global-address", "grpc://192.168.0.1:5685",
				"--zone", "zone-1",
				"--use-node-port",
				"--experimental-gatewayapi",
			},
			goldenFile: "install-control-plane.overrides.golden.yaml",
		}),
		Entry("should generate Kubernetes resources with --registry", testCase{
			extraArgs: []string{
				"--registry", "gcr.io/octo",
				"--dataplane-registry", "gcr.io/octo-dataplane",
			},
			goldenFile: "install-control-plane.registry.golden.yaml",
		}),
		Entry("should generate Kubernetes resources with CNI plugin", testCase{
			extraArgs: []string{
				"--cni-enabled",
			},
			goldenFile: "install-control-plane.cni-enabled.golden.yaml",
		}),
		Entry("should generate Kubernetes resources using ebpf (experimental)", testCase{
			extraArgs: []string{
				"--set", "experimental.ebpf.enabled=true",
			},
			goldenFile: "install-control-plane.tproxy-ebpf-experimental-enabled.golden.yaml",
		}),
		Entry("should generate Kubernetes resources for Global", testCase{
			extraArgs: []string{
				"--mode", "global",
			},
			goldenFile: "install-control-plane.global.golden.yaml",
		}),
		Entry("should generate Kubernetes resources for Global Universal mode", testCase{
			extraArgs: []string{
				"--mode",
				"global",
				"--set",
				"controlPlane.environment=universal",
				"--set",
				"postgres.tls.mode=verifyFull",
				"--set",
				"postgres.tls.caSecretName=postgres-ca",
			},
			goldenFile: "install-control-plane.global-universal-on-k8s.golden.yaml",
		}),
		Entry("should generate Kubernetes resources for Zone Universal mode", testCase{
			extraArgs: []string{
				"--mode",
				"zone",
				"--set",
				"controlPlane.environment=universal",
				"--kds-global-address",
				"grpcs://192.168.0.1:5685",
				"--zone",
				"zone-1",
			},
			goldenFile: "install-control-plane.zone-universal-on-k8s.golden.yaml",
		}),
		Entry("should generate Kubernetes resources for Zone", testCase{
			extraArgs: []string{
				"--mode", "zone",
				"--zone", "zone-1",
				"--kds-global-address", "grpcs://192.168.0.1:5685",
			},
			goldenFile: "install-control-plane.zone.golden.yaml",
		}),
		Entry("should generate Kubernetes resources with Ingress enabled", testCase{
			extraArgs: []string{
				"--ingress-enabled",
				"--ingress-drain-time", "60s",
				"--mode", "zone",
				"--zone", "zone-1",
				"--kds-global-address", "grpcs://192.168.0.1:5685",
				"--ingress-use-node-port",
			},
			goldenFile: "install-control-plane.with-ingress.golden.yaml",
		}),
		Entry("should generate Kubernetes resources with Egress enabled", testCase{
			extraArgs: []string{
				"--egress-enabled",
				"--egress-drain-time", "60s",
			},
			goldenFile: "install-control-plane.with-egress.golden.yaml",
		}),
		Entry("should work with --set", testCase{
			extraArgs: []string{
				"--set",
				"egress.enabled=true,ingress.enabled=true",
				"--set",
				"controlPlane.mode=zone,controlPlane.zone=zone-1,controlPlane.kdsGlobalAddress=grpcs://foo.com",
			},
			includeCRDs: true,
			goldenFile:  "install-control-plane.with-helm-set.yaml",
		}),
		Entry("should work with --values", testCase{
			extraArgs: []string{
				"--values",
				"-",
			},
			goldenFile: "install-control-plane.with-helm-values.yaml",
			stdin: `
controlPlane:
  replicas: 2
`,
		}),
		Entry("should add GatewayClass if CRDs are present and enabled", testCase{
			extraArgs: []string{
				"--api-versions", fmt.Sprintf("%s/%s", gatewayapi.GroupVersion.String(), "GatewayClass"),
				"--experimental-gatewayapi",
			},
			includeCRDs: true,
			goldenFile:  "install-control-plane.gateway-api-present.yaml",
		}),
		Entry("should not add GatewayClass if experimental not enabled", testCase{
			extraArgs: []string{
				"--api-versions", fmt.Sprintf("%s/%s", gatewayapi.GroupVersion.String(), "GatewayClass"),
			},
			includeCRDs: true,
			goldenFile:  "install-control-plane.gateway-api-present-not-enabled.yaml",
		}),
	)

	type errTestCase struct {
		extraArgs []string
		errorMsg  string
	}
	DescribeTable("should fail to install control plane",
		func(given errTestCase) {
			// given
			rootCmd := test.DefaultTestingRootCmd()
			rootCmd.SetArgs(append([]string{"install", "control-plane", "--without-kubernetes-connection"}, given.extraArgs...))
			rootCmd.SetOut(stdout)
			rootCmd.SetErr(stderr)

			// when
			err := rootCmd.Execute()

			// then
			Expect(err).To(HaveOccurred())
			Expect(err.Error()).To(ContainSubstring(given.errorMsg))
		},
		Entry("--mode is unknown", errTestCase{
			extraArgs: []string{"--mode", "test"},
			errorMsg:  "controlPlane.mode invalid got:'test'",
		}),
		Entry("", errTestCase{
			extraArgs: []string{"--kds-global-address", "grpcs://192.168.0.1:5685", "--mode", "zone", "--zone", "zone-1", "--set", "controlPlane.environment=universal", "--set", "egress.enabled=true"},
			errorMsg:  "Can't have egress.enabled when running controlPlane.mode=='universal'",
		}),
		Entry("", errTestCase{
			extraArgs: []string{"--kds-global-address", "grpcs://192.168.0.1:5685", "--mode", "zone", "--zone", "zone-1", "--set", "controlPlane.environment=universal", "--set", "egress.enabled=true"},
			errorMsg:  "Can't have egress.enabled when running controlPlane.mode=='universal'",
		}),
		Entry("--zone is more than 253 characters", errTestCase{
			extraArgs: []string{"--kds-global-address", "grpcs://192.168.0.1:5685", "--mode", "zone", "--zone", "takryywlpeftgnlwuwmwwfwohwzqxqlofjfsuuldtatoxlmnniytycvdnduwplvgnpnjwvzmbkqrvgnlovpynrtuyhhrqibdzwbfjrmhvwkkryzfnudghaxmegfvacjlytuyeikuawquolrykwwldjiynaxrpqgxmvwashrkigadzhxdeihcbjurhpmdrnulajpaspqcgzqxsnjrdenhruaawooojpyoprgnnoqiqdhncuztbgfsvhparjlippv"},
			errorMsg:  "controlPlane.zone must be no more than 253 characters",
		}),
		Entry("--zone format is invalid when installing zone", errTestCase{
			extraArgs: []string{"--kds-global-address", "grpcs://192.168.0.1:5685", "--mode", "zone", "--zone", "Invalid_z0ne"},
			errorMsg:  "controlPlane.zone must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character",
		}),
		Entry("--kds-global-address is not valid URL", errTestCase{
			extraArgs: []string{"--kds-global-address", "192.168.0.1:1234", "--mode", "zone", "--zone", "zone-1"},
			errorMsg:  "unable to parse url: parse \"192.168.0.1:1234\"",
		}),
		Entry("--kds-global-address has no grpcs/grpc scheme", errTestCase{
			extraArgs: []string{"--kds-global-address", "http://192.168.0.1:1234", "--mode", "zone", "--zone", "zone-1"},
			errorMsg:  "controlPlane.kdsGlobalAddress must be a url with scheme grpcs:// or grpc:// got:'http://192.168.0.1:1234'",
		}),
		Entry("--kds-global-address is used with standalone", errTestCase{
			extraArgs: []string{"--kds-global-address", "192.168.0.1:1234", "--mode", "standalone"},
			errorMsg:  "Can't specify a controlPlane.kdsGlobalAddress when controlPlane.mode!='zone'",
		}),
		Entry("--tls-general-secret without --tls-general-ca-bundle", errTestCase{
			extraArgs: []string{"--tls-general-secret", "sec"},
			errorMsg:  "Couldn't extract CA bundle, you are either not using generated cert or we couldn't extract it from values or secrets",
		}),
		Entry("with unexpected image tag", errTestCase{
			extraArgs: []string{"--set", "global.image.tag=1.5.0"},
			errorMsg:  "only supports",
		}),
	)
})
