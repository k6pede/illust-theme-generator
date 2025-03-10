import { v4 as uuidv4 } from 'uuid'
import { ThemeCategory, ThemeItem, GeneratedTheme } from '../models/theme'
import { allThemes } from '../data'

/**
 * 複数カテゴリからランダムにお題を生成する
 */
export const generateRandomTheme = (
  categories: ThemeCategory[] = ['character'],
  excludedItems: string[] = []
): GeneratedTheme => {
  const items: ThemeItem[] = []

  categories.forEach((category) => {
    const selectedTheme = selectRandomTheme(category, excludedItems)
    if (selectedTheme) {
      items.push(selectedTheme)
    }
  })

  return {
    id: uuidv4(),
    timestamp: Date.now(),
    items,
  }
}

/**
 * 指定されたカテゴリからランダムにお題を選択する
 */
const selectRandomTheme = (
  category: ThemeCategory,
  excludedItems: string[] = []
): ThemeItem | null => {
  const categoryThemes = allThemes[category]
  if (!categoryThemes || categoryThemes.length === 0) return null

  // 除外アイテムをフィルタリング
  const availableThemes = categoryThemes.filter((item) => !excludedItems.includes(item.id))
  if (availableThemes.length === 0) return null

  // ランダムに選択
  const randomIndex = Math.floor(Math.random() * availableThemes.length)
  return availableThemes[randomIndex]
}
