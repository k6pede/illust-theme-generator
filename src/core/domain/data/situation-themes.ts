import { ThemeItem } from '../models/theme'

/** シチュエーション */
export const situationThemes: ThemeItem[] = [
  { id: 's-1', value: '冒険の途中', category: 'situation', tags: ['action'] },
  { id: 's-2', value: '休息中', category: 'situation', tags: ['relaxed'] },
  { id: 's-3', value: '戦闘シーン', category: 'situation', tags: ['action'] },
  { id: 's-4', value: '料理中', category: 'situation', tags: ['daily'] },
  { id: 's-5', value: '何かを発見した瞬間', category: 'situation', tags: ['discovery'] },
  { id: 's-6', value: '雨宿り', category: 'situation', tags: ['weather'] },
  { id: 's-7', value: '星空を見上げる', category: 'situation', tags: ['night'] },
  { id: 's-8', value: '音楽を奏でる', category: 'situation', tags: ['art'] },
  { id: 's-9', value: '魔法の詠唱', category: 'situation', tags: ['fantasy'] },
  { id: 's-10', value: '誰かを救う瞬間', category: 'situation', tags: ['heroic'] },
  // 追加のシチュエーション
]
