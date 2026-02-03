'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, RefreshIcon } from '@/components/icons'

// Mock objections data
const generalObjections = [
  {
    id: 1,
    title: 'Overbroad and Unduly Burdensome',
    description:
      'Objects to the request to the extent it is overbroad, unduly burdensome, and seeks information not reasonably calculated to lead to the discovery of admissible evidence.',
    enabled: true,
  },
  {
    id: 2,
    title: 'Vague and Ambiguous',
    description:
      'Objects to the request to the extent the terms used are vague, ambiguous, or undefined, rendering the request incapable of a meaningful response.',
    enabled: true,
  },
  {
    id: 3,
    title: 'Attorney-Client Privilege',
    description:
      'Objects to the request to the extent it seeks information protected by the attorney-client privilege or work product doctrine.',
    enabled: true,
  },
  {
    id: 4,
    title: 'Trade Secrets / Proprietary Information',
    description:
      'Objects to the request to the extent it seeks confidential, proprietary, or trade secret information.',
    enabled: false,
  },
  {
    id: 5,
    title: 'Third-Party Privacy',
    description:
      'Objects to the request to the extent it seeks personal information of third parties protected by privacy laws.',
    enabled: false,
  },
]

const tabs = [
  { id: 'general', label: 'General Objections' },
  { id: 'specific', label: 'Specific Objections', badge: '3 AI' },
  { id: 'substantive', label: 'Substantive Response' },
  { id: 'preview', label: 'Preview' },
]

export default function ConfigureResponsePage() {
  const params = useParams()
  const caseId = params.id as string
  const category = params.category as string

  const [activeTab, setActiveTab] = useState('general')
  const [objections, setObjections] = useState(generalObjections)

  const toggleObjection = (id: number) => {
    setObjections((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, enabled: !obj.enabled } : obj))
    )
  }

  const categoryTitle = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col h-full w-full">
        {/* Top Header Area */}
        <header className="bg-[#FAFAFA] border-b border-neutral-200 px-8 py-6 shrink-0 z-20">
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
            <Link
              href={`/cases/${caseId}/categories/${category}`}
              className="hover:text-neutral-900 transition-colors"
            >
              {categoryTitle}
            </Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">Response</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center gap-3">
                Configure Response
              </h1>
              <p className="text-sm text-neutral-500">
                {categoryTitle} — 34 requests
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-8 mt-8 border-b border-neutral-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary'
                    : 'text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-white p-8 pb-32">
          <div className="max-w-5xl mx-auto">
            {/* Tab 1: General Objections */}
            {activeTab === 'general' && (
              <div className="animate-fade-in">
                <div className="mb-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900">General Objections</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      Select which standard objections apply to requests in this category. These
                      will be included in the preliminary statement or as general objections.
                    </p>
                  </div>
                  <button className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                    <RefreshIcon width={14} height={14} /> Reset to Default
                  </button>
                </div>

                <div className="border rounded-lg border-neutral-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-500 font-medium uppercase tracking-wide">
                      <tr>
                        <th className="w-10 px-4 py-3 text-center">Include</th>
                        <th className="px-4 py-3 w-12">#</th>
                        <th className="px-4 py-3">Objection Type</th>
                        <th className="px-4 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 text-sm">
                      {objections.map((objection) => (
                        <tr
                          key={objection.id}
                          className="hover:bg-neutral-50 transition-colors"
                        >
                          <td className="px-4 py-4 text-center">
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              checked={objection.enabled}
                              onChange={() => toggleObjection(objection.id)}
                            />
                          </td>
                          <td className="px-4 py-4 font-medium text-neutral-500">
                            {objection.id}
                          </td>
                          <td className="px-4 py-4 font-medium text-neutral-900">
                            {objection.title}
                          </td>
                          <td className="px-4 py-4 text-neutral-600 text-sm leading-relaxed">
                            {objection.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Specific Objections */}
            {activeTab === 'specific' && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-neutral-900">Specific Objections</h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    AI-suggested objections specific to individual requests. Review and customize
                    as needed.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    AI analysis has identified 3 requests that may require specific objections
                    beyond the general objections selected above.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Substantive Response */}
            {activeTab === 'substantive' && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-neutral-900">Substantive Response</h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Configure the substantive response template and variables.
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-lg p-6">
                  <div className="editor-content prose prose-neutral max-w-none">
                    <p>
                      Subject to and without waiving the foregoing objections, Responding Party
                      responds as follows:
                    </p>
                    <p className="mt-4">
                      Responding Party will produce all responsive, non-privileged documents in its
                      possession, custody, or control, to the extent they exist and can be located
                      after a reasonable search.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Preview */}
            {activeTab === 'preview' && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-neutral-900">Preview</h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Preview how the complete response will appear in the final document.
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-lg p-8 bg-white shadow-sm">
                  <div className="prose prose-neutral max-w-none font-serif">
                    <h4 className="font-sans text-sm font-bold text-neutral-900 mb-4">
                      RESPONSE TO REQUEST FOR PRODUCTION NO. 1:
                    </h4>
                    <p className="text-neutral-700 leading-relaxed">
                      Responding Party objects to this Request on the grounds that it is overbroad,
                      unduly burdensome, and seeks information not reasonably calculated to lead to
                      the discovery of admissible evidence. Responding Party further objects to this
                      Request to the extent the terms used are vague, ambiguous, or undefined,
                      rendering the request incapable of a meaningful response. Responding Party
                      also objects to this Request to the extent it seeks information protected by
                      the attorney-client privilege or work product doctrine.
                    </p>
                    <p className="text-neutral-700 leading-relaxed mt-4">
                      Subject to and without waiving the foregoing objections, Responding Party
                      responds as follows: Responding Party will produce all responsive,
                      non-privileged documents in its possession, custody, or control, to the extent
                      they exist and can be located after a reasonable search.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-[72px] right-0 bg-white border-t border-neutral-200 py-4 px-8 z-30">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <Link
              href={`/cases/${caseId}/categories/${category}`}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Back to Requests
            </Link>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all">
                Save Draft
              </button>
              <Link
                href={`/cases/${caseId}/review`}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)]"
              >
                Review All Responses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
