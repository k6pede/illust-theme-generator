import React, { FC, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>{children}</div>
}
