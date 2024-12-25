'use client'

import { ReactNode } from 'react'

interface MusicSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function MusicSection({ title, subtitle, children, className = '' }: MusicSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
