'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold">
          My Music
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="search"
              placeholder="搜索音乐、歌手、歌词..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-10 rounded-full bg-white/10 border border-white/10 focus:outline-none focus:border-white/20 focus:bg-white/20 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        <nav className="flex items-center gap-4">
          <Link
            href="/library"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            音乐库
          </Link>
          <Link
            href="/playlists"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            歌单
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <Link
            href="/auth/login"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            登录
          </Link>
          <Link
            href="/auth/register"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
          >
            注册
          </Link>
        </nav>
      </div>
    </header>
  )
}
