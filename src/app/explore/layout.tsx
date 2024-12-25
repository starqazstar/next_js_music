import { ContentLayout } from '@/components/layout/ContentLayout'

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContentLayout 
      title="探索" 
      description="发现新的音乐世界"
    >
      {children}
    </ContentLayout>
  )
}
