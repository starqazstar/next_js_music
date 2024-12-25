import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { MusicSection } from '@/components/music/MusicSection'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

export default function Loading() {
  return (
    <div className="space-y-8">
      <ClientWrapper>
        <MusicSection 
          title="为你推荐" 
          subtitle="根据你的收听习惯推荐"
        >
          <LoadingSpinner />
        </MusicSection>

        <MusicSection title="新歌首发">
          <LoadingSpinner />
        </MusicSection>
      </ClientWrapper>
    </div>
  )
}
