import React, { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} イラストチャレンジメーカー - あなたの創作をサポート
        </p>
      </div>
    </footer>
  )
}
