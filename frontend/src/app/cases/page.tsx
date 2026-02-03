'use client'

import React from 'react'
import Link from 'next/link'
import { DashboardLayout } from '@/components/dashboard-layout'
import { PlusCircleIcon, SearchIcon, CaseIcon } from '@/components/icons'

// Mock data for cases
const cases = [
  {
    id: 'chicas-v-amazon',
    name: 'Chicas v. Amazon',
    client: 'Amazon, Inc.',
    court: 'N.D. Cal.',
    stage: 'Pre-Certification',
    lastModified: 'Jan 28, 2026',
    status: 'in_progress',
  },
  {
    id: 'martinez-v-walmart',
    name: 'Martinez v. Walmart',
    client: 'Walmart Inc.',
    court: 'C.D. Cal.',
    stage: 'Post-Certification',
    lastModified: 'Jan 15, 2026',
    status: 'awaiting_review',
  },
  {
    id: 'johnson-v-target',
    name: 'Johnson v. Target',
    client: 'Target Corporation',
    court: 'S.D.N.Y.',
    stage: 'Pre-Certification',
    lastModified: 'Dec 20, 2025',
    status: 'completed',
  },
  {
    id: 'williams-v-uber',
    name: 'Williams v. Uber',
    client: 'Uber Technologies',
    court: 'N.D. Cal.',
    stage: 'Pre-Certification',
    lastModified: 'Dec 5, 2025',
    status: 'completed',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'in_progress':
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          In Progress
        </div>
      )
    case 'awaiting_review':
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          Awaiting Review
        </div>
      )
    case 'completed':
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
          <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
          Completed
        </div>
      )
    default:
      return null
  }
}

export default function CasesPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-[1600px] mx-auto py-8 px-8 lg:px-12 flex flex-col relative z-10 h-full overflow-y-auto no-scrollbar">
        {/* Page Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">Cases</h1>
            <Link
              href="/cases/new"
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white pl-3 pr-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)] hover:shadow-[0_4px_16px_rgba(255,94,0,0.3)]"
            >
              <PlusCircleIcon width={20} height={20} />
              <span>Create New Case</span>
            </Link>
          </div>

          {/* Controls Row */}
          <div className="flex items-center gap-3 w-full">
            {/* Search */}
            <div className="relative flex-1 group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-neutral-600 transition-colors">
                <SearchIcon width={18} height={18} />
              </div>
              <input
                type="text"
                placeholder="Search cases..."
                className="w-full bg-neutral-50 hover:bg-neutral-100 focus:bg-white border border-transparent focus:border-neutral-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-neutral-400 text-neutral-900"
              />
            </div>

            <div className="h-6 w-[1px] bg-neutral-200 mx-1" />

            {/* Filters */}
            <div className="relative min-w-[140px]">
              <select className="custom-select w-full appearance-none bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-700 text-sm rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-neutral-100 transition-all font-medium">
                <option>All Cases</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative min-w-[160px]">
              <select className="custom-select w-full appearance-none bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-700 text-sm rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-neutral-100 transition-all font-medium">
                <option>Sort by: Last Modified</option>
                <option>Sort by: Date Created</option>
                <option>Sort by: Case Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cases List */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex-grow mb-8 min-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50/50 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                <th className="py-3 px-6 w-[25%]">Case Name</th>
                <th className="py-3 px-6 w-[15%]">Client</th>
                <th className="py-3 px-6 w-[10%]">Court</th>
                <th className="py-3 px-6 w-[15%]">Stage</th>
                <th className="py-3 px-6 w-[15%]">Last Modified</th>
                <th className="py-3 px-6 w-[15%] text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {cases.map((caseItem, index) => (
                <tr
                  key={caseItem.id}
                  className="group hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6">
                    <Link href={`/cases/${caseItem.id}`} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                          index === 0
                            ? 'bg-orange-50 text-primary'
                            : 'bg-neutral-100 text-neutral-500'
                        }`}
                      >
                        <CaseIcon width={16} height={16} />
                      </div>
                      <span className="font-medium text-neutral-900 text-sm group-hover:text-primary transition-colors">
                        {caseItem.name}
                      </span>
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-neutral-600">{caseItem.client}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-neutral-500 font-medium bg-neutral-100 px-2 py-1 rounded text-xs">
                      {caseItem.court}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-neutral-600">{caseItem.stage}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-neutral-500 tabular-nums">
                      {caseItem.lastModified}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">{getStatusBadge(caseItem.status)}</td>
                </tr>
              ))}

              {/* Empty Row for Visual Balance */}
              <tr className="h-full">
                <td colSpan={6} className="p-0 h-24" />
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </DashboardLayout>
  )
}
