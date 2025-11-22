import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CONCRETE RUNNERS - Industrial Running Crew",
  description: "도시의 콘크리트 위를 달리는 산업적 러닝 크루",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
