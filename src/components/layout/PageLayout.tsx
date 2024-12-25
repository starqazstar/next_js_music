interface PageLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
}

export function PageLayout({
  children,
  header,
  sidebar,
  footer,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {sidebar && (
        <aside className="hidden lg:block w-64 border-r border-white/10">
          {sidebar}
        </aside>
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        {header && (
          <header className="sticky top-0 z-10 border-b border-white/10 bg-black/50 backdrop-blur-lg">
            {header}
          </header>
        )}

        {/* Main content */}
        <main className="px-4 md:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        {footer && (
          <footer className="border-t border-white/10 py-4 px-4 md:px-6 lg:px-8">
            {footer}
          </footer>
        )}
      </div>
    </div>
  )
}
