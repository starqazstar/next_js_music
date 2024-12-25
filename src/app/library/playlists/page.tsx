import { MusicGrid } from '@/components/music/MusicGrid'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

const playlists = [
  {
    title: "我的最爱",
    artist: "私人歌单",
    coverUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    playCount: "100首歌"
  },
  {
    title: "周杰伦精选",
    artist: "歌单",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    playCount: "50首歌"
  },
  {
    title: "学习专用",
    artist: "私人歌单",
    coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    playCount: "75首歌"
  }
]

export default function PlaylistsPage() {
  return (
    <ClientWrapper>
      <div className="mt-6">
        <MusicGrid 
          title="播放列表"
          items={playlists}
        />
      </div>
    </ClientWrapper>
  )
}
