import withPWA from 'next-pwa';
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode :true
};

const pwaConfig = withPWA({
  dest: 'public', // Destination folder for PWA fil
  register: true, // Register the service worker
  skipWaiting: true, // Activate the new service wo
  // Add other next-pwa options as needed, e.g., di
});

export default pwaConfig(nextConfig);
