'use client'

import { MusicGrid } from '@/components/music/MusicGrid'
import { featuredSongs, newReleases } from '@/data/mockData'

export default function Home() {
  return (
    <div className="space-y-8 px-6">
      <section>
        <MusicGrid
          title="为你推荐"
          items={featuredSongs}
          viewAllLink="/featured"
        />
      </section>

      <section>
        <MusicGrid
          title="根据你的收听习惯推荐"
          items={[...featuredSongs].reverse()}
          viewAllLink="/personalized"
        />
      </section>

      <section>
        <MusicGrid
          title="热门歌曲"
          items={[...newReleases].sort((a, b) => b.playCount - a.playCount)}
          viewAllLink="/popular"
        />
      </section>
    </div>
  )
}
