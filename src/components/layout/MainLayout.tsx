import { ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { ClientWrapper } from '../providers/ClientWrapper'
import { PlayerProvider } from '@/contexts/PlayerContext'
import { Player } from '@/components/player/Player'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <PlayerProvider>
      <div className="flex min-h-screen bg-[#121212]">
        <ClientWrapper>
          <Sidebar />
        </ClientWrapper>
        <div className="flex-1 flex flex-col">
          <ClientWrapper>
            <Header />
          </ClientWrapper>
          <main className="flex-1 overflow-y-auto bg-background p-6">
            {children}
          </main>
          <Player />
        </div>
      </div>
    </PlayerProvider>
  )
}
