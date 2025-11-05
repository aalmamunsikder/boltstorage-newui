import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const sharedItems = [
  {
    id: "1",
    name: "Marketing Campaign 2024",
    type: "folder",
    items: 45,
    sharedWith: "12 people",
    sharedBy: "You",
    modified: "2 hours ago",
    permission: "Can edit",
    icon: (
      <svg className="h-5 w-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  },
  {
    id: "2",
    name: "Client Presentation.pptx",
    type: "file",
    size: "8.5 MB",
    sharedWith: "Sarah Johnson, Mike Chen",
    sharedBy: "You",
    modified: "Yesterday",
    permission: "Can view",
    icon: (
      <svg className="h-5 w-5 text-theme-orange-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "3",
    name: "Q4 Budget Report.xlsx",
    type: "file",
    size: "1.2 MB",
    sharedWith: "You",
    sharedBy: "John Davis",
    modified: "3 days ago",
    permission: "Can edit",
    icon: (
      <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function Shared() {
  const [filter, setFilter] = useState<"all" | "owned" | "shared">("all");

  const filteredItems = sharedItems.filter(item => {
    if (filter === "owned") return item.sharedBy === "You";
    if (filter === "shared") return item.sharedBy !== "You";
    return true;
  });

  return (
    <>
      <PageMeta
        title="Shared | BoltStorage - Cloud Storage"
        description="Files and folders shared with you and by you"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
              Shared
            </h1>
            <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
              Files and folders shared with you and by you
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                filter === "all"
                  ? "bg-brand-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("owned")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                filter === "owned"
                  ? "bg-brand-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              Owned by me
            </button>
            <button
              onClick={() => setFilter("shared")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                filter === "shared"
                  ? "bg-brand-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              Shared with me
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredItems.map((item) => (
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
                    {item.type === "folder" ? `${item.items} items` : item.size} • {item.sharedWith.includes(",") ? "Shared with " : "Shared by "}{item.sharedWith}
                  </p>
                </div>

                <div className="flex flex-shrink-0 items-center gap-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-theme-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {item.permission}
                  </span>
                  
                  <div className="flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
