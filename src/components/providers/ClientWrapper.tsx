'use client'

import { ReactNode } from 'react'
import { PlayerProvider } from '@/contexts/PlayerContext'
import { PlayerControls } from '@/components/player/PlayerControls'

export function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <PlayerProvider>
      <div className="bg-gradient-to-b from-neutral-900 to-black">
        {children}
        <PlayerControls />
      </div>
    </PlayerProvider>
  )
}
