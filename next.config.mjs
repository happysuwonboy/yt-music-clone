/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : '*.unplash.com'
            }
        ]
    }
};

export default nextConfig;
