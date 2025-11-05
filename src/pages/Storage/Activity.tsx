import PageMeta from "../../components/common/PageMeta";

const activities = [
  {
    id: "1",
    type: "upload",
    user: "You",
    action: "uploaded",
    item: "Q4_Financial_Report.pdf",
    time: "2 minutes ago",
    icon: (
      <svg className="h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    id: "2",
    type: "share",
    user: "Sarah Johnson",
    action: "shared",
    item: "Marketing Campaign 2024",
    time: "1 hour ago",
    icon: (
      <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  },
  {
    id: "3",
    type: "edit",
    user: "Mike Chen",
    action: "edited",
    item: "Project Proposal.docx",
    time: "3 hours ago",
    icon: (
      <svg className="h-5 w-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: "4",
    type: "delete",
    user: "You",
    action: "deleted",
    item: "Old_Backup_Files",
    time: "Yesterday at 4:32 PM",
    icon: (
      <svg className="h-5 w-5 text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    id: "5",
    type: "create",
    user: "You",
    action: "created",
    item: "Design Assets folder",
    time: "Yesterday at 2:15 PM",
    icon: (
      <svg className="h-5 w-5 text-blue-light-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: "6",
    type: "download",
    user: "John Davis",
    action: "downloaded",
    item: "Budget_Q4_2024.xlsx",
    time: "2 days ago",
    icon: (
      <svg className="h-5 w-5 text-theme-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
];

export default function Activity() {
  return (
    <>
      <PageMeta
        title="Activity | BoltStorage - Cloud Storage"
        description="View all file activity and history"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
              Activity
            </h1>
            <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
              Recent activity across all your files and folders
            </p>
          </div>
          
          {/* Filter */}
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <option>All activity</option>
              <option>Uploads</option>
              <option>Edits</option>
              <option>Shares</option>
              <option>Downloads</option>
              <option>Deletions</option>
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative p-6">
                {/* Timeline line */}
                {index !== activities.length - 1 && (
                  <div className="absolute left-[41px] top-[56px] h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                )}
                
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    {activity.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          <span className="font-normal text-gray-600 dark:text-gray-400">
                            {activity.action}
                          </span>{" "}
                          <span className="font-medium">{activity.item}</span>
                        </p>
                        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-500">
                          {activity.time}
                        </p>
                      </div>
                      
                      {/* Action button */}
                      <button className="flex-shrink-0 rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="border-t border-gray-200 p-4 text-center dark:border-gray-800">
            <button className="text-sm font-medium text-brand-500 transition hover:text-brand-600">
              Load more activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
