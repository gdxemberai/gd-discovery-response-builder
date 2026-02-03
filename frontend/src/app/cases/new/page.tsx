'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, ChevronDownIcon, CityIcon, ScaleIcon } from '@/components/icons'

export default function CreateCasePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [courtType, setCourtType] = useState<'state' | 'federal'>('state')
  const [certStage, setCertStage] = useState<'pre' | 'post'>('pre')
  const [responseType, setResponseType] = useState<'initial' | 'supplemental'>('initial')
  const [caseName, setCaseName] = useState('')
  const [clientName, setClientName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to the newly created case
    router.push('/cases/chicas-v-amazon')
  }

  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-6 lg:px-10 flex flex-col relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-neutral-900">
              Create New Case
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Initialize a new matter in the Cox Protocol.
            </p>
          </div>
          <Link
            href="/cases"
            className="text-xs font-medium text-neutral-400 hover:text-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Cancel and return
          </Link>
        </div>

        {/* Progress Stepper */}
        <div className="w-full border-b border-neutral-100 mb-10">
          <div className="flex items-center gap-8 pb-4">
            {/* Step 1: Details */}
            <div className="flex items-center gap-2 relative">
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
                  step >= 1 ? 'bg-primary text-white' : 'border border-neutral-300 text-neutral-400'
                }`}
              >
                1
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 1 ? 'text-primary' : 'text-neutral-500'
                }`}
              >
                Case Details
              </span>
              {step === 1 && (
                <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary" />
              )}
            </div>

            {/* Connector */}
            <div className="text-neutral-200">
              <ChevronRightIcon width={16} height={16} />
            </div>

            {/* Step 2: Upload */}
            <div
              className={`flex items-center gap-2 ${
                step < 2 ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
                  step >= 2 ? 'bg-primary text-white' : 'border border-neutral-300 text-neutral-400'
                }`}
              >
                2
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 2 ? 'text-primary' : 'text-neutral-500'
                }`}
              >
                Upload Documents
              </span>
            </div>

            {/* Connector */}
            <div className={`text-neutral-200 ${step < 2 ? 'opacity-40' : ''}`}>
              <ChevronRightIcon width={16} height={16} />
            </div>

            {/* Step 3: Review */}
            <div
              className={`flex items-center gap-2 ${
                step < 3 ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
                  step >= 3 ? 'bg-primary text-white' : 'border border-neutral-300 text-neutral-400'
                }`}
              >
                3
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 3 ? 'text-primary' : 'text-neutral-500'
                }`}
              >
                Review
              </span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <form className="space-y-8 pb-20" onSubmit={handleSubmit}>
          {/* Section: Core Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case Name */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="case_name" className="block text-xs font-medium text-neutral-700 mb-2">
                Case Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  id="case_name"
                  value={caseName}
                  onChange={(e) => setCaseName(e.target.value)}
                  placeholder="e.g., Chicas v. Amazon"
                  className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Client / Defendant */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="client_name"
                className="block text-xs font-medium text-neutral-700 mb-2"
              >
                Client / Defendant <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="client_name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g., Amazon, Inc."
                className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="h-[1px] bg-neutral-100 w-full" />

          {/* Section: Jurisdiction */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-3">Court Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option 1: State */}
                <label className="cursor-pointer group relative">
                  <input
                    type="radio"
                    name="court_type"
                    className="peer sr-only"
                    checked={courtType === 'state'}
                    onChange={() => setCourtType('state')}
                  />
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                      courtType === 'state'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex-shrink-0 bg-white transition-all duration-200 ${
                        courtType === 'state' ? 'border-primary border-[5px]' : 'border-neutral-300'
                      }`}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-neutral-900">State Court</span>
                      <span className="text-[11px] text-neutral-500">Superior or Circuit Courts</span>
                    </div>
                    <div
                      className={`ml-auto ${
                        courtType === 'state' ? 'text-primary' : 'text-neutral-400'
                      }`}
                    >
                      <CityIcon width={20} height={20} />
                    </div>
                  </div>
                </label>

                {/* Option 2: Federal */}
                <label className="cursor-pointer group relative">
                  <input
                    type="radio"
                    name="court_type"
                    className="peer sr-only"
                    checked={courtType === 'federal'}
                    onChange={() => setCourtType('federal')}
                  />
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                      courtType === 'federal'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex-shrink-0 bg-white transition-all duration-200 ${
                        courtType === 'federal'
                          ? 'border-primary border-[5px]'
                          : 'border-neutral-300'
                      }`}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-neutral-900">Federal Court</span>
                      <span className="text-[11px] text-neutral-500">District Courts</span>
                    </div>
                    <div
                      className={`ml-auto ${
                        courtType === 'federal' ? 'text-primary' : 'text-neutral-400'
                      }`}
                    >
                      <ScaleIcon width={20} height={20} />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Specific Court Dropdown */}
              <div className="col-span-1">
                <label className="block text-xs font-medium text-neutral-700 mb-2">Court</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary">
                    <option value="">Select or search for court...</option>
                    <option value="ndcal">Northern District of California</option>
                    <option value="cdcal">Central District of California</option>
                    <option value="sdny">Southern District of New York</option>
                    <option value="la">Los Angeles Superior Court</option>
                    <option value="sf">San Francisco Superior Court</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              {/* Substantive Law State */}
              <div className="col-span-1">
                <label className="block text-xs font-medium text-neutral-700 mb-2">
                  Substantive Law State
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary">
                    <option value="">Select state...</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="de">Delaware</option>
                    <option value="tx">Texas</option>
                    <option value="fl">Florida</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-100 w-full" />

          {/* Section: Case Specifics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certification Stage */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-3">
                Certification Stage
              </label>
              <div className="flex flex-col gap-3">
                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="cert_stage"
                    className="peer sr-only"
                    checked={certStage === 'pre'}
                    onChange={() => setCertStage('pre')}
                  />
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      certStage === 'pre'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex-shrink-0 bg-white ${
                        certStage === 'pre' ? 'border-primary border-[4px]' : 'border-neutral-300'
                      }`}
                    />
                    <span className="text-sm text-neutral-700">Pre-Certification</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="cert_stage"
                    className="peer sr-only"
                    checked={certStage === 'post'}
                    onChange={() => setCertStage('post')}
                  />
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      certStage === 'post'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex-shrink-0 bg-white ${
                        certStage === 'post' ? 'border-primary border-[4px]' : 'border-neutral-300'
                      }`}
                    />
                    <span className="text-sm text-neutral-700">Post-Certification</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Response Type */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-3">
                Response Type
              </label>
              <div className="flex flex-col gap-3">
                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="response_type"
                    className="peer sr-only"
                    checked={responseType === 'initial'}
                    onChange={() => setResponseType('initial')}
                  />
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      responseType === 'initial'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex-shrink-0 bg-white ${
                        responseType === 'initial'
                          ? 'border-primary border-[4px]'
                          : 'border-neutral-300'
                      }`}
                    />
                    <span className="text-sm text-neutral-700">Initial Response</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="response_type"
                    className="peer sr-only"
                    checked={responseType === 'supplemental'}
                    onChange={() => setResponseType('supplemental')}
                  />
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      responseType === 'supplemental'
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex-shrink-0 bg-white ${
                        responseType === 'supplemental'
                          ? 'border-primary border-[4px]'
                          : 'border-neutral-300'
                      }`}
                    />
                    <span className="text-sm text-neutral-700">Supplemental Response</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>

        {/* Floating Bottom Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 py-4 px-6 z-40">
          <div className="max-w-4xl mx-auto flex items-center justify-between pl-[72px]">
            <Link
              href="/cases"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)] hover:shadow-[0_4px_16px_rgba(255,94,0,0.3)]"
            >
              Continue to Upload Documents
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}
