'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  FireIcon,
  CaseIcon,
  FolderIcon,
  SettingsIcon,
  PanelLeftIcon,
  PanelLeftOpenIcon,
} from './icons'

interface SidebarProps {
  expanded?: boolean
  onToggle?: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ expanded = false, onToggle }) => {
  const pathname = usePathname()

  const navItems = [
    { href: '/cases', icon: CaseIcon, label: 'Cases', matchPaths: ['/cases'] },
    { href: '/vault', icon: FolderIcon, label: 'The Vault', matchPaths: ['/vault'] },
  ]

  const isActive = (paths: string[]) => {
    return paths.some(path => pathname?.startsWith(path))
  }

  return (
    <nav
      id="sidebar"
      className={`fixed z-50 flex flex-col bg-white/80 border-neutral-100/80 border-r pt-6 pb-6 top-0 bottom-0 left-0 backdrop-blur-xl justify-between transition-all duration-300 ${
        expanded ? 'w-64' : 'w-[72px]'
      }`}
    >
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Sidebar Header */}
        <div
          id="sidebar-header"
          className={`flex items-center w-full px-2 min-h-[40px] relative ${
            expanded ? 'justify-between px-4' : 'justify-center'
          }`}
        >
          <div
            id="logo-wrapper"
            className="relative flex items-center justify-center w-10 h-10 shrink-0 rounded-xl cursor-pointer group"
          >
            <Link href="/cases" className="text-primary">
              <FireIcon width={28} height={28} />
            </Link>
            {!expanded && (
              <button
                onClick={onToggle}
                id="expand-trigger"
                className="absolute inset-0 flex items-center justify-center rounded-xl text-neutral-400 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:bg-white/95"
              >
                <PanelLeftOpenIcon width={20} height={20} />
              </button>
            )}
          </div>
          {expanded && (
            <button
              id="collapse-trigger"
              onClick={onToggle}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <PanelLeftIcon width={20} height={20} />
            </button>
          )}
        </div>

        <div className="w-8 h-[1px] bg-neutral-100" />

        {/* Nav Items */}
        <div className="flex flex-col gap-2 w-full px-2">
          {navItems.map((item) => {
            const active = isActive(item.matchPaths)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-item group relative flex items-center p-2.5 rounded-lg transition-all ${
                  expanded ? 'justify-start px-4' : 'justify-center'
                } ${
                  active
                    ? 'text-primary bg-primary/5'
                    : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <item.icon width={24} height={24} className="stroke-[1.5]" />
                {expanded ? (
                  <span className="ml-3 text-sm font-medium">{item.label}</span>
                ) : (
                  <span className="nav-label absolute left-14 px-2 py-1 bg-neutral-900 text-white font-normal rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-50 shadow-lg transition-opacity duration-300 text-xs">
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center gap-4 w-full px-2" id="sidebar-bottom-actions">
        {/* Settings */}
        <Link
          href="/settings"
          className={`sidebar-item group relative flex items-center p-2.5 rounded-lg transition-all ${
            expanded ? 'justify-start px-4 w-full' : 'justify-center'
          } ${
            pathname === '/settings'
              ? 'text-primary bg-primary/5'
              : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          <SettingsIcon width={24} height={24} className="stroke-[1.5]" />
          {expanded ? (
            <span className="ml-3 text-sm font-medium">Settings</span>
          ) : (
            <span className="nav-label absolute left-14 px-2 py-1 bg-neutral-900 text-white font-normal rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-50 shadow-lg transition-opacity duration-300 text-xs">
              Settings
            </span>
          )}
        </Link>
        {/* Profile */}
        <button
          className={`relative mt-2 w-9 h-9 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-primary/20 transition-all shrink-0 ${
            expanded ? 'ml-4 self-start' : ''
          }`}
          id="sidebar-user-profile"
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Profile"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </nav>
  )
}
