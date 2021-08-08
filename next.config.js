module.exports = {
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  }, 
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true
}
