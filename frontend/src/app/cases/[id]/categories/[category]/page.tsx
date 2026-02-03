'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, ArrowLeftIcon, DocumentIcon, PenIcon, DotsHorizontalIcon, ScaleIcon } from '@/components/icons'

// Mock discovery requests data
const requests = [
  {
    id: 'rfp-1',
    type: 'RFP',
    number: 1,
    text: 'All DOCUMENTS reflecting DEFENDANT\'s policies regarding meal periods...',
    subCategory: 'Meal & Rest Break',
    status: 'pending',
  },
  {
    id: 'rfp-2',
    type: 'RFP',
    number: 2,
    text: 'All DOCUMENTS reflecting DEFENDANT\'s policies regarding rest breaks...',
    subCategory: 'Meal & Rest Break',
    status: 'pending',
  },
  {
    id: 'rfp-12',
    type: 'RFP',
    number: 12,
    text: 'All DOCUMENTS reflecting DEFENDANT\'s methodology for calculating overtime...',
    subCategory: 'Overtime',
    status: 'pending',
  },
  {
    id: 'rog-3',
    type: 'ROG',
    number: 3,
    text: 'IDENTIFY all versions of employee handbooks in effect during the CLASS PERIOD...',
    subCategory: 'General Employment',
    status: 'draft_ready',
  },
  {
    id: 'rfp-15',
    type: 'RFP',
    number: 15,
    text: 'Any and all payroll records for Plaintiff Chicas...',
    subCategory: 'Paycheck',
    status: 'pending',
  },
  {
    id: 'rfp-16',
    type: 'RFP',
    number: 16,
    text: 'Documents sufficient to identify the pay periods...',
    subCategory: 'Paycheck',
    status: 'pending',
  },
]

const tabs = [
  { id: 'all', label: 'All', count: 34 },
  { id: 'meal-rest', label: 'Meal & Rest Break', count: 12 },
  { id: 'overtime', label: 'Overtime', count: 8 },
  { id: 'minimum-wage', label: 'Minimum Wage', count: 6 },
  { id: 'paycheck', label: 'Paycheck / Pay Period', count: 5 },
  { id: 'general', label: 'General Employment', count: 3 },
]

