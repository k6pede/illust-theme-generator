export type ThemeCategory = 'character' | 'background' | 'situation' | 'mood' | 'composition'

export type ThemeItem = {
  id: string
  value: string
  category: ThemeCategory
  tags?: string[]
}

export type GeneratedTheme = {
  id: string
  timestamp: number
  items: ThemeItem[]
}

// 除外アイテムの型も定義
export type ExcludedItem = {
  id: string
  value: string
  category: ThemeCategory
}
