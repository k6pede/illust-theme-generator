'use client'

import React, { FC } from 'react'
import { Card } from '@/features/shared/components/ui/Card'
import { useThemeStore } from '../store/themeStore'
import { ShareButtons } from './ShareButtons'

export const ThemeDisplay: FC = () => {
  const { currentTheme } = useThemeStore()

  if (!currentTheme) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">お題を生成するには「お題を生成」ボタンを押してください</p>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4 text-black">今日のお題</h2>
      <ul className="space-y-3">
        {currentTheme.items.map((item) => (
          <li key={item.id} className="p-3 bg-gray-100 rounded text-black">
            <span className="font-medium">{getCategoryLabel(item.category)}:</span> {item.value}
          </li>
        ))}
      </ul>

      <ShareButtons theme={currentTheme} />
    </Card>
  )
}

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
