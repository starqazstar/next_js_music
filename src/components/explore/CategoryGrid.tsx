'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  image: string
}

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/explore/${category.id}`}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
