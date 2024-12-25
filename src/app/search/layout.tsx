import { ContentLayout } from '@/components/layout/ContentLayout'

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContentLayout 
      title="搜索" 
      description="搜索你喜欢的音乐"
    >
      {children}
    </ContentLayout>
  )
}
