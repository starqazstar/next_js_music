import { MusicGrid } from '@/components/music/MusicGrid'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

const albums = [
  {
    title: "最伟大的作品",
    artist: "周杰伦",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    album: "最伟大的作品"
  },
  {
    title: "摩杰座",
    artist: "周杰伦",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    album: "摩杰座"
  },
  {
    title: "E.P.3",
    artist: "邓紫棋",
    coverUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    album: "E.P.3"
  }
]

export default function AlbumsPage() {
  return (
    <ClientWrapper>
      <div className="mt-6">
        <MusicGrid 
          title="专辑"
          items={albums}
        />
      </div>
    </ClientWrapper>
  )
}
