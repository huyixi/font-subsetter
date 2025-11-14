/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: [
      'subset-font',
      'harfbuzzjs',
      'fontverter',
      'fonteditor-core',
      'wawoff2',
      'woff2sfnt-sfnt2woff',
    ],
    serverExternalPackages: [
      'subset-font',
      'harfbuzzjs',
      'fontverter',
      'fonteditor-core',
      'wawoff2',
      'woff2sfnt-sfnt2woff',
    ],
  },
}

export default nextConfig
