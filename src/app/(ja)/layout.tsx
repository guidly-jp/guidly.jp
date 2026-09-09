import type { ReactNode } from "react";
import { fontClassName } from "@/lib/fonts";
import "../globals.css";

export default function JaLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
