'use client'

import React from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { SettingsIcon } from '@/components/icons'
import Image from 'next/image'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-4xl mx-auto py-8 px-8 lg:px-12 flex flex-col relative z-10 h-full overflow-y-auto no-scrollbar">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
            <SettingsIcon width={20} height={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">Settings</h1>
            <p className="text-sm text-neutral-500">Manage your account and preferences</p>
          </div>
        </div>

        {/* Profile Section */}
        <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <h2 className="text-sm font-semibold text-neutral-900">Profile</h2>
            <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
              Edit Profile
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">John Doe</h3>
                <p className="text-sm text-neutral-500">john.doe@gibsondunn.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-neutral-500 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="john.doe@gibsondunn.com"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Organization Section */}
        <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <h2 className="text-sm font-semibold text-neutral-900">Organization</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Firm Name
                </label>
                <input
                  type="text"
                  defaultValue="Gibson Dunn LLP"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">Role</label>
                <input
                  type="text"
                  defaultValue="Associate Attorney"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <h2 className="text-sm font-semibold text-neutral-900">Preferences</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-900">Email Notifications</p>
                <p className="text-xs text-neutral-500">
                  Receive email updates about your cases
                </p>
              </div>
              <button className="relative w-11 h-6 bg-primary rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-900">Auto-save Drafts</p>
                <p className="text-xs text-neutral-500">
                  Automatically save your work as you type
                </p>
              </div>
              <button className="relative w-11 h-6 bg-primary rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-900">Dark Mode</p>
                <p className="text-xs text-neutral-500">Use dark theme for the interface</p>
              </div>
              <button className="relative w-11 h-6 bg-neutral-200 rounded-full transition-colors">
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-red-100 bg-red-50/50">
            <h2 className="text-sm font-semibold text-red-700">Danger Zone</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-900">Delete Account</p>
                <p className="text-xs text-neutral-500">
                  Permanently delete your account and all data
                </p>
              </div>
              <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  )
}
