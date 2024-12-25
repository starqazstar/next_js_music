import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mock database
const songs = [
  {
    id: '1',
    title: '晴天',
    artist: '周杰伦',
    album: '叶惠美',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    audioUrl: '/audio/qingtian.mp3',
    duration: 269,
    playCount: 1000000,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    title: '光年之外',
    artist: '邓紫棋',
    album: '新的心跳',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    audioUrl: '/audio/guangnian.mp3',
    duration: 235,
    playCount: 800000,
    createdAt: new Date('2023-02-01'),
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json({ data: [] })
    }

    // Search implementation
    const results = songs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.album.toLowerCase().includes(query.toLowerCase())
    )

    return NextResponse.json({ data: results })
  } catch (error) {
    return NextResponse.json(
      { error: '搜索失败' },
      { status: 500 }
    )
  }
}
