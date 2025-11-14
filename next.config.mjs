import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
const externalPackages = [
  'subset-font',
  'harfbuzzjs',
  'fontverter',
  'fonteditor-core',
  'wawoff2',
  'woff2sfnt-sfnt2woff',
]

const wasmAssets = [
  'harfbuzzjs/hb-subset.wasm',
  'harfbuzzjs/hb.wasm',
  'fonteditor-core/woff2/woff2.wasm',
].map((assetPath) => require.resolve(assetPath))

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  serverExternalPackages: externalPackages,
  outputFileTracingIncludes: {
    '/api/subset': wasmAssets,
  },
}

export default nextConfig
