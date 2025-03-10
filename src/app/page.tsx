import React from 'react'
import { ThemeGenerator } from '@/features/theme-generator/components/ThemeGenerator'
import { Header } from '@/features/shared/components/layout/Header'
import { Footer } from '@/features/shared/components/layout/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">イラストチャレンジメーカー</h1>
            <p className="text-white">ランダムなお題でイラスト創作の幅を広げましょう</p>
          </div>

          <ThemeGenerator />
        </div>
      </main>

      <Footer />
    </div>
  )
}
