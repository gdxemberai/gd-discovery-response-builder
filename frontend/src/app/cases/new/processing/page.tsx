'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChevronRightIcon, CheckIcon, SpinnerIcon, CloseIcon, ClockIcon } from '@/components/icons'

const processingSteps = [
  { id: 1, label: 'Uploading documents...', completed: true, inProgress: false },
  { id: 2, label: 'Extracting individual requests...', completed: false, inProgress: true },
  { id: 3, label: 'Identifying defined terms...', completed: false, inProgress: false },
  { id: 4, label: 'Categorizing requests into topics...', completed: false, inProgress: false },
  { id: 5, label: 'Cross-referencing with complaint...', completed: false, inProgress: false },
]

export default function ProcessingDocumentsPage() {
  const router = useRouter()
  const [steps, setSteps] = useState(processingSteps)
  const [requestCount, setRequestCount] = useState(127)

  // Simulate processing progress
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    // Step 2 completes after 2 seconds
    timers.push(setTimeout(() => {
      setSteps(prev => prev.map(s =>
        s.id === 2 ? { ...s, completed: true, inProgress: false } :
        s.id === 3 ? { ...s, inProgress: true } : s
      ))
    }, 2000))

    // Step 3 completes after 3 seconds
    timers.push(setTimeout(() => {
      setSteps(prev => prev.map(s =>
        s.id === 3 ? { ...s, completed: true, inProgress: false } :
        s.id === 4 ? { ...s, inProgress: true } : s
      ))
    }, 3000))

    // Step 4 completes after 4 seconds
    timers.push(setTimeout(() => {
      setSteps(prev => prev.map(s =>
        s.id === 4 ? { ...s, completed: true, inProgress: false } :
        s.id === 5 ? { ...s, inProgress: true } : s
      ))
    }, 4000))

    // Step 5 completes and redirect after 5 seconds
    timers.push(setTimeout(() => {
      setSteps(prev => prev.map(s =>
        s.id === 5 ? { ...s, completed: true, inProgress: false } : s
      ))
      // Navigate to review page
      setTimeout(() => {
        router.push('/cases/new/review')
      }, 500)
    }, 5000))

    return () => timers.forEach(t => clearTimeout(t))
  }, [router])

  return (
    <DashboardLayout>
      <div className="flex flex-1 w-full min-h-screen items-center justify-center">
        <main className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col relative z-10">
          {/* Breadcrumb & Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-4 font-medium">
              <span>Cases</span>
              <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
              <span>Chicas v. Amazon</span>
              <ChevronRightIcon width={12} height={12} className="text-neutral-300" />
              <span className="text-neutral-900">Processing</span>
            </div>
            <h1 className="text-3xl font-medium tracking-tight text-neutral-900 mb-2">Processing Documents</h1>
            <p className="text-neutral-500">Chicas v. Amazon</p>
          </div>

          {/* Processing Card */}
          <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-sm p-8 sm:p-10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
              </svg>
            </div>

            {/* Vertical Timeline */}
            <div className="relative space-y-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-4 relative pb-10 last:pb-0">
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className={`absolute top-8 left-[11px] bottom-0 w-0.5 z-0 ${
                      step.completed ? 'bg-emerald-100' : 'bg-neutral-100'
                    }`}></div>
                  )}

                  {/* Step Icon */}
                  <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ring-4 ring-white ${
                    step.completed
                      ? 'bg-emerald-500 text-white'
                      : step.inProgress
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white border-2 border-neutral-200'
                  }`}>
                    {step.completed ? (
                      <CheckIcon width={14} height={14} />
                    ) : step.inProgress ? (
                      <SpinnerIcon width={14} height={14} className="animate-spin" />
                    ) : null}
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col pt-0.5 w-full">
                    <span className={`text-sm font-medium ${
                      step.completed
                        ? 'text-emerald-700'
                        : step.inProgress
                        ? 'text-neutral-900 font-semibold'
                        : 'text-neutral-400'
                    }`}>
                      {step.label}
                    </span>

                    {/* Live Counter for active step */}
                    {step.inProgress && step.id === 2 && (
                      <>
                        <div className="mt-3 bg-neutral-50 rounded-lg border border-neutral-100 p-3 flex items-center justify-between animate-pulse">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-xs font-medium text-neutral-700">{requestCount} requests found so far...</span>
                          </div>
                          <span className="text-[10px] text-neutral-400 font-mono">LIVE</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-400">
                          <ClockIcon width={12} height={12} />
                          <span>Estimated time remaining: 2-3 minutes</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cancel Link */}
          <div className="mt-8 text-center">
            <Link
              href="/cases/new/upload"
              className="text-sm text-neutral-400 hover:text-red-500 transition-colors inline-flex items-center gap-2 group"
            >
              <CloseIcon width={16} height={16} className="group-hover:rotate-90 transition-transform" />
              Cancel Processing
            </Link>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
