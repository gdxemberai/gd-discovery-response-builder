'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, DocumentIcon, NotesIcon, TableIcon, CheckIcon, DownloadIcon, SparklesIcon } from '@/components/icons'

const documentTypes = [
  {
    id: 'responses',
    title: 'Responses & Objections',
    description:
      'Formal legal document ready to file with the court, including all specific objections and substantive responses.',
    icon: DocumentIcon,
    iconBg: 'bg-orange-50',
    iconColor: 'text-primary',
    formats: ['docx', 'pdf'],
    includes: ['Preliminary Statement', 'Signature Block'],
  },
  {
    id: 'summary',
    title: 'Client Summary',
    description:
      'Plain-language summary of the discovery responses for client review and approval.',
    icon: NotesIcon,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    formats: ['docx', 'pdf'],
    includes: [],
  },
  {
    id: 'data-sheet',
    title: 'Data Request Sheet',
    description:
      'Spreadsheet tracking all data requests with categories, deadlines, and responsible parties.',
    icon: TableIcon,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    formats: ['xlsx'],
    includes: [],
  },
  {
    id: 'tracker',
    title: 'Internal Tracker',
    description:
      'Internal tracking spreadsheet for managing response progress and team assignments.',
    icon: TableIcon,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    formats: ['xlsx'],
    includes: [],
  },
]

export default function GenerateDocumentsPage() {
  const params = useParams()
  const router = useRouter()
  const caseId = params.id as string

  const [selectedDocs, setSelectedDocs] = useState<string[]>(['responses', 'summary'])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const toggleDoc = (id: string) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    )
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false)
      setIsComplete(true)
    }, 2000)
  }

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
            <span className="text-neutral-900">Generate</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center gap-3">
                Generate Documents
              </h1>
              <p className="text-sm text-neutral-500">Chicas v. Amazon</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 pb-32">
          <div className="max-w-6xl mx-auto">
            {!isComplete ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {documentTypes.map((doc) => {
                  const isSelected = selectedDocs.includes(doc.id)
                  return (
                    <div
                      key={doc.id}
                      className={`bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden ${
                        isSelected ? 'border-primary' : 'border-neutral-200'
                      }`}
                    >
                      {/* Header */}
                      <div className="p-5 border-b border-neutral-100 flex items-start justify-between bg-neutral-50/50">
                        <div className="flex items-center gap-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleDoc(doc.id)}
                              className="hidden"
                            />
                            <div
                              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-primary border-primary'
                                  : 'bg-white border-neutral-300'
                              }`}
                            >
                              {isSelected && (
                                <CheckIcon width={14} height={14} className="text-white" />
                              )}
                            </div>
                            <span className="font-semibold text-neutral-900 text-[15px]">
                              {doc.title}
                            </span>
                          </label>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full ${doc.iconBg} ${doc.iconColor} flex items-center justify-center`}
                        >
                          <doc.icon width={18} height={18} />
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 flex-1 flex flex-col gap-5">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {doc.description}
                        </p>

                        <div className="space-y-4">
                          {/* Format */}
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide w-24 shrink-0">
                              Format
                            </span>
                            <div className="flex items-center gap-4">
                              {doc.formats.map((format) => (
                                <label
                                  key={format}
                                  className="flex items-center gap-2 cursor-pointer group"
                                >
                                  <input
                                    type="checkbox"
                                    defaultChecked={format === 'docx' || format === 'xlsx'}
                                    className="hidden"
                                  />
                                  <div className="w-4 h-4 rounded border border-neutral-300 bg-primary flex items-center justify-center transition-all group-hover:border-neutral-400">
                                    <CheckIcon width={10} height={10} className="text-white" />
                                  </div>
                                  <span className="text-sm text-neutral-700">
                                    {format === 'docx'
                                      ? 'Word (.docx)'
                                      : format === 'pdf'
                                      ? 'PDF'
                                      : 'Excel (.xlsx)'}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Options */}
                          {doc.includes.length > 0 && (
                            <div className="flex items-center gap-4">
                              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide w-24 shrink-0">
                                Include
                              </span>
                              <div className="flex flex-col gap-2">
                                {doc.includes.map((item) => (
                                  <label
                                    key={item}
                                    className="flex items-center gap-2 cursor-pointer group"
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      className="hidden"
                                    />
                                    <div className="w-4 h-4 rounded border border-neutral-300 bg-primary flex items-center justify-center transition-all group-hover:border-neutral-400">
                                      <CheckIcon width={10} height={10} className="text-white" />
                                    </div>
                                    <span className="text-sm text-neutral-700">{item}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Attorney (only for responses) */}
                          {doc.id === 'responses' && (
                            <div className="flex items-center gap-4 pt-1">
                              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide w-24 shrink-0">
                                Attorney
                              </span>
                              <input
                                type="text"
                                defaultValue="Gibson Dunn LLP"
                                className="flex-1 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-sm text-neutral-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              /* Generation Complete State */
              <div className="max-w-2xl mx-auto text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckIcon width={32} height={32} />
                </div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Documents Generated Successfully
                </h2>
                <p className="text-neutral-500 mb-8">
                  Your documents are ready for download. They have also been saved to the case documents folder.
                </p>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 text-left mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">Generated Files</h3>
                  <div className="space-y-3">
                    {selectedDocs.map((docId) => {
                      const doc = documentTypes.find((d) => d.id === docId)
                      if (!doc) return null
                      return (
                        <div
                          key={docId}
                          className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded ${doc.iconBg} ${doc.iconColor} flex items-center justify-center`}
                            >
                              <doc.icon width={16} height={16} />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-neutral-900">{doc.title}</p>
                              <p className="text-xs text-neutral-500">
                                {doc.formats.join(', ').toUpperCase()}
                              </p>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
                            <DownloadIcon width={16} height={16} />
                            Download
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Link
                    href={`/cases/${caseId}`}
                    className="px-6 py-2.5 border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all"
                  >
                    Back to Case
                  </Link>
                  <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)] flex items-center gap-2">
                    <DownloadIcon width={16} height={16} />
                    Download All
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Bottom Action Bar */}
        {!isComplete && (
          <div className="fixed bottom-0 left-[72px] right-0 bg-white border-t border-neutral-200 py-4 px-8 z-30">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="text-sm text-neutral-600">
                  <strong>{selectedDocs.length}</strong> document types selected
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/cases/${caseId}`}
                  className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all"
                >
                  Cancel
                </Link>
                <button
                  onClick={handleGenerate}
                  disabled={selectedDocs.length === 0 || isGenerating}
                  className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <SparklesIcon width={16} height={16} className="animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <SparklesIcon width={16} height={16} />
                      Generate Documents
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
