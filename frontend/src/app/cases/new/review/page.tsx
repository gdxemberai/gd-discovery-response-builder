'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import {
  ChevronRightIcon,
  CheckIcon,
  DocumentIcon,
  BookIcon,
  TagIcon,
  WarningIcon,
  PenIcon,
  TrashIcon,
  QuestionIcon,
  CopyIcon,
  ForbiddenIcon,
  ArrowRightIcon,
  PlusCircleIcon,
} from '@/components/icons'

const definedTerms = [
  { id: 1, term: 'CLASS PERIOD', definition: 'January 1, 2020 through December 31, 2024' },
  { id: 2, term: 'DEFENDANT', definition: 'Amazon, Inc. and any subsidiary, parent, or affiliated entity' },
  { id: 3, term: 'PERSONNEL FILE', definition: 'Any file, document, or record maintained by DEFENDANT relating to any CLASS MEMBER' },
  { id: 4, term: 'CLASS MEMBER', definition: 'Any non-exempt employee who worked for DEFENDANT in California during the CLASS PERIOD' },
  { id: 5, term: 'DOCUMENT', definition: 'Any written, printed, typed, or graphic matter...' },
  { id: 6, term: 'COMMUNICATION', definition: 'Any transmission of information...' },
]

const potentialIssues = [
  { id: 1, type: 'unclear', label: 'Unclear', requestNum: 'RFP No. 47', description: 'Request may be unintelligible or ambiguous' },
  { id: 2, type: 'duplicate', label: 'Duplicate', requestNum: 'RFP No. 23, 24', description: 'These requests appear substantially similar' },
  { id: 3, type: 'relevance', label: 'Relevance', requestNum: 'ROG No. 15', description: 'Request may not relate to claims in complaint' },
]

