import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  webpack: (config) => {
    // ensure next-pwa works with webpack
    return config;
  },
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/app-build-manifest\.json$/],
});

export default pwaConfig(nextConfig);
