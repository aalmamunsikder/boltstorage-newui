import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const starredItems = [
  {
    id: "1",
    name: "Q4 Financial Report.pdf",
    type: "file",
    size: "2.4 MB",
    modified: "2 hours ago",
    owner: "You",
    icon: (
      <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "2",
    name: "Project Assets",
    type: "folder",
    items: 234,
    modified: "Yesterday",
    owner: "You",
    icon: (
      <svg className="h-5 w-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  },
  {
    id: "3",
    name: "Team_Photo_2024.jpg",
    type: "file",
    size: "4.2 MB",
    modified: "3 days ago",
    owner: "Sarah Johnson",
    icon: (
      <svg className="h-5 w-5 text-blue-light-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function Starred() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <>
      <PageMeta
        title="Starred | BoltStorage - Cloud Storage"
        description="Your starred files and folders"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
              Starred
            </h1>
            <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
              Files and folders you've starred
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex items-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-l-lg px-3 py-2 text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-r-lg px-3 py-2 text-sm font-medium transition ${
                  viewMode === "grid"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {starredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
            <svg className="h-16 w-16 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              No starred items
            </h3>
            <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
              Star your important files and folders to find them quickly
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
            {viewMode === "list" ? (
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {starredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <h3 className="truncate font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                        {item.type === "folder" ? `${item.items} items` : item.size} • Modified {item.modified} • {item.owner}
                      </p>
                    </div>

                    <div className="flex flex-shrink-0 items-center gap-2">
                      <button className="rounded-lg p-2 text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-500/10">
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                      <button className="rounded-lg p-2 text-gray-600 opacity-0 transition group-hover:opacity-100 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {starredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-lg border border-gray-200 p-4 transition hover:border-brand-500 hover:shadow-theme-md dark:border-gray-800 dark:hover:border-brand-500"
                  >
                    <button className="absolute right-2 top-2 rounded-lg p-1.5 text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-500/10">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="mt-3 truncate w-full text-sm font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-theme-xs text-gray-600 dark:text-gray-400">
                        {item.type === "folder" ? `${item.items} items` : item.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
