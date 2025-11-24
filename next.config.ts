import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/eventkarma/:path*',
        has: [
          {
            type: 'host',
            value: 'eventkarma.ai',
          },
        ],
      },
      {
        source: '/:path*',
        destination: '/eventkarma/:path*',
        has: [
          {
            type: 'host',
            value: 'www.eventkarma.ai',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
