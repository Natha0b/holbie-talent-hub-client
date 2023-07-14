/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
    server: {
        port: 3000
    },
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
    images: {
        domains: ['*'], // Allows image hostnames
    },
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
}

module.exports = nextConfig
