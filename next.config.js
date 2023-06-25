/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  env: {
      customKey: 'my-value',
  },
  sassOptions: {
    sourceMap: false,
    includePaths: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src/app/share'),
      path.join(__dirname, 'src/app/components'),
      path.join(__dirname, 'src/app/@company'),
      path.join(__dirname, 'src/app/@professionals')
    ]
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
}

module.exports = nextConfig
