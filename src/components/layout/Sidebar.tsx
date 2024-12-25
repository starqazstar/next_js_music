'use client'

import { NavItem } from '../navigation/NavItem'
import { HomeIcon, LibraryIcon, SearchIcon } from '../ui/Icons'

export function Sidebar() {
  return (
    <aside className="w-sidebar bg-black flex flex-col">
      <div className="p-6">
        <img src="/images/logo.svg" alt="My Music" className="h-8" />
      </div>
      <nav className="flex-1">
        <NavItem href="/" icon={<HomeIcon />}>首页</NavItem>
        <NavItem href="/search" icon={<SearchIcon />}>搜索</NavItem>
        <NavItem href="/library" icon={<LibraryIcon />}>音乐库</NavItem>
      </nav>
    </aside>
  )
}
