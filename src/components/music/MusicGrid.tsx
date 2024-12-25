'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@/components/ui/Grid'
import { usePlayer } from '@/contexts/PlayerContext'
import { Song } from '@/types'
import { useState } from 'react'

interface MusicGridProps {
  title?: string
  items: Song[]
  viewAllLink?: string
}

export function MusicGrid({ title, items = [], viewAllLink }: MusicGridProps) {
  const { state, dispatch } = usePlayer()
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handlePlay = (song: Song) => {
    if (state.currentSong?.id === song.id) {
      dispatch({ type: state.isPlaying ? 'PAUSE' : 'PLAY' })
      return
    }
    dispatch({ type: 'SET_SONG', payload: song })
    dispatch({ type: 'PLAY' })
  }

  const formatPlayCount = (count: number) => {
    if (count >= 10000) {
      return `${Math.floor(count / 10000)}万+`
    }
    return count.toString()
  }

  const handleImageError = (songId: string) => {
    setImageErrors(prev => ({ ...prev, [songId]: true }))
  }

  const getDefaultCoverUrl = () => {
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
  }

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              查看全部
            </Link>
          )}
        </div>
      )}

      <Grid columns={{ default: 2, sm: 2, md: 3, lg: 4 }} gap={4} key="music-grid">
        {items.map((song) => {
          const isCurrentSong = state.currentSong?.id === song.id
          const isPlaying = isCurrentSong && state.isPlaying
          const isLoading = isCurrentSong && state.isLoading

          return (
            <div
              key={song.id}
              className="group relative bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={imageErrors[song.id] ? getDefaultCoverUrl() : song.coverUrl}
                  alt={song.title}
                  fill
                  className="object-cover rounded-md"
                  onError={() => handleImageError(song.id)}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  priority={isCurrentSong}
                />
                <button 
                  className="absolute right-2 bottom-2 p-3 rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                  onClick={() => handlePlay(song)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg 
                      className="animate-spin w-4 h-4" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : isPlaying ? (
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                <p className="text-xs text-gray-500">{formatPlayCount(song.playCount)}</p>
                {isCurrentSong && state.error && (
                  <p className="text-xs text-red-500">{state.error}</p>
                )}
              </div>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}
