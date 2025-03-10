import React, { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          イラストチャレンジメーカー
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/history" className="text-gray-600 hover:text-gray-900">
                履歴
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
