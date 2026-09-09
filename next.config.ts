import type { NextConfig } from "next";

// guidly.jp は GitHub Pages 配信のため常に静的エクスポート。
// trailingSlash: true で /en/ → /en/index.html を生成する。
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
