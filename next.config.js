/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true, // Tells Next.js to compile styled-components correctly
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/40',
            },
            {
                protocol: 'https',
                hostname: 'assets.example.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "react/compiler-runtime": "react-compiler-runtime",
        };
        return config;
    },
};

module.exports = nextConfig;