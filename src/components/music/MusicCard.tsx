'use client'

import Image from 'next/image'
import { useState } from 'react'

export interface MusicCardProps {
  title: string
  artist: string
  coverUrl: string
  playCount?: string
  album?: string
}

export function MusicCard({ title, artist, coverUrl, playCount, album }: MusicCardProps) {
  const [imageError, setImageError] = useState(false)
  
  const fallbackImage = `/images/default-album.svg`

  return (
    <div className="music-card group cursor-pointer">
      <div className="relative aspect-square rounded-md overflow-hidden bg-[#1E1E1E]">
        <Image
          src={imageError ? fallbackImage : coverUrl}
          alt={`${title} by ${artist}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="absolute bottom-4 right-4 p-3 rounded-full bg-green-500 text-white hover:scale-110 transition-transform"
            aria-label="播放"
          >
            <PlayIcon />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{artist}</p>
        {album && <p className="text-sm text-gray-400 truncate">{album}</p>}
        {playCount && <p className="text-xs text-gray-500 mt-1">{playCount} 播放</p>}
      </div>
    </div>
  )
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  )
}
