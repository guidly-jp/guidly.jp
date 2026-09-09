# guidly.jp

ガイドリー株式会社 コーポレートサイト（Next.js 15 静的エクスポート → GitHub Pages）

- `/` 日本語 ／ `/en/` 英語（TaxMatch Japan 主役の別編集）／ `/privacy/`
- 文言は `src/content/ja.ts` `src/content/en.ts` に集約。デザインは `src/app/globals.css` の `@theme` トークン
- お問い合わせフォームは Formspree（`src/lib/site.ts`）。ハニーポット付き
- GA4 を入れる場合は `NEXT_PUBLIC_GA_ID` を設定（現状未配線）

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ に静的出力
```

## デプロイ

`main` への push で `.github/workflows/deploy.yml` が `out/` を GitHub Pages に公開する。
前提: リポジトリ Settings > Pages > Source = **GitHub Actions**（ブランチ配信のままだと壊れる）。

`_legacy/` は旧サイト（2025〜2026-09）の静的HTML。参照用。
