import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Root path for eventkarma.ai
      {
        source: '/',
        destination: '/eventkarma',
        has: [
          {
            type: 'host',
            value: 'eventkarma.ai',
          },
        ],
      },
      {
        source: '/',
        destination: '/eventkarma',
        has: [
          {
            type: 'host',
            value: 'www.eventkarma.ai',
          },
        ],
      },
      // All other paths (must have at least one segment)
      {
        source: '/:path+',
        destination: '/eventkarma/:path+',
        has: [
          {
            type: 'host',
            value: 'eventkarma.ai',
          },
        ],
      },
      {
        source: '/:path+',
        destination: '/eventkarma/:path+',
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
