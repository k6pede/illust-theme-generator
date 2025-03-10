import { NextResponse } from 'next/server'
import { generateRandomTheme } from '@/core/domain/services/theme-generator'
import { ThemeCategory } from '@/core/domain/models/theme'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { categories = ['character'], excludedItems = [] } = body

    const theme = generateRandomTheme(categories as ThemeCategory[], excludedItems as string[])

    return NextResponse.json({ theme })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate theme' }, { status: 500 })
  }
}
