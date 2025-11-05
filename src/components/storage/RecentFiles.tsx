const files = [
  {
    name: "Project Proposal 2024.pdf",
    size: "2.4 MB",
    modified: "2 hours ago",
    type: "PDF",
    icon: (
      <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
    shared: false
  },
  {
    name: "Design Mockups.fig",
    size: "15.8 MB",
    modified: "5 hours ago",
    type: "Figma",
    icon: (
      <svg className="h-5 w-5 text-theme-purple-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
    shared: true
  },
  {
    name: "Budget_Q4_2024.xlsx",
    size: "845 KB",
    modified: "Yesterday",
    type: "Excel",
    icon: (
      <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
    shared: false
  },
  {
    name: "Team_Photo_2024.jpg",
    size: "4.2 MB",
    modified: "Yesterday",
    type: "Image",
    icon: (
      <svg className="h-5 w-5 text-blue-light-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    ),
    shared: true
  },
  {
    name: "Meeting_Recording.mp4",
    size: "125 MB",
    modified: "2 days ago",
    type: "Video",
    icon: (
      <svg className="h-5 w-5 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
      </svg>
    ),
    shared: false
  }
];

export default function RecentFiles() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Files
          </h2>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Your recently accessed files
          </p>
        </div>
        <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
          View All
        </button>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {files.map((file, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            {/* File Icon */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
              {file.icon}
            </div>

            {/* File Info */}
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-medium text-gray-900 dark:text-white">
                  {file.name}
                </h3>
                {file.shared && (
                  <span className="flex-shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-theme-xs font-medium text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    Shared
                  </span>
                )}
              </div>
              <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                {file.size} • {file.modified}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-shrink-0 items-center gap-2 opacity-0 transition group-hover:opacity-100">
              <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
