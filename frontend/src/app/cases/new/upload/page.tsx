'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, DocumentIcon, CheckIcon, TrashIcon, SparklesIcon, ArrowLeftIcon, UploadIcon, HistoryIcon, FolderIcon } from '@/components/icons'

const uploadedFiles = [
  { name: 'Amazon_RFP_Set1.pdf', type: 'RFP', round: 'Initial' },
  { name: 'Amazon_Interrogatories.pdf', type: 'Interrogatories', round: 'Initial' },
  { name: 'Amazon_RFA_Set1.pdf', type: 'RFA', round: 'Initial' },
]

export default function UploadDocumentsPage() {
  const router = useRouter()
  const [files, setFiles] = useState(uploadedFiles)
  const [referenceUploaded, setReferenceUploaded] = useState({
    complaint: false,
    answer: false,
    prior: false,
  })

  const handleProcess = () => {
    router.push('/cases/new/processing')
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-6 lg:px-10 flex flex-col relative z-10">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-medium">
            <Link href="/cases" className="hover:text-neutral-900 transition-colors">Cases</Link>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span>Chicas v. Amazon</span>
            <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
            <span className="text-neutral-900">Upload Documents</span>
          </div>
          <h1 className="text-2xl font-medium tracking-tight text-neutral-900">Upload Documents</h1>
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

            {/* Connector */}
            <ChevronRightIcon width={16} height={16} className="text-neutral-200" />

            {/* Step 2: Upload (Active) */}
            <div className="flex items-center gap-2 relative">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold">
                2
              </div>
              <span className="text-sm font-medium text-primary">Upload Documents</span>
              <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"></div>
            </div>

            {/* Connector */}
            <ChevronRightIcon width={16} height={16} className="text-neutral-200" />

            {/* Step 3: Review */}
            <div className="flex items-center gap-2 group cursor-not-allowed opacity-40">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-300 text-neutral-400 text-[10px] font-bold">
                3
              </div>
              <span className="text-sm font-medium text-neutral-500">Review</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-12 pb-32">
          {/* Section A: Reference Documents */}
          <section>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <FolderIcon width={20} height={20} className="text-primary" />
                Reference Documents
              </h2>
              <p className="text-sm text-neutral-500 mt-1 max-w-2xl">
                These documents provide context for the AI to understand the case and generate relevant responses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Complaint (Required) */}
              <div
                onClick={() => setReferenceUploaded(prev => ({ ...prev, complaint: true }))}
                className={`rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group relative border-2 border-dashed transition-all ${
                  referenceUploaded.complaint
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                  referenceUploaded.complaint
                    ? 'bg-emerald-100 border-emerald-200'
                    : 'bg-neutral-50 border-neutral-100'
                }`}>
                  {referenceUploaded.complaint ? (
                    <CheckIcon width={20} height={20} className="text-emerald-600" />
                  ) : (
                    <DocumentIcon width={20} height={20} className="text-neutral-400 group-hover:text-primary" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">Complaint</h3>
                <p className="text-xs text-neutral-400 mb-3">
                  {referenceUploaded.complaint ? 'Chicas_Complaint.pdf' : 'Drag and drop or click to upload'}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-500">
                    Required
                  </span>
                  <span className="text-[10px] text-neutral-300">PDF, DOCX</span>
                </div>
              </div>

              {/* Answer (Required) */}
              <div
                onClick={() => setReferenceUploaded(prev => ({ ...prev, answer: true }))}
                className={`rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group relative border-2 border-dashed transition-all ${
                  referenceUploaded.answer
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                  referenceUploaded.answer
                    ? 'bg-emerald-100 border-emerald-200'
                    : 'bg-neutral-50 border-neutral-100'
                }`}>
                  {referenceUploaded.answer ? (
                    <CheckIcon width={20} height={20} className="text-emerald-600" />
                  ) : (
                    <DocumentIcon width={20} height={20} className="text-neutral-400 group-hover:text-primary" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">Answer</h3>
                <p className="text-xs text-neutral-400 mb-3">
                  {referenceUploaded.answer ? 'Chicas_Answer.pdf' : 'Drag and drop or click to upload'}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-500">
                    Required
                  </span>
                </div>
              </div>

              {/* Prior Responses (Optional) */}
              <div
                onClick={() => setReferenceUploaded(prev => ({ ...prev, prior: true }))}
                className={`rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group relative border-2 border-dashed transition-all ${
                  referenceUploaded.prior
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                  referenceUploaded.prior
                    ? 'bg-emerald-100 border-emerald-200'
                    : 'bg-neutral-50 border-neutral-100'
                }`}>
                  {referenceUploaded.prior ? (
                    <CheckIcon width={20} height={20} className="text-emerald-600" />
                  ) : (
                    <HistoryIcon width={20} height={20} className="text-neutral-400 group-hover:text-primary" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">Prior Responses</h3>
                <p className="text-xs text-neutral-400 mb-3">
                  {referenceUploaded.prior ? 'Prior_Responses.pdf' : 'Drag and drop or click to upload'}
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white border border-neutral-200 text-neutral-500">
                    Optional
                  </span>
                  <span className="text-[10px] text-neutral-300">If supplemental response</span>
                </div>
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-neutral-100 w-full"></div>

          {/* Section B: Discovery Requests */}
          <section>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <DocumentIcon width={20} height={20} className="text-primary" />
                Discovery Requests
              </h2>
              <p className="text-sm text-neutral-500 max-w-2xl mt-1">
                Upload the discovery requests you need to respond to. The AI will extract and categorize each individual request.
              </p>
            </div>

            {/* Uploaded Files Table */}
            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wide">
                    <th className="px-6 py-3 font-medium">File Name</th>
                    <th className="px-6 py-3 font-medium w-48">Request Type</th>
                    <th className="px-6 py-3 font-medium w-40">Round</th>
                    <th className="px-6 py-3 font-medium w-20 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {files.map((file, index) => (
                    <tr key={index} className="group hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                            <DocumentIcon width={18} height={18} />
                          </div>
                          <span className="font-medium text-neutral-900">{file.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <select
                          defaultValue={file.type}
                          className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-1.5 text-xs text-neutral-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all hover:bg-neutral-50 cursor-pointer"
                        >
                          <option value="RFP">RFP</option>
                          <option value="Interrogatories">Interrogatories</option>
                          <option value="RFA">RFA</option>
                        </select>
                      </td>
                      <td className="px-6 py-3">
                        <select
                          defaultValue={file.round}
                          className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-1.5 text-xs text-neutral-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all hover:bg-neutral-50 cursor-pointer"
                        >
                          <option value="Initial">Initial</option>
                          <option value="Supplemental">Supplemental</option>
                        </select>
                      </td>
                      <td className="px-6 py-3 text-center">
                        <button
                          onClick={() => removeFile(index)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1.5 rounded-md hover:bg-red-50"
                        >
                          <TrashIcon width={16} height={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add More Button */}
            <button className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80 hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors border border-dashed border-primary/30 w-full justify-center">
              <UploadIcon width={18} height={18} />
              Upload more files
            </button>
          </section>
        </div>

        {/* Floating Bottom Actions */}
        <div className="fixed bottom-0 left-0 lg:left-[72px] right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-neutral-200 z-40 flex items-center justify-between px-6 lg:px-10">
          <Link
            href="/cases/new"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors px-4 py-2 rounded-lg hover:bg-neutral-100 flex items-center gap-2"
          >
            <ArrowLeftIcon width={18} height={18} />
            Back
          </Link>

          <button
            onClick={handleProcess}
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            <span>Process Documents</span>
            <SparklesIcon width={18} height={18} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </main>
    </DashboardLayout>
  )
}
