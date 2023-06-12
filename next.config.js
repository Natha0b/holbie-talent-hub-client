/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  env: {
      customKey: 'my-value',
  },
  sassOptions: {
    sourceMap: true, 
    includePaths: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src/app/share'),
      path.join(__dirname, 'src/app/components'),
      path.join(__dirname, 'src/app/@company'),
      path.join(__dirname, 'src/app/@professionals')
    ]
  }
}

module.exports = nextConfig
