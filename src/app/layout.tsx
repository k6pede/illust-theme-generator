import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'イラストチャレンジメーカー',
  description: 'ランダムなお題でイラスト創作の幅を広げよう',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>{children}</body>
    </html>
  )
}
