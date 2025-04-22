import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // set up remotepatterns to use external images
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bytegrad.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
