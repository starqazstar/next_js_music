import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mock new releases database
const newReleases = [
  {
    id: '4',
    title: '最伟大的作品',
    artist: '周杰伦',
    album: '最伟大的作品',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    audioUrl: '/audio/zuiweida.mp3',
    duration: 294,
    playCount: 500000,
    createdAt: new Date('2023-12-01'),
  },
  {
    id: '5',
    title: '倒带',
    artist: '邓紫棋',
    album: 'E.P.3',
    coverUrl: 'https://images.unsplash.com/photo-1482442120256-9c038b5de4be?w=400&h=400&fit=crop',
    audioUrl: '/audio/daodai.mp3',
    duration: 241,
    playCount: 300000,
    createdAt: new Date('2023-11-15'),
  },
  {
    id: '6',
    title: '黑色幽默',
    artist: '华晨宇',
    album: '新世界',
    coverUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop',
    audioUrl: '/audio/heiseyoumo.mp3',
    duration: 289,
    playCount: 400000,
    createdAt: new Date('2023-12-10'),
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ 
      data: newReleases,
      message: '获取新歌发行成功'
    })
  } catch (error) {
    return NextResponse.json(
      { error: '获取新歌发行失败' },
      { status: 500 }
    )
  }
}
