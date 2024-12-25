'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MusicGrid } from '@/components/music/MusicGrid'
import { Song } from '@/types'

async function searchSongs(query: string): Promise<Song[]> {
  try {
    const response = await fetch(`https://www.myfreemp3.com.cn/api/search?q=${encodeURIComponent(query)}`)
    const data = await response.json()
    
    // 转换API返回的数据格式为我们的Song类型
    return data.songs.map((song: any) => ({
      id: song.id.toString(),
      title: song.name,
      artist: song.artists[0].name,
      album: song.album.name,
      coverUrl: song.album.picUrl || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
      audioUrl: song.url,
      duration: Math.floor(song.duration / 1000),
      playCount: song.playCount || 0,
      createdAt: new Date().toISOString()
    }))
  } catch (error) {
    console.error('Error searching songs:', error)
    return []
  }
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<Song[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) return

    const fetchResults = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const songs = await searchSongs(query)
        setResults(songs)
      } catch (error) {
        console.error('Error fetching results:', error)
        setError('搜索出错，请稍后重试')
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">搜索结果：{query}</h1>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : results.length === 0 ? (
        <div className="text-gray-400 text-center">未找到相关歌曲</div>
      ) : (
        <MusicGrid items={results} />
      )}
    </div>
  )
}
