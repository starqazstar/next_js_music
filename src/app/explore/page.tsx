import { CategoryGrid } from '@/components/explore/CategoryGrid'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

const categories = [
  { id: 'pop', name: '流行', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop' },
  { id: 'rock', name: '摇滚', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' },
  { id: 'classical', name: '古典', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop' },
  { id: 'jazz', name: '爵士', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop' },
  { id: 'electronic', name: '电子', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop' },
  { id: 'folk', name: '民谣', image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop' },
]

export default function ExplorePage() {
  return (
    <ClientWrapper>
      <CategoryGrid categories={categories} />
    </ClientWrapper>
  )
}
