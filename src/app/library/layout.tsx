import { ContentLayout } from '@/components/layout/ContentLayout'
import { LibraryTabs } from '@/components/library/LibraryTabs'
import { ClientWrapper } from '@/components/providers/ClientWrapper'

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContentLayout 
      title="音乐库" 
      description="你的个人音乐收藏"
    >
      <ClientWrapper>
        <LibraryTabs />
      </ClientWrapper>
      {children}
    </ContentLayout>
  )
}
