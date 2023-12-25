/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    loader: 'custom',
    loaderFile:'/src/components/ui/ImgLoader/loader.js',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  }
}

module.exports = nextConfig
