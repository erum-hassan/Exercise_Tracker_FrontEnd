/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['images.freepik.com','images.flaticon.com']
  }
}

module.exports = nextConfig