export default function ExtractionResultsPage() {
  const router = useRouter()
  const [terms, setTerms] = useState(definedTerms)

  const handleContinue = () => {
    router.push('/cases/case-001')
  }

  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-6xl mx-auto py-12 px-6 lg:px-10 flex flex-col relative z-10">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-medium">
            <Link href="/cases" className="hover:text-neutral-900 transition-colors">Cases</Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span>Chicas v. Amazon</span>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">Extraction Results</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium tracking-tight text-neutral-900">Extraction Complete</h1>
            <p className="text-neutral-500 font-serif italic text-lg">Chicas v. Amazon</p>
          </div>
        </div>

        {/* Progress Stepper */}
        <div className="w-full border-b border-neutral-100 mb-10">
          <div className="flex items-center gap-8 pb-4">
            {/* Step 1: Details (Completed) */}
            <div className="flex items-center gap-2 relative">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                <CheckIcon width={14} height={14} />
              </div>
              <span className="text-sm font-medium text-emerald-600">Case Details</span>
            </div>

            <ChevronRightIcon width={16} height={16} className="text-neutral-200" />

            {/* Step 2: Upload (Completed) */}
            <div className="flex items-center gap-2 relative">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                <CheckIcon width={14} height={14} />
              </div>
              <span className="text-sm font-medium text-emerald-600">Upload Documents</span>
            </div>

            <ChevronRightIcon width={16} height={16} className="text-neutral-200" />

            {/* Step 3: Review Extraction (Active) */}
            <div className="flex items-center gap-2 relative">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold">
                3
              </div>
              <span className="text-sm font-medium text-primary">Review Extraction</span>
              <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"></div>
            </div>

            <ChevronRightIcon width={16} height={16} className="text-neutral-200" />

            {/* Step 4: Categorize */}
            <div className="flex items-center gap-2 group cursor-not-allowed opacity-40">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-300 text-neutral-400 text-[10px] font-bold">
                4
              </div>
              <span className="text-sm font-medium text-neutral-500">Categorize</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8 pb-32">
          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Total Requests */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm relative overflow-hidden group">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Total Requests</h3>
                <DocumentIcon width={20} height={20} className="text-primary" />
              </div>
              <div className="text-3xl font-semibold text-neutral-900 tracking-tight relative z-10">127</div>
              <div className="text-[10px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <CheckIcon width={12} height={12} /> Success
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
            </div>

            {/* Breakdown */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm col-span-1 md:col-span-2 flex flex-col justify-center">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Breakdown by Type</h3>
              <div className="flex items-center w-full gap-4">
                <div className="flex-1 flex flex-col gap-1 border-r border-neutral-100 last:border-0 pr-4">
                  <span className="text-xs text-neutral-400 font-medium">RFPs</span>
                  <span className="text-xl font-semibold text-neutral-900">85</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 border-r border-neutral-100 last:border-0 px-2">
                  <span className="text-xs text-neutral-400 font-medium">Interrogatories</span>
                  <span className="text-xl font-semibold text-neutral-900">32</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 pl-2">
                  <span className="text-xs text-neutral-400 font-medium">RFAs</span>
                  <span className="text-xl font-semibold text-neutral-900">10</span>
                </div>
              </div>
            </div>

            {/* Categories & Terms */}
            <div className="bg-white border border-neutral-200 rounded-xl p-0 shadow-sm flex flex-col divide-y divide-neutral-100">
              <div className="flex-1 p-3 px-5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500 uppercase font-semibold">Defined Terms</span>
                  <span className="text-lg font-semibold text-neutral-900">14</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                  <BookIcon width={16} height={16} />
                </div>
              </div>
              <div className="flex-1 p-3 px-5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500 uppercase font-semibold">Topics</span>
                  <span className="text-lg font-semibold text-neutral-900">8</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                  <TagIcon width={16} height={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Defined Terms Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                  <BookIcon width={20} height={20} className="text-primary" />
                  Defined Terms Extracted
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  The AI identified these terms. They will be used to generate consistent responses.
                </p>
              </div>
              <button className="text-xs font-medium bg-white border border-neutral-200 text-neutral-700 hover:text-primary hover:border-primary px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                <PlusCircleIcon width={14} height={14} />
                Add Term
              </button>
            </div>

            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wide">
                    <th className="px-6 py-3 font-medium w-48">Term</th>
                    <th className="px-6 py-3 font-medium">Definition</th>
                    <th className="px-6 py-3 font-medium w-24 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {terms.map((item) => (
                    <tr key={item.id} className="group hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-3 font-semibold text-neutral-800 text-xs">{item.term}</td>
                      <td className="px-6 py-3 text-neutral-600">{item.definition}</td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-neutral-400 hover:text-neutral-700">
                            <PenIcon width={16} height={16} />
                          </button>
                          <button className="text-neutral-400 hover:text-red-500">
                            <TrashIcon width={16} height={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Potential Issues Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <WarningIcon width={20} height={20} className="text-amber-500" />
                Items Needing Attention
                <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
                  3 Issues
                </span>
              </h2>
            </div>

            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wide">
                    <th className="px-6 py-3 font-medium w-40">Issue Type</th>
                    <th className="px-6 py-3 font-medium w-32">Request #</th>
                    <th className="px-6 py-3 font-medium">Description</th>
                    <th className="px-6 py-3 font-medium w-24 text-center">Resolve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {potentialIssues.map((issue) => (
                    <tr key={issue.id} className="group hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${
                            issue.type === 'unclear'
                              ? 'bg-amber-50 text-amber-700 border-amber-100'
                              : issue.type === 'duplicate'
                              ? 'bg-blue-50 text-blue-700 border-blue-100'
                              : 'bg-red-50 text-red-700 border-red-100'
                          }`}
                        >
                          {issue.type === 'unclear' && <QuestionIcon width={12} height={12} />}
                          {issue.type === 'duplicate' && <CopyIcon width={12} height={12} />}
                          {issue.type === 'relevance' && <ForbiddenIcon width={12} height={12} />}
                          {issue.label}
                        </span>
                      </td>
                      <td className="px-6 py-3 font-medium text-neutral-900">{issue.requestNum}</td>
                      <td className="px-6 py-3 text-neutral-600">{issue.description}</td>
                      <td className="px-6 py-3 text-center">
                        <button className="text-neutral-400 hover:text-primary flex items-center justify-center w-full">
                          <ArrowRightIcon width={16} height={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Floating Bottom Actions */}
        <div className="fixed bottom-0 left-0 lg:left-[72px] right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-neutral-200 z-40 flex items-center justify-between px-6 lg:px-10">
          <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
            Edit Defined Terms
          </button>

          <button
            onClick={handleContinue}
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            <span>Review Categories</span>
            <ArrowRightIcon width={18} height={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </main>
    </DashboardLayout>
  )
}
