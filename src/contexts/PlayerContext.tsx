'use client'

import React, { createContext, useContext, useReducer, useRef, useEffect } from 'react'
import { Song } from '@/types'

interface PlayerState {
  currentSong: Song | null
  isPlaying: boolean
  volume: number
  progress: number
  duration: number
  queue: Song[]
  isLoading: boolean
  error: string | null
}

type PlayerAction =
  | { type: 'SET_SONG'; payload: Song }
  | { type: 'PLAY' }
  | { type: 'PAUSE' }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'SET_DURATION'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_TO_QUEUE'; payload: Song }
  | { type: 'REMOVE_FROM_QUEUE'; payload: string }
  | { type: 'CLEAR_QUEUE' }

const initialState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  volume: 1,
  progress: 0,
  duration: 0,
  queue: [],
  isLoading: false,
  error: null
}

interface PlayerContextType {
  state: PlayerState
  dispatch: React.Dispatch<PlayerAction>
  audioRef: React.RefObject<HTMLAudioElement>
}

const PlayerContext = createContext<PlayerContextType | null>(null)

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'SET_SONG':
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: false,
        progress: 0,
        isLoading: true,
        error: null
      }
    case 'PLAY':
      return { ...state, isPlaying: true, error: null }
    case 'PAUSE':
      return { ...state, isPlaying: false }
    case 'SET_VOLUME':
      return { ...state, volume: action.payload }
    case 'SET_PROGRESS':
      return { ...state, progress: action.payload }
    case 'SET_DURATION':
      return { ...state, duration: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload, isPlaying: false, isLoading: false }
    case 'ADD_TO_QUEUE':
      return { ...state, queue: [...state.queue, action.payload] }
    case 'REMOVE_FROM_QUEUE':
      return {
        ...state,
        queue: state.queue.filter(song => song.id !== action.payload)
      }
    case 'CLEAR_QUEUE':
      return { ...state, queue: [] }
    default:
      return state
  }
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(playerReducer, initialState)
  const audioRef = useRef<HTMLAudioElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)

  // Handle song changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !state.currentSong) return

    // Cancel any existing play promise
    if (playPromiseRef.current) {
      audio.pause()
    }

    const loadAndPlay = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true })
        audio.src = state.currentSong.audioUrl
        await audio.load()
        
        if (state.isPlaying) {
          playPromiseRef.current = audio.play()
          await playPromiseRef.current
          playPromiseRef.current = null
        }
        
        dispatch({ type: 'SET_LOADING', payload: false })
      } catch (error) {
        console.error('Error loading audio:', error)
        dispatch({ 
          type: 'SET_ERROR', 
          payload: '无法加载音频文件，请稍后重试' 
        })
      }
    }

    loadAndPlay()
  }, [state.currentSong?.id])

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !state.currentSong) return

    const togglePlayback = async () => {
      try {
        if (state.isPlaying) {
          playPromiseRef.current = audio.play()
          await playPromiseRef.current
          playPromiseRef.current = null
        } else {
          audio.pause()
        }
      } catch (error) {
        console.error('Error toggling playback:', error)
        dispatch({ 
          type: 'SET_ERROR', 
          payload: '播放出错，请稍后重试' 
        })
      }
    }

    togglePlayback()
  }, [state.isPlaying])

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume
    }
  }, [state.volume])

  return (
    <PlayerContext.Provider value={{ state, dispatch, audioRef }}>
      {children}
      <audio
        ref={audioRef}
        preload="auto"
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispatch({
              type: 'SET_PROGRESS',
              payload: audioRef.current.currentTime
            })
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            dispatch({
              type: 'SET_DURATION',
              payload: audioRef.current.duration
            })
          }
        }}
        onEnded={() => {
          dispatch({ type: 'PAUSE' })
        }}
        onError={() => {
          dispatch({ 
            type: 'SET_ERROR', 
            payload: '音频文件加载失败，请检查网络连接' 
          })
        }}
        onCanPlay={() => {
          dispatch({ type: 'SET_LOADING', payload: false })
          if (state.isPlaying) {
            audioRef.current?.play().catch(error => {
              console.error('Error on canplay:', error)
              dispatch({ 
                type: 'SET_ERROR', 
                payload: '播放出错，请稍后重试' 
              })
            })
          }
        }}
      />
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
