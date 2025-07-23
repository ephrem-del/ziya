import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only use static export in production
  ...(isProduction ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  // Add trailing slash for better compatibility with static hosting
  trailingSlash: true
};

export default withNextIntl(nextConfig);
