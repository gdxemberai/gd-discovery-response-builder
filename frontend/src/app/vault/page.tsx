'use client'

import React from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { FolderIcon, DocumentIcon, SearchIcon } from '@/components/icons'

const folders = [
  { name: 'Chicas v. Amazon', files: 12, lastModified: 'Feb 3, 2026' },
  { name: 'Martinez v. Walmart', files: 8, lastModified: 'Jan 15, 2026' },
  { name: 'Johnson v. Target', files: 15, lastModified: 'Dec 20, 2025' },
  { name: 'Williams v. Uber', files: 6, lastModified: 'Dec 5, 2025' },
]

const recentFiles = [
  { name: 'Responses_Objections_v1.docx', case: 'Chicas v. Amazon', type: 'docx', date: 'Feb 3, 2026' },
  { name: 'Client_Summary_v1.docx', case: 'Chicas v. Amazon', type: 'docx', date: 'Feb 3, 2026' },
  { name: 'Data_Request_Sheet.xlsx', case: 'Chicas v. Amazon', type: 'xlsx', date: 'Feb 3, 2026' },
  { name: 'Chicas_Complaint.pdf', case: 'Chicas v. Amazon', type: 'pdf', date: 'Jan 25, 2026' },
]

export default function VaultPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 w-full max-w-[1600px] mx-auto py-8 px-8 lg:px-12 flex flex-col relative z-10 h-full overflow-y-auto no-scrollbar">
        {/* Page Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">The Vault</h1>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white pl-3 pr-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_2px_10px_rgba(255,94,0,0.2)]">
              <DocumentIcon width={18} height={18} />
              Upload Files
            </button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <SearchIcon width={18} height={18} />
            </div>
            <input
              type="text"
              placeholder="Search files and folders..."
              className="w-full bg-neutral-50 hover:bg-neutral-100 focus:bg-white border border-transparent focus:border-neutral-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-neutral-400 text-neutral-900"
            />
          </div>
        </div>

        {/* Case Folders */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 mb-4">Case Folders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <div
                key={folder.name}
                className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                    <FolderIcon width={20} height={20} />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors mb-1">
                  {folder.name}
                </h3>
                <p className="text-xs text-neutral-500">
                  {folder.files} files · {folder.lastModified}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Files */}
        <section>
          <h2 className="text-sm font-semibold text-neutral-900 mb-4">Recent Files</h2>
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50/50 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Case</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">Date Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {recentFiles.map((file) => (
                  <tr
                    key={file.name}
                    className="group hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                            file.type === 'pdf'
                              ? 'bg-red-50 text-red-500'
                              : file.type === 'xlsx'
                              ? 'bg-emerald-50 text-emerald-500'
                              : 'bg-blue-50 text-blue-500'
                          }`}
                        >
                          <DocumentIcon width={16} height={16} />
                        </div>
                        <span className="font-medium text-neutral-900 text-sm group-hover:text-primary transition-colors">
                          {file.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-neutral-600">{file.case}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded uppercase">
                        {file.type}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-neutral-500">{file.date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </DashboardLayout>
  )
}
