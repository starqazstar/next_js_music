'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  icon: ReactNode
  children: ReactNode
}

export function NavItem({ href, icon, children }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`nav-item ${isActive ? 'text-primary' : ''}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}
