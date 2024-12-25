'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { name: '播放列表', href: '/library/playlists' },
  { name: '专辑', href: '/library/albums' },
  { name: '艺人', href: '/library/artists' },
]

export function LibraryTabs() {
  const pathname = usePathname()

  return (
    <div className="border-b border-white/10">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`
                border-b-2 py-4 px-1 text-sm font-medium
                ${isActive
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
                }
              `}
            >
              {tab.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
