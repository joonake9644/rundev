import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CONCRETE RUNNERS - Industrial Running Crew',
  description: '도시의 콘크리트 위를 달리는 산업적 러닝 크루',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
