/** @type {import('next').NextConfig} */
const externalPackages = [
  'subset-font',
  'harfbuzzjs',
  'fontverter',
  'fonteditor-core',
  'wawoff2',
  'woff2sfnt-sfnt2woff',
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: externalPackages,
}

export default nextConfig
