const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = withNextVideo(nextConfig)
