'use client'

import { useState } from 'react'
import { SearchIcon } from '../ui/Icons'

export function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="flex-1 max-w-xl relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索音乐、专辑、艺人..."
        className="w-full pl-12 pr-4 py-2 bg-white/10 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
      />
    </div>
  )
}
