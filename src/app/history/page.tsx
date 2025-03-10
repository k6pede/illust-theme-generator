'use client'

import React from 'react'
import { Header } from '@/features/shared/components/layout/Header'
import { Footer } from '@/features/shared/components/layout/Footer'
import { Card } from '@/features/shared/components/ui/Card'
import { Button } from '@/features/shared/components/ui/Button'
import { useThemeStore } from '@/features/theme-generator/store/themeStore'

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    character: 'キャラクター',
    background: '背景',
    situation: 'シチュエーション',
    composition: '構図',
    mood: '雰囲気',
  }

  return labels[category] || category
}

export default function HistoryPage() {
  const { generatedHistory, clearHistory } = useThemeStore()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">履歴</h1>

            <Button
              variant="secondary"
              onClick={clearHistory}
              disabled={generatedHistory.length === 0}
            >
              履歴をクリア
            </Button>
          </div>

          {generatedHistory.length === 0 ? (
            <Card className="p-6 text-center">
              <p className="text-gray-500">お題の生成履歴はまだありません</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {generatedHistory.map((theme) => (
                <Card key={theme.id} className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(theme.timestamp).toLocaleString()}
                  </p>
                  <ul className="space-y-2">
                    {theme.items.map((item) => (
                      <li key={item.id} className="p-2 bg-gray-100 rounded">
                        <span className="font-medium">{getCategoryLabel(item.category)}:</span>{' '}
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
