'use client'

import { useState } from 'react'

const categories = [
  "播客", "充电", "轻松情怀", "健身", "放松", 
  "添加", "通勤", "伤心难过", "浪漫", "专注", "睡眠"
]

export function CategoryPills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors
            ${selectedCategory === category
              ? 'bg-white text-black'
              : 'bg-white/10 hover:bg-white/20'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
