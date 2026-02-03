'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import {
  ChevronRightIcon,
  SearchIcon,
  CheckIcon,
  FlagIcon,
  WarningIcon,
  PenIcon,
  ArrowLeftIcon,
  DocumentIcon,
} from '@/components/icons'

const responseData = [
  { id: 1, num: 1, type: 'RFP', category: 'Policies', summary: 'All policies regarding meal periods during the Class...', status: 'complete' },
  { id: 2, num: 2, type: 'RFP', category: 'Policies', summary: 'All policies regarding rest breaks during the Class...', status: 'complete' },
  { id: 3, num: 47, type: 'RFP', category: 'Communications', summary: 'All communications between any manager, supervis...', status: 'custom' },
  { id: 4, num: 1, type: 'ROG', category: 'Pay Data', summary: 'State the total compensation paid to each Class...', status: 'complete' },
  { id: 5, num: 1, type: 'RFA', category: 'Class Lists', summary: 'Admit that John Smith was employed by Defendant...', status: 'review' },
]

export default function ReviewAllResponsesPage() {
  const params = useParams()
  const router = useRouter()
  const caseId = params.id as string

  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false)
  const [expandedRow, setExpandedRow] = useState<number | null>(3) // RFP 47 expanded by default

  const filteredData = showFlaggedOnly
    ? responseData.filter((r) => r.status === 'custom' || r.status === 'review')
    : responseData

  const handleGenerate = () => {
    router.push(`/cases/${caseId}/generate`)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
            <CheckIcon width={14} height={14} /> Complete
          </span>
        )
      case 'custom':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            <FlagIcon width={14} height={14} /> Custom
          </span>
        )
      case 'review':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
            <WarningIcon width={14} height={14} /> Needs Review
          </span>
        )
      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col h-full w-full">
        {/* Top Header Area */}
        <header className="bg-[#FAFAFA] border-b border-neutral-200 px-8 py-6 shrink-0 z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-medium">
            <Link href="/cases" className="hover:text-neutral-900 transition-colors">Cases</Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <Link href={`/cases/${caseId}`} className="hover:text-neutral-900 transition-colors">
              Chicas v. Amazon
            </Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">Review</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center gap-3">
                Review All Responses
              </h1>
              <p className="text-sm text-neutral-500">Chicas v. Amazon</p>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-neutral-700">127 of 127 responses generated</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 pb-32">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Requests</span>
                <span className="text-2xl font-semibold text-neutral-900 tracking-tight">127</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Complete</span>
                <span className="text-2xl font-semibold text-emerald-600 tracking-tight">118</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider relative z-10">Custom Responses</span>
                <span className="text-2xl font-semibold text-blue-600 tracking-tight relative z-10">5</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider relative z-10">Needs Review</span>
                <span className="text-2xl font-semibold text-amber-600 tracking-tight relative z-10">4</span>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between gap-4">
              {/* Search & Filters */}
              <div className="flex items-center gap-3 flex-1">
                <div className="relative w-64">
                  <SearchIcon width={16} height={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search requests..."
                    className="w-full pl-9 pr-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="h-8 w-[1px] bg-neutral-200 mx-1"></div>
                <select className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-600 focus:outline-none hover:border-neutral-300 cursor-pointer">
                  <option>All Categories</option>
                  <option>Communications</option>
                  <option>Policies</option>
                  <option>Compensation</option>
                </select>
                <select className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-600 focus:outline-none hover:border-neutral-300 cursor-pointer">
                  <option>All Types</option>
                  <option>RFP</option>
                  <option>ROG</option>
                  <option>RFA</option>
                </select>
                <select className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-600 focus:outline-none hover:border-neutral-300 cursor-pointer">
                  <option>All Statuses</option>
                  <option>Needs Review</option>
                  <option>Custom</option>
                  <option>Complete</option>
                </select>
              </div>

              {/* Toggles & Legend */}
              <div className="flex items-center gap-6">
                {/* Simple Legend */}
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>Complete
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>Custom
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>Review
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-neutral-200"></div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-neutral-600 font-medium">Show only flagged</span>
                  <label className="relative inline-block w-9 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showFlaggedOnly}
                      onChange={(e) => setShowFlaggedOnly(e.target.checked)}
                      className="sr-only peer"
                    />
                    <span className="absolute inset-0 bg-neutral-200 rounded-full peer-checked:bg-primary transition-colors"></span>
                    <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="w-16 px-6 py-3 font-medium">#</th>
                    <th className="w-20 px-6 py-3 font-medium">Type</th>
                    <th className="w-40 px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium">Request Summary</th>
                    <th className="w-32 px-6 py-3 font-medium">Status</th>
                    <th className="w-24 px-6 py-3 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  {filteredData.map((row) => (
                    <React.Fragment key={row.id}>
                      <tr
                        className={`hover:bg-neutral-50 transition-colors group cursor-pointer ${
                          row.status === 'custom' ? 'bg-blue-50/30 border-l-4 border-l-blue-500' : ''
                        }`}
                        onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}
                      >
                        <td className="px-6 py-4 text-neutral-500 font-medium">{row.num}</td>
                        <td className="px-6 py-4 text-neutral-500">
                          <span className="border border-neutral-200 rounded px-1.5 py-0.5 text-[10px] font-semibold bg-white">
                            {row.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-neutral-900">{row.category}</td>
                        <td className="px-6 py-4 text-neutral-600 truncate max-w-xs group-hover:text-neutral-900">
                          {row.summary}
                        </td>
                        <td className="px-6 py-4">{getStatusBadge(row.status)}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={`/cases/${caseId}/categories/${row.category.toLowerCase()}/requests/${row.num}`}
                            className={`${
                              row.status === 'custom' ? 'text-blue-600 hover:text-blue-700' :
                              row.status === 'review' ? 'text-amber-500 hover:text-amber-600' :
                              'text-neutral-400 hover:text-primary'
                            } transition-colors`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <PenIcon width={18} height={18} />
                          </Link>
                        </td>
                      </tr>
                      {/* Expanded detail row */}
                      {expandedRow === row.id && (
                        <tr className={`bg-neutral-50/50 ${row.status === 'custom' ? 'border-l-4 border-l-blue-500' : ''}`}>
                          <td colSpan={6} className="px-8 py-6 border-t border-neutral-100 shadow-inner">
                            <div className="grid grid-cols-2 gap-8">
                              {/* Request */}
                              <div className="space-y-2">
                                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Request</h4>
                                <p className="font-serif text-neutral-800 leading-relaxed text-[15px]">
                                  {row.type === 'RFP' && row.num === 47 ? (
                                    <>
                                      All COMMUNICATIONS between any manager, supervisor, or human resources representative
                                      and any CLASS MEMBER regarding meal period, rest break, or overtime complaints during
                                      the CLASS PERIOD.
                                    </>
                                  ) : (
                                    row.summary + '...'
                                  )}
                                </p>
                              </div>
                              {/* Response */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Response</h4>
                                  <Link
                                    href={`/cases/${caseId}/categories/${row.category.toLowerCase()}/requests/${row.num}`}
                                    className="text-[10px] font-medium text-blue-600 hover:underline"
                                  >
                                    Edit Full Response
                                  </Link>
                                </div>
                                <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm">
                                  <p className="font-serif text-neutral-800 leading-relaxed text-[15px]">
                                    {row.status === 'custom' ? (
                                      <>
                                        Subject to and without waiving the foregoing objections, Defendant will produce
                                        non-privileged formal written complaints regarding meal periods, rest breaks, or
                                        overtime submitted to Human Resources by any named Plaintiff during their employment.
                                      </>
                                    ) : (
                                      <>
                                        Subject to and without waiving the foregoing objections, Responding Party will
                                        produce all responsive, non-privileged documents in its possession, custody, or
                                        control.
                                      </>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Footer Action Bar */}
        <div className="fixed bottom-0 left-[72px] right-0 p-4 bg-white/95 backdrop-blur border-t border-neutral-200 z-30 flex items-center justify-between px-8">
          <Link
            href={`/cases/${caseId}`}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <ArrowLeftIcon width={16} height={16} />
            Back to Categories
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleGenerate}
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <span>Generate Final Documents</span>
              <DocumentIcon width={16} height={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
