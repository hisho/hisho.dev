import type { NextConfig } from 'next'

const config: NextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}

export default config
