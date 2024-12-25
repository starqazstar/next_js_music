import { MusicGrid } from '@/components/music/MusicGrid'
import { ClientWrapper } from '@/components/providers/ClientWrapper'
import { notFound } from 'next/navigation'

const categoryData = {
  pop: {
    title: '流行音乐',
    description: '最新流行音乐精选',
    items: [
      {
        title: "晴天",
        artist: "周杰伦",
        coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        playCount: "1000万+"
      },
      {
        title: "光年之外",
        artist: "邓紫棋",
        coverUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
        playCount: "600万+"
      }
    ]
  },
  rock: {
    title: '摇滚音乐',
    description: '热门摇滚歌曲推荐',
    items: [
      {
        title: "黑色幽默",
        artist: "华晨宇",
        coverUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop",
        playCount: "500万+"
      }
    ]
  },
  // Add more categories as needed
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]
  
  if (!category) {
    notFound()
  }

  return (
    <ClientWrapper>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{category.title}</h1>
          <p className="text-gray-400 mt-2">{category.description}</p>
        </div>
        <MusicGrid 
          title="热门歌曲"
          items={category.items}
        />
      </div>
    </ClientWrapper>
  )
}
