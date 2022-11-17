/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
   domains: [
    "img.sndimg.com", 
    "media-cdn.tripadvisor.com", 
    "images.squarespace-cdn.com", 
    "i.pinimg.com",
    "seeklogo.com",
    "www.freeiconspng.com",
    "assets.turbologo.com",
    "www.mensjournal.com",
    "www.thespruceeats.com",
    "hips.hearstapps.com"
  ]
  },
}

module.exports = nextConfig
