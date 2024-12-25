'use client'

import { usePlayer } from '@/contexts/PlayerContext'
import { formatTime } from '@/lib/utils'
import Image from 'next/image'
import { useCallback } from 'react'

export function Player() {
  const { state, dispatch, audioRef } = usePlayer()
  const { currentSong, isPlaying, volume, progress, duration } = state

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch({ type: 'PAUSE' })
    } else {
      dispatch({ type: 'PLAY' })
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    dispatch({ type: 'SET_VOLUME', payload: value })
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = value
      dispatch({ type: 'SET_PROGRESS', payload: value })
    }
  }

  const handleNext = useCallback(() => {
    if (state.queue.length > 0) {
      dispatch({ type: 'SET_SONG', payload: state.queue[0] })
      dispatch({ type: 'REMOVE_FROM_QUEUE', payload: state.queue[0].id })
    }
  }, [state.queue, dispatch])

  if (!currentSong) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-white/10 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Song Info */}
        <div className="flex items-center space-x-4 min-w-0 w-1/3">
          <div className="relative h-14 w-14 flex-shrink-0">
            <Image
              src={currentSong.coverUrl}
              alt={currentSong.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-medium truncate">{currentSong.title}</h3>
            <p className="text-xs text-gray-400 truncate">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-1/3">
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-gray-400 hover:text-white"
              onClick={() => {/* Previous */}}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button
              className="p-3 bg-white rounded-full text-black hover:bg-gray-200"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              className="p-2 text-gray-400 hover:text-white"
              onClick={handleNext}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-xs text-gray-400 w-10">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min={0}
              max={duration}
              value={progress}
              onChange={handleProgressChange}
              className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
            <span className="text-xs text-gray-400 w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3 w-1/3 justify-end">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
      </div>
    </div>
  )
}
