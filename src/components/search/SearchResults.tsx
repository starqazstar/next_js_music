'use client'

import { MusicGrid } from '../music/MusicGrid'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { api } from '@/lib/api'
import { Song } from '@/types'
import { LoadingSpinner } from '../ui/LoadingSpinner'

interface SearchResultsProps {
  initialQuery: string
}

export function SearchResults({ initialQuery }: SearchResultsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Song[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const newQuery = searchParams.get('q') || ''
    setQuery(newQuery)

    async function fetchResults() {
      if (!newQuery.trim()) {
        setResults([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await api.music.search(newQuery)
        if (response.error) {
          throw new Error(response.error)
        }
        setResults(response.data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : '搜索失败')
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [searchParams])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
      </div>
    )
  }

  if (!query.trim()) {
    return (
      <div className="text-center text-gray-500 py-8">
        请输入搜索关键词
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        未找到相关结果
      </div>
    )
  }

  return (
    <MusicGrid
      title={`搜索结果: "${query}"`}
      items={results.map(song => ({
        id: song.id,
        title: song.title,
        artist: song.artist,
        coverUrl: song.coverUrl,
        playCount: `${Math.floor(song.playCount / 10000)}万+`
      }))}
    />
  )
}
