import { Song } from '@/types'

export const featuredSongs: Song[] = [
  {
    id: '1',
    title: '醉鬼的敬酒曲',
    artist: '上海彩虹室内合唱团',
    album: '醉鬼的敬酒曲',
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop',
    audioUrl: '/audio/zuigui.mp3',
    duration: 359,
    playCount: 850000,
    createdAt: '2023-12-01',
  },
  {
    id: '2',
    title: '晚婚',
    artist: '李宗盛',
    album: '晚婚 (Live)',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    audioUrl: '/audio/wanhun.mp4',
    duration: 294,
    playCount: 1200000,
    createdAt: '2023-11-15',
  },
  {
    id: '3',
    title: '初恋',
    artist: '回春丹',
    album: '初恋',
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    audioUrl: '/audio/chulian.mp3',
    duration: 222,
    playCount: 680000,
    createdAt: '2023-12-10',
  }
]

export const newReleases: Song[] = [
  {
    id: '4',
    title: 'Backseat',
    artist: 'Ryan Beatty',
    album: 'Backseat',
    coverUrl: 'https://images.unsplash.com/photo-1482442120256-9c038b5de4be?w=400&h=400&fit=crop',
    audioUrl: '/audio/backseat.mp3',
    duration: 239,
    playCount: 450000,
    createdAt: '2023-12-18',
  },
  {
    id: '5',
    title: '志铭',
    artist: '犬儒乐队',
    album: '志铭',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: '/audio/zhiming.mp3',
    duration: 306,
    playCount: 320000,
    createdAt: '2023-12-15',
  },
  {
    id: '6',
    title: '皮囊',
    artist: '犬儒乐队',
    album: '皮囊',
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop',
    audioUrl: '/audio/pinang.mp3',
    duration: 234,
    playCount: 280000,
    createdAt: '2023-12-17',
  },
  {
    id: '7',
    title: '你的',
    artist: '贺仙人',
    album: '你的',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    audioUrl: '/audio/nide.mp3',
    duration: 189,
    playCount: 150000,
    createdAt: '2023-12-19',
  }
]
