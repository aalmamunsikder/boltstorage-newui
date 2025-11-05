import PageMeta from "../../components/common/PageMeta";

const recentFiles = [
  {
    id: "1",
    name: "Project Proposal 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hours ago",
    action: "Edited",
    icon: (
      <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "2",
    name: "Design Mockups.fig",
    type: "Figma",
    size: "15.8 MB",
    modified: "5 hours ago",
    action: "Opened",
    icon: (
      <svg className="h-5 w-5 text-theme-purple-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "3",
    name: "Budget_Q4_2024.xlsx",
    type: "Excel",
    size: "845 KB",
    modified: "Yesterday at 3:45 PM",
    action: "Created",
    icon: (
      <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  }
];

const groupByTime = (files: typeof recentFiles) => {
  const groups: { [key: string]: typeof recentFiles } = {
    "Today": [],
    "Yesterday": [],
    "Last 7 days": [],
    "Earlier": []
  };

  files.forEach(file => {
    if (file.modified.includes("hours ago") || file.modified.includes("minutes ago")) {
      groups["Today"].push(file);
    } else if (file.modified.includes("Yesterday")) {
      groups["Yesterday"].push(file);
    } else if (file.modified.includes("days ago")) {
      const days = parseInt(file.modified);
      if (days <= 7) {
        groups["Last 7 days"].push(file);
      } else {
        groups["Earlier"].push(file);
      }
    } else {
      groups["Earlier"].push(file);
    }
  });

  return groups;
};

export default function Recent() {
  const groupedFiles = groupByTime(recentFiles);

  return (
    <>
      <PageMeta
        title="Recent | BoltStorage - Cloud Storage"
        description="Recently accessed files"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
            Recent
          </h1>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Files you've recently opened or modified
          </p>
        </div>

        {/* Timeline Content */}
        <div className="space-y-8">
          {Object.entries(groupedFiles).map(([timeGroup, files]) => 
            files.length > 0 ? (
              <div key={timeGroup}>
                <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {timeGroup}
                </h2>
                <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className="group flex items-center gap-4 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                          {file.icon}
                        </div>
                        
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center gap-2">
                            <h3 className="truncate font-medium text-gray-900 dark:text-white">
                              {file.name}
                            </h3>
                            <span className="flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-theme-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                              {file.action}
                            </span>
                          </div>
                          <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                            {file.size} • {file.modified}
                          </p>
                        </div>

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
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
