import type { ReactNode } from "react";
import { fontClassName } from "@/lib/fonts";
import "../globals.css";

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
