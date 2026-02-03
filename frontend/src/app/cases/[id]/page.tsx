'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import {
  ChevronRightIcon,
  PenIcon,
  DocumentIcon,
  CheckCircleIcon,
  BuildingIcon,
  UploadIcon,
  MagicWandIcon,
  SortIcon,
  FilterIcon,
} from '@/components/icons'

// Mock case data
const caseData = {
  id: 'chicas-v-amazon',
  name: 'Chicas v. Amazon',
  client: 'Amazon, Inc.',
  court: 'Northern District of California',
  courtType: 'Federal',
  substantiveLaw: 'California',
  stage: 'Pre-Certification',
  responseType: 'Initial',
  lastModified: 'February 3, 2026',
  status: 'in_progress',
  discoverySummary: [
    { name: 'Policies', count: 34 },
    { name: 'Pay Data', count: 28 },
    { name: 'Time Data', count: 24 },
    { name: 'Personnel', count: 18 },
    { name: 'Class Lists', count: 8 },
    { name: 'Comms', count: 12 },
    { name: 'Other', count: 3 },
  ],
  uploadedDocs: [
    { name: 'Chicas_Complaint.pdf', type: 'Complaint', date: 'Jan 25, 2026' },
    { name: 'Amazon_Answer.pdf', type: 'Answer', date: 'Jan 25, 2026' },
    { name: 'Plaintiffs_RFP_Set1.pdf', type: 'RFP (Initial)', date: 'Jan 25, 2026' },
    { name: 'Plaintiffs_Interrogatories.pdf', type: 'ROG (Initial)', date: 'Jan 25, 2026' },
  ],
  generatedDocs: [
    { name: 'Responses_Objections_v1.docx', type: 'Responses', date: 'Feb 3, 2026', color: 'blue' },
    { name: 'Client_Summary_v1.docx', type: 'Summary', date: 'Feb 3, 2026', color: 'blue' },
    { name: 'Data_Request_Sheet_v1.xlsx', type: 'Data Sheet', date: 'Feb 3, 2026', color: 'emerald' },
    { name: 'Internal_Tracker_v1.xlsx', type: 'Tracker', date: 'Feb 3, 2026', color: 'emerald' },
  ],
}

export default function CaseOverviewPage() {
  const params = useParams()
  const caseId = params.id as string

  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-[1600px] mx-auto py-8 px-8 lg:px-12 flex flex-col relative z-10 h-full overflow-y-auto no-scrollbar">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <Link href="/cases" className="hover:text-neutral-900 transition-colors">
            Cases
          </Link>
          <ChevronRightIcon width={12} height={12} />
          <span className="text-neutral-900 font-medium">Overview</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">
                {caseData.name}
              </h1>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                In Progress
              </div>
            </div>
            <p className="text-neutral-500 text-sm">Last modified on {caseData.lastModified}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column (Main) */}
          <div className="col-span-12 xl:col-span-8 flex flex-col gap-8">
            {/* Case Details Card */}
            <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-neutral-100">
                <h2 className="text-sm font-semibold text-neutral-900">Case Details</h2>
                <button className="text-xs font-medium text-neutral-500 hover:text-primary transition-colors flex items-center gap-1">
                  <PenIcon width={14} height={14} />
                  Edit Details
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 p-6">
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Client</span>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                      <BuildingIcon width={12} height={12} />
                    </div>
                    <span className="text-sm font-medium text-neutral-900">{caseData.client}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Court</span>
                  <span className="text-sm font-medium text-neutral-900">{caseData.court}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Court Type</span>
                  <span className="text-sm font-medium text-neutral-900">{caseData.courtType}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Substantive Law</span>
                  <span className="text-sm font-medium text-neutral-900">
                    {caseData.substantiveLaw}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Stage</span>
                  <span className="inline-flex px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 text-xs font-medium">
                    {caseData.stage}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 mb-1">Response Type</span>
                  <span className="text-sm font-medium text-neutral-900">
                    {caseData.responseType}
                  </span>
                </div>
              </div>
            </section>

            {/* Discovery Summary */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-neutral-900">
                  Discovery Requests Summary
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {caseData.discoverySummary.map((item) => (
                  <Link
                    key={item.name}
                    href={`/cases/${caseId}/categories/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white border border-neutral-200 rounded-lg p-3 flex flex-col items-center justify-center text-center gap-1 hover:border-neutral-300 transition-colors cursor-pointer"
                  >
                    <span className="text-xs text-neutral-500 font-medium">{item.name}</span>
                    <span className="text-xl font-semibold text-neutral-900 tracking-tight">
                      {item.count}
                    </span>
                    <CheckCircleIcon className="text-emerald-500 mt-1" width={14} height={14} />
                  </Link>
                ))}
              </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-neutral-100">
                <h2 className="text-sm font-semibold text-neutral-900">Documents</h2>
                <div className="flex gap-2">
                  <button className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded hover:bg-neutral-50">
                    <SortIcon width={18} height={18} />
                  </button>
                  <button className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded hover:bg-neutral-50">
                    <FilterIcon width={18} height={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
                {/* Uploaded Documents */}
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <UploadIcon className="text-neutral-400" width={14} height={14} />
                    Uploaded
                  </h3>
                  <div className="flex flex-col gap-3">
                    {caseData.uploadedDocs.map((doc) => (
                      <div
                        key={doc.name}
                        className="group flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer -mx-2"
                      >
                        <div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                          <DocumentIcon width={16} height={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 truncate group-hover:text-primary transition-colors">
                            {doc.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-medium bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">
                              {doc.type}
                            </span>
                            <span className="text-[10px] text-neutral-400">{doc.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Generated Documents */}
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <MagicWandIcon className="text-neutral-400" width={14} height={14} />
                    Generated
                  </h3>
                  <div className="flex flex-col gap-3">
                    {caseData.generatedDocs.map((doc) => (
                      <div
                        key={doc.name}
                        className="group flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer -mx-2"
                      >
                        <div
                          className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border ${
                            doc.color === 'blue'
                              ? 'bg-blue-50 text-blue-500 border-blue-100'
                              : 'bg-emerald-50 text-emerald-500 border-emerald-100'
                          }`}
                        >
                          <DocumentIcon width={16} height={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 truncate group-hover:text-primary transition-colors">
                            {doc.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-medium bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">
                              {doc.type}
                            </span>
                            <span className="text-[10px] text-neutral-400">{doc.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Actions) */}
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
            {/* Quick Actions */}
            <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden p-5">
              <h2 className="text-sm font-semibold text-neutral-900 mb-4">Quick Actions</h2>
              <div className="flex flex-col gap-3">
                <Link
                  href={`/cases/${caseId}/categories/policies`}
                  className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all text-center shadow-[0_2px_10px_rgba(255,94,0,0.2)]"
                >
                  Review Discovery Requests
                </Link>
                <Link
                  href={`/cases/${caseId}/review`}
                  className="w-full px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-sm font-medium transition-all text-center"
                >
                  Review All Responses
                </Link>
                <Link
                  href={`/cases/${caseId}/generate`}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-lg text-sm font-medium transition-all text-center"
                >
                  Generate Documents
                </Link>
              </div>
            </section>

            {/* Activity Timeline */}
            <section className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden p-5">
              <h2 className="text-sm font-semibold text-neutral-900 mb-4">Recent Activity</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm text-neutral-700">Generated response documents</p>
                    <p className="text-xs text-neutral-400 mt-0.5">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-300 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm text-neutral-700">Updated case details</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Yesterday</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-300 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm text-neutral-700">Uploaded complaint documents</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Jan 25, 2026</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}
