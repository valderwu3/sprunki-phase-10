import BundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: false,
});

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  experimental: {
    cssChunking: 'strict',
  },
  productionBrowserSourceMaps: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  trailingSlash: false,
  env: {
    UE_WEB_URL: process.env.UE_WEB_URL,
  },
};

export default withNextIntl(withMDX(withBundleAnalyzer(nextConfig))); 