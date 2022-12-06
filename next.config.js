/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental:{ appDir: true },
  i18n: {
    locales: ['en', 'hi', 'ar'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
