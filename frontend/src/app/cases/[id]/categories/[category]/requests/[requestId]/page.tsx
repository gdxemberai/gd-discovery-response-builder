'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import {
  ChevronRightIcon,
  DocumentIcon,
  LightbulbIcon,
  LinkIcon,
  ArrowRightIcon,
  InfoIcon,
  CheckIcon,
  SparklesIcon,
  ShieldIcon,
  BoldIcon,
  ItalicIcon,
} from '@/components/icons'

const generalObjections = [
  { id: 1, title: 'Privileged and/or work product', scope: 'Standard', checked: true },
  { id: 2, title: 'Third-party privacy', scope: 'Employment', checked: true },
  { id: 3, title: 'Overbroad and unduly burdensome', scope: 'Boilerplate', checked: true },
  { id: 4, title: 'Beyond permitted discovery obligations', scope: 'Boilerplate', checked: true },
  { id: 5, title: 'Vague and ambiguous', scope: 'As needed', checked: false },
]

const tabs = [
  { id: 'general', label: 'General Objections' },
  { id: 'specific', label: 'Specific Objections' },
  { id: 'substantive', label: 'Substantive Response' },
]

export default function IndividualRequestPage() {
  const params = useParams()
  const router = useRouter()
  const caseId = params.id as string
  const category = params.category as string
  const requestId = params.requestId as string

  const [activeTab, setActiveTab] = useState('general')
  const [objections, setObjections] = useState(generalObjections)

  const toggleObjection = (id: number) => {
    setObjections((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, checked: !obj.checked } : obj))
    )
  }

  const categoryTitle = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const handleSave = () => {
    router.push(`/cases/${caseId}/categories/${category}`)
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
            <span>Categories</span>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <Link
              href={`/cases/${caseId}/categories/${category}`}
              className="hover:text-neutral-900 transition-colors"
            >
              {categoryTitle}
            </Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">RFP {requestId}</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center gap-3">
                Custom Response
              </h1>
              <p className="text-sm text-neutral-500">RFP No. {requestId}</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 pb-32">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Alert Banner */}
            <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
              <div className="shrink-0 mt-0.5 text-amber-600">
                <InfoIcon width={20} height={20} />
              </div>
              <div>
                <p className="font-medium">This request has been flagged for individual response.</p>
                <p className="text-amber-800 mt-1 opacity-90">
                  Changes made here will only apply to RFP {requestId} and will not affect other requests
                  in the {categoryTitle} category.
                </p>
              </div>
            </div>

            {/* Full Request Display */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Request for Production No. {requestId}
                </span>
                <span className="bg-neutral-100 text-neutral-600 text-[10px] px-1.5 py-0.5 rounded font-medium border border-neutral-200">
                  Category: {categoryTitle}
                </span>
              </div>
              <p className="text-lg font-serif text-neutral-900 leading-relaxed">
                All <span className="bg-neutral-100 px-1 rounded">COMMUNICATIONS</span> between any
                manager, supervisor, or human resources representative and any{' '}
                <span className="bg-neutral-100 px-1 rounded">CLASS MEMBER</span> regarding meal
                period, rest break, or overtime complaints during the{' '}
                <span className="bg-neutral-100 px-1 rounded">CLASS PERIOD</span>.
              </p>
            </div>

            {/* Split Layout: AI Analysis & Editor */}
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Left Column: AI Analysis */}
              <div className="col-span-12 lg:col-span-4 space-y-4">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  AI Analysis
                </h3>

                {/* Card 1: Complaint Reference */}
                <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-blue-600 mt-0.5">
                      <DocumentIcon width={18} height={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                        Complaint Reference
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Related to Complaint ¶¶ 45-48 alleging retaliation claims for reporting labor
                        violations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Suggested Approach */}
                <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/50 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="shrink-0 text-amber-600 mt-0.5">
                      <LightbulbIcon width={18} height={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">Suggested Approach</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Consider stronger objection on burden grounds given volume of potential
                        responsive documents across all locations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: Similar Requests */}
                <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-neutral-500 mt-0.5">
                      <LinkIcon width={18} height={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">Similar Requests</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                        See also RFP 48, 49 (grouped in {categoryTitle} bucket).
                      </p>
                      <Link
                        href={`/cases/${caseId}/categories/${category}`}
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        View Bucket
                        <ArrowRightIcon width={12} height={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Response Editor */}
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                  {/* Tabs */}
                  <div className="flex items-center border-b border-neutral-200 px-2 bg-neutral-50/50">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors hover:bg-neutral-50 ${
                          activeTab === tab.id
                            ? 'text-primary border-primary'
                            : 'text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 flex-1 bg-white">
                    {/* Tab Content: General */}
                    {activeTab === 'general' && (
                      <div className="animate-fade-in h-full flex flex-col">
                        <p className="text-sm text-neutral-500 mb-4">
                          Select standard objections to apply specifically to RFP {requestId}. These
                          defaults are inherited from the {categoryTitle} category.
                        </p>
                        <div className="border rounded-lg border-neutral-200 overflow-hidden flex-1 overflow-y-auto max-h-[400px]">
                          <table className="w-full text-left">
                            <thead className="bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-500 font-medium uppercase tracking-wide sticky top-0">
                              <tr>
                                <th className="w-12 px-4 py-2 text-center">Inc.</th>
                                <th className="px-4 py-2">Objection</th>
                                <th className="px-4 py-2 text-right">Scope</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100 text-sm">
                              {objections.map((obj) => (
                                <tr key={obj.id} className="hover:bg-neutral-50">
                                  <td className="px-4 py-3 text-center">
                                    <input
                                      type="checkbox"
                                      className="custom-checkbox"
                                      checked={obj.checked}
                                      onChange={() => toggleObjection(obj.id)}
                                    />
                                  </td>
                                  <td className="px-4 py-3 font-medium text-neutral-900">
                                    {obj.title}
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-neutral-500">
                                    {obj.scope}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Tab Content: Specific */}
                    {activeTab === 'specific' && (
                      <div className="animate-fade-in h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                          <p className="text-sm text-neutral-500">
                            Add specific objections for this request.
                          </p>
                          <button className="text-xs text-primary font-medium flex items-center gap-1 hover:bg-primary/5 px-2 py-1 rounded transition-colors">
                            <SparklesIcon width={14} height={14} />
                            Regenerate Suggestion
                          </button>
                        </div>
                        <div className="flex-1 relative group">
                          <textarea
                            className="w-full h-full p-4 border border-neutral-200 rounded-lg text-sm font-serif text-neutral-900 focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none leading-relaxed bg-neutral-50/30 min-h-[300px]"
                            spellCheck={false}
                            defaultValue={`Object to the term "complaints" as vague, ambiguous, and overbroad to the extent it is not limited to formal written complaints made to Human Resources or management. Defendant further objects that this request is unduly burdensome as it would require a manual review of all email communications for every manager and supervisor without a reasonable custodian limit or search terms.`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Tab Content: Substantive */}
                    {activeTab === 'substantive' && (
                      <div className="animate-fade-in h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-100 flex items-center gap-1">
                            <ShieldIcon width={14} height={14} />
                            Privilege Log Required
                          </div>
                        </div>

                        <div className="border border-neutral-200 rounded-lg flex-1 flex flex-col shadow-sm focus-within:ring-1 focus-within:ring-primary transition-all">
                          {/* Toolbar */}
                          <div className="px-3 py-2 border-b border-neutral-100 flex items-center gap-1 bg-neutral-50 rounded-t-lg">
                            <button className="p-1.5 text-neutral-500 hover:bg-neutral-200 rounded">
                              <BoldIcon width={16} height={16} />
                            </button>
                            <button className="p-1.5 text-neutral-500 hover:bg-neutral-200 rounded">
                              <ItalicIcon width={16} height={16} />
                            </button>
                            <div className="w-[1px] h-4 bg-neutral-200 mx-1"></div>
                            <button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 px-2">
                              Insert Placeholder
                            </button>
                          </div>
                          {/* Text Area */}
                          <div
                            className="p-4 flex-1 outline-none font-serif text-sm leading-7 text-neutral-900 overflow-y-auto min-h-[250px]"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Subject to and without waiving the foregoing objections,{' '}
                            <span className="bg-blue-50 text-blue-700 px-1 rounded text-xs font-sans font-medium border border-blue-100">
                              {'{DEFENDANT}'}
                            </span>{' '}
                            will produce non-privileged formal written complaints regarding meal
                            periods, rest breaks, or overtime submitted to Human Resources by any
                            named Plaintiff during their employment.{' '}
                            <span className="bg-blue-50 text-blue-700 px-1 rounded text-xs font-sans font-medium border border-blue-100">
                              {'{DEFENDANT}'}
                            </span>{' '}
                            will also produce the personnel files of the named Plaintiffs, which
                            contain any such formal complaints.
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-neutral-50 rounded border border-neutral-200 text-xs text-neutral-500 flex items-start gap-2">
                          <InfoIcon width={14} height={14} className="shrink-0 mt-0.5" />
                          <p>
                            Note: This response is narrower than the category default which agrees to
                            produce "policies and procedures".
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Action Bar */}
        <div className="fixed bottom-0 left-[72px] right-0 p-4 bg-white/95 backdrop-blur border-t border-neutral-200 z-30 flex items-center justify-between px-8">
          <Link
            href={`/cases/${caseId}/categories/${category}`}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Cancel
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <span>Save Custom Response</span>
              <CheckIcon width={16} height={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
