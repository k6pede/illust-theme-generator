'use client'

import React, { FC } from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from 'next-share'
import { GeneratedTheme } from '@/core/domain/models/theme'

interface ShareButtonsProps {
  theme: GeneratedTheme
}

export const ShareButtons: FC<ShareButtonsProps> = ({ theme }) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const shareUrl = `${baseUrl}`

  const shareText = `今日のイラストお題:\n${theme.items
    .map((item) => `${getCategoryLabel(item.category)}: ${item.value}`)
    .join('\n')}\n#イラストチャレンジ #イラスト #ランダムお題ジェネレーター`

  return (
    <div className="flex space-x-2 mt-4">
      <TwitterShareButton url={shareUrl} title={shareText}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <FacebookShareButton url={shareUrl} quote={shareText}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LineShareButton url={shareUrl} title={shareText}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
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
