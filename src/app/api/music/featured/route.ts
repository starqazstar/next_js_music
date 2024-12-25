import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mock featured songs database
const featuredSongs = [
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
  {
    id: '3',
    title: '起风了',
    artist: '买辣椒也用券',
    album: '起风了',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    audioUrl: '/audio/qifengle.mp3',
    duration: 313,
    playCount: 900000,
    createdAt: new Date('2023-03-01'),
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ 
      data: featuredSongs,
      message: '获取推荐歌曲成功'
    })
  } catch (error) {
    return NextResponse.json(
      { error: '获取推荐歌曲失败' },
      { status: 500 }
    )
  }
}
