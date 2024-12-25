export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface Song {
  id: string
  title: string
  artist: string
  album: string
  coverUrl: string
  audioUrl: string
  duration: number
  playCount: number
  createdAt: string
}

export interface Playlist {
  id: string
  title: string
  description: string
  coverUrl: string
  userId: string
  songs: Song[]
  createdAt: string
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}
