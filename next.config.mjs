// To use the bundle analyzer, run: ANALYZE=true pnpm build
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
	compress: true,
	poweredByHeader: false,
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [
			{
			protocol: 'https',
			hostname: 'avatars.githubusercontent.com',
			},
		],
		},
};

export default process.env.ANALYZE === 'true'
	? withBundleAnalyzer({ enabled: true })(nextConfig)
	: nextConfig;