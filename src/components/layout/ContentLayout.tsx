interface ContentLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function ContentLayout({ title, description, children }: ContentLayoutProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-400">{description}</p>}
      </div>
      {children}
    </section>
  )
}
