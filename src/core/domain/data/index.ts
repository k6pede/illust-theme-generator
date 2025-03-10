/**
 * お題データのインデックスファイル
 *
 * このファイルは各カテゴリのお題データを一箇所に集約し、
 * アプリケーション全体からアクセスしやすくするためのものです。
 *
 * 新しいお題カテゴリを追加する場合は:
 * 1. 該当するthemesファイルを作成
 * 2. このファイルでimportして追加
 * 3. ThemeCategoryタイプに新カテゴリを追加
 */

import { characterThemes } from './character-themes'
import { backgroundThemes } from './background-themes'
import { situationThemes } from './situation-themes'
import { compositionThemes } from './composition-themes'
import { moodThemes } from './mood-themes'

export const allThemes = {
  character: characterThemes,
  background: backgroundThemes,
  situation: situationThemes,
  composition: compositionThemes,
  mood: moodThemes,
} as const
