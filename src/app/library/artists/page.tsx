import { MusicGrid } from '@/components/music/MusicGrid'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

const artists = [
  {
    title: "周杰伦",
    artist: "艺人",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    playCount: "50张专辑"
  },
  {
    title: "邓紫棋",
    artist: "艺人",
    coverUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    playCount: "30张专辑"
  },
  {
    title: "华晨宇",
    artist: "艺人",
    coverUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop",
    playCount: "20张专辑"
  }
]

export default function ArtistsPage() {
  return (
    <ClientWrapper>
      <div className="mt-6">
        <MusicGrid 
          title="艺人"
          items={artists}
        />
      </div>
    </ClientWrapper>
  )
}