export default function CategoryReviewPage() {
  const params = useParams()
  const caseId = params.id as string
  const category = params.category as string

  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedRequest, setSelectedRequest] = useState(requests[0])
  const [selectedRequests, setSelectedRequests] = useState<string[]>(['rfp-1', 'rfp-2', 'rfp-12'])

  const toggleRequestSelection = (id: string) => {
    setSelectedRequests((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const getStatusBadge = (status: string) => {
    if (status === 'pending') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-medium border border-amber-100">
          Pending
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
        Draft Ready
      </span>
    )
  }

  const categoryTitle = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col h-full w-full">
        {/* Top Header Area */}
        <header className="bg-[#FAFAFA] border-b border-neutral-200 px-6 py-5 shrink-0 z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-medium">
            <Link href="/cases" className="hover:text-neutral-900 transition-colors">
              Cases
            </Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <Link href={`/cases/${caseId}`} className="hover:text-neutral-900 transition-colors">
              Chicas v. Amazon
            </Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span>Categories</span>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">{categoryTitle}</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
                {categoryTitle}
                <span className="text-xs font-normal text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200">
                  34 requests
                </span>
              </h1>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/cases/${caseId}`}
                className="text-xs font-medium text-neutral-600 hover:text-neutral-900 px-3 py-1.5 rounded hover:bg-neutral-100 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeftIcon width={14} height={14} /> Back to Case
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </header>

        {/* Main Split View Area */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* Left: List View */}
          <div className="flex-1 overflow-y-auto bg-white min-w-0 pb-20">
            <table className="w-full text-left border-collapse">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-500 font-medium uppercase tracking-wide sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/90">
                <tr>
                  <th className="w-10 px-4 py-3 text-center border-b border-neutral-200">
                    <input type="checkbox" className="custom-checkbox" />
                  </th>
                  <th className="px-4 py-3 w-20 border-b border-neutral-200">ID</th>
                  <th className="px-2 py-3 w-16 border-b border-neutral-200">Type</th>
                  <th className="px-4 py-3 border-b border-neutral-200">Request Text</th>
                  <th className="px-4 py-3 w-32 border-b border-neutral-200">Sub-Category</th>
                  <th className="px-4 py-3 w-24 border-b border-neutral-200">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {requests.map((request) => (
                  <tr
                    key={request.id}
                    onClick={() => setSelectedRequest(request)}
                    className={`group transition-colors cursor-pointer border-l-2 ${
                      selectedRequest?.id === request.id
                        ? 'bg-blue-50/50 hover:bg-blue-50 border-l-primary'
                        : 'hover:bg-neutral-50 border-l-transparent'
                    }`}
                  >
                    <td className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={selectedRequests.includes(request.id)}
                        onChange={() => toggleRequestSelection(request.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-neutral-900 text-xs">
                      {request.type} {request.number}
                    </td>
                    <td className="px-2 py-3 text-xs text-neutral-500">{request.type}</td>
                    <td className="px-4 py-3 text-neutral-700">{request.text}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-1 rounded bg-neutral-100 text-neutral-600 text-[10px] font-medium border border-neutral-200 whitespace-nowrap">
                        {request.subCategory}
                      </span>
                    </td>
                    <td className="px-4 py-3">{getStatusBadge(request.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Detail Panel */}
          <div className="w-[450px] bg-white border-l border-neutral-200 overflow-y-auto pb-20 flex flex-col shadow-[rgba(0,0,0,0.05)_0px_0px_20px_0px] z-10">
            {selectedRequest && (
              <>
                {/* Detail Header */}
                <div className="p-6 border-b border-neutral-100 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                        <DocumentIcon className="text-neutral-500" width={16} height={16} />
                        {selectedRequest.type} {selectedRequest.number}
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">{categoryTitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-neutral-400 hover:text-neutral-600">
                        <PenIcon width={16} height={16} />
                      </button>
                      <button className="text-neutral-400 hover:text-neutral-600">
                        <DotsHorizontalIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>

                  {/* Source Card */}
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                    <div className="flex items-center gap-2 mb-1">
                      <ScaleIcon className="text-blue-500" width={14} height={14} />
                      <span className="text-[10px] font-semibold text-neutral-900 uppercase tracking-wide">
                        Source Document
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Plaintiffs&apos; First Set of Requests for Production, Request No.{' '}
                      {selectedRequest.number}
                    </p>
                  </div>
                </div>

                {/* Request Content */}
                <div className="p-6 border-b border-neutral-100">
                  <h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                    Full Request Text
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed font-serif">
                    {selectedRequest.text} including but not limited to all policies, procedures,
                    guidelines, training materials, and any amendments or revisions thereto during
                    the relevant time period.
                  </p>
                </div>

                {/* Status & Actions */}
                <div className="p-6">
                  <h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                    Response Status
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    {getStatusBadge(selectedRequest.status)}
                    <span className="text-xs text-neutral-400">Last updated: Today</span>
                  </div>
                  <Link
                    href={`/cases/${caseId}/categories/${category}/configure`}
                    className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all text-center block shadow-[0_2px_10px_rgba(255,94,0,0.2)]"
                  >
                    Configure Response
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-[72px] right-0 bg-white border-t border-neutral-200 py-4 px-6 z-30">
          <div className="flex items-center justify-between max-w-[1600px] mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-600">
                <strong>{selectedRequests.length}</strong> requests selected
              </span>
              <button className="text-xs text-primary font-medium hover:underline">
                Select All
              </button>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all">
                Bulk Edit
              </button>
              <Link
                href={`/cases/${caseId}/categories/${category}/configure`}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)]"
              >
                Configure Responses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
