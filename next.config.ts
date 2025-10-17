import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.ir-tbz-sh1.arvanstorage.ir"
            }
        ]
    }
};

export default nextConfig;
