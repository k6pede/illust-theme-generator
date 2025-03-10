import { create } from 'zustand'
// persist ミドルウェアを削除し、まずは基本機能だけ実装

import { ThemeCategory, GeneratedTheme } from '@/core/domain/models/theme'
import { generateRandomTheme } from '@/core/domain/services/theme-generator'

interface ThemeState {
  currentTheme: GeneratedTheme | null
  excludedItems: string[]
  selectedCategories: ThemeCategory[]
  generatedHistory: GeneratedTheme[]

  // アクション
  generateTheme: () => void
  excludeItem: (itemId: string) => void
  includeItem: (itemId: string) => void
  setCategories: (categories: ThemeCategory[]) => void
  clearHistory: () => void
}

export const useThemeStore = create<ThemeState>()((set, get) => ({
  currentTheme: null,
  excludedItems: [],
  selectedCategories: ['character', 'background'],
  generatedHistory: [],

  generateTheme: () => {
    const { selectedCategories, excludedItems } = get()
    const newTheme = generateRandomTheme(selectedCategories, excludedItems)

    set((state) => ({
      currentTheme: newTheme,
      generatedHistory: [newTheme, ...state.generatedHistory].slice(0, 10), // 最新10件を保持
    }))
  },

  excludeItem: (itemId: string) => {
    set((state) => ({
      excludedItems: [...state.excludedItems, itemId],
    }))
  },

  includeItem: (itemId: string) => {
    set((state) => ({
      excludedItems: state.excludedItems.filter((id) => id !== itemId),
    }))
  },

  setCategories: (categories: ThemeCategory[]) => {
    set({ selectedCategories: categories })
  },

  clearHistory: () => {
    set({ generatedHistory: [] })
  },
}))
