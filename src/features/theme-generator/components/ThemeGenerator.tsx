import React, { FC } from 'react'
import { ThemeControls } from './ThemeControls'
import { ThemeDisplay } from './ThemeDisplay'
import { Card } from '@/features/shared/components/ui/Card'

export const ThemeGenerator: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="p-6">
        <ThemeControls />
      </Card>

      <ThemeDisplay />
    </div>
  )
}
