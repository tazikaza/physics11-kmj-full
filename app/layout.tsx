import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "11 класс Физика — КМЖ 2024-2025",
  description: "Полный годовой план с тестами и теорией",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
