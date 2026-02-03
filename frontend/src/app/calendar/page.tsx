'use client'

import React from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { CalendarIcon, ChevronRightIcon } from '@/components/icons'

const upcomingDeadlines = [
  {
    title: 'Response Deadline - Chicas v. Amazon',
    date: 'Feb 10, 2026',
    type: 'deadline',
    case: 'Chicas v. Amazon',
  },
  {
    title: 'Document Production Due',
    date: 'Feb 15, 2026',
    type: 'production',
    case: 'Martinez v. Walmart',
  },
  {
    title: 'Status Conference',
    date: 'Feb 20, 2026',
    type: 'hearing',
    case: 'Johnson v. Target',
  },
  {
    title: 'Interrogatory Responses Due',
    date: 'Feb 25, 2026',
    type: 'deadline',
    case: 'Chicas v. Amazon',
  },
]

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const currentMonth = 'February 2026'

// Simple calendar grid (February 2026 starts on Sunday)
const calendarDays = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
]

const highlightedDays = [3, 10, 15, 20, 25] // Days with events

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-[1600px] mx-auto py-8 px-8 lg:px-12 flex flex-col relative z-10 h-full overflow-y-auto no-scrollbar">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
            <CalendarIcon width={20} height={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">Calendar</h1>
            <p className="text-sm text-neutral-500">Track deadlines and important dates</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Calendar */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              {/* Calendar Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <ChevronRightIcon width={16} height={16} className="rotate-180 text-neutral-600" />
                </button>
                <h2 className="text-lg font-semibold text-neutral-900">{currentMonth}</h2>
                <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <ChevronRightIcon width={16} height={16} className="text-neutral-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="p-4">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {days.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-neutral-500 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.flat().map((day) => {
                    const hasEvent = highlightedDays.includes(day)
                    const isToday = day === 3
                    return (
                      <button
                        key={day}
                        className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm font-medium transition-all ${
                          isToday
                            ? 'bg-primary text-white'
                            : hasEvent
                            ? 'bg-orange-50 text-primary hover:bg-orange-100'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {day}
                        {hasEvent && !isToday && (
                          <div className="w-1 h-1 rounded-full bg-primary mt-1" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-neutral-100">
                <h2 className="text-sm font-semibold text-neutral-900">Upcoming Deadlines</h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {upcomingDeadlines.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer -mx-1"
                    >
                      <div
                        className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
                          item.type === 'deadline'
                            ? 'bg-red-500'
                            : item.type === 'hearing'
                            ? 'bg-blue-500'
                            : 'bg-amber-500'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.case}</p>
                        <p className="text-xs font-medium text-neutral-600 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}
