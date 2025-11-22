import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "CONCRETE RUNNERS - Industrial Running Crew",
  description: "도시의 콘크리트 위를 달리는 산업적 러닝 크루. 브루탈리즘 미학과 러닝의 순수함을 결합한 서울의 러닝 크루입니다.",
  keywords: ["러닝크루", "서울러닝", "성수동러닝", "브루탈리즘", "도심러닝", "running crew", "urban running"],
  authors: [{ name: "Concrete Runners" }],
  creator: "Concrete Runners",
  publisher: "Concrete Runners",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://concreterunners.com",
    title: "CONCRETE RUNNERS - Industrial Running Crew",
    description: "도시의 콘크리트 위를 달리는 산업적 러닝 크루",
    siteName: "Concrete Runners",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONCRETE RUNNERS - Industrial Running Crew",
    description: "도시의 콘크리트 위를 달리는 산업적 러닝 크루",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        <Toaster />
      </body>
    </html>
  );
}
