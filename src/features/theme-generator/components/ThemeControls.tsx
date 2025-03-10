'use client'

import React, { FC } from 'react'
import { ThemeCategory } from '@/core/domain/models/theme'
import { Button } from '@/features/shared/components/ui/Button'
import { useThemeStore } from '../store/themeStore'

export const ThemeControls: FC = () => {
  const { selectedCategories, setCategories, generateTheme } = useThemeStore()

  const handleCategoryChange = (category: ThemeCategory, checked: boolean) => {
    if (checked) {
      setCategories([...selectedCategories, category])
    } else {
      setCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const categories: { value: ThemeCategory; label: string }[] = [
    { value: 'character', label: 'キャラクター' },
    { value: 'background', label: '背景' },
    { value: 'situation', label: 'シチュエーション' },
    { value: 'composition', label: '構図' },
    { value: 'mood', label: '雰囲気' },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-black">カテゴリ選択</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <label
              key={category.value}
              className="flex items-center space-x-2 cursor-pointer text-black"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.value)}
                onChange={(e) => handleCategoryChange(category.value, e.target.checked)}
                className="rounded text-blue-500 focus:ring-blue-500"
              />
              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button onClick={generateTheme} size="lg" className="w-full">
        お題を生成する
      </Button>
    </div>
  )
}
