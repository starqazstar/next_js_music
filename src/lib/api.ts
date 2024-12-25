import { ApiResponse } from '@/types'

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`/api${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'API request failed')
    }

    return data
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

export const api = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      fetchApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    register: (email: string, password: string) =>
      fetchApi('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    logout: () => fetchApi('/auth/logout', { method: 'POST' }),
  },

  // Music endpoints
  music: {
    search: (query: string) =>
      fetchApi(`/music/search?q=${encodeURIComponent(query)}`),
    getFeatured: () => fetchApi('/music/featured'),
    getNewReleases: () => fetchApi('/music/new-releases'),
    getSongById: (id: string) => fetchApi(`/music/songs/${id}`),
  },

  // Playlist endpoints
  playlists: {
    getAll: () => fetchApi('/playlists'),
    getById: (id: string) => fetchApi(`/playlists/${id}`),
    create: (data: { title: string; description: string }) =>
      fetchApi('/playlists', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    addSong: (playlistId: string, songId: string) =>
      fetchApi(`/playlists/${playlistId}/songs`, {
        method: 'POST',
        body: JSON.stringify({ songId }),
      }),
  },
}
