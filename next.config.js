/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode:true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll:800,
      aggregateTimeout: 300,
    }
  }
}
 
module.exports = nextConfig



