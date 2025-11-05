import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const trashedItems = [
  {
    id: "1",
    name: "Old_Project_Files",
    type: "folder",
    items: 156,
    deletedDate: "7 days ago",
    expiresIn: "23 days",
    icon: (
      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  },
  {
    id: "2",
    name: "Draft_Presentation.pptx",
    type: "file",
    size: "5.2 MB",
    deletedDate: "14 days ago",
    expiresIn: "16 days",
    icon: (
      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "3",
    name: "Backup_2023.zip",
    type: "file",
    size: "124 MB",
    deletedDate: "21 days ago",
    expiresIn: "9 days",
    icon: (
      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function Trash() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedItems(selectedItems.length === trashedItems.length ? [] : trashedItems.map(item => item.id));
  };

  return (
    <>
      <PageMeta
        title="Trash | BoltStorage - Cloud Storage"
        description="Deleted files and folders"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
              Trash
            </h1>
            <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
              Items in trash are deleted after 30 days
            </p>
          </div>
          
          {selectedItems.length > 0 && (
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Restore {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''}
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-error-500 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs transition hover:bg-error-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete Forever
              </button>
            </div>
          )}
        </div>

        {/* Info Alert */}
        <div className="rounded-lg border border-warning-200 bg-warning-50 p-4 dark:border-warning-500/20 dark:bg-warning-500/10">
          <div className="flex gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-theme-sm text-warning-700 dark:text-warning-400">
              Items in trash will be automatically deleted after 30 days. You can restore them before that.
            </p>
          </div>
        </div>

        {/* Content */}
        {trashedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
            <svg className="h-16 w-16 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Trash is empty
            </h3>
            <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
              Items you delete will appear here
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
            {/* Select All Header */}
            <div className="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-800">
              <input
                type="checkbox"
                checked={selectedItems.length === trashedItems.length}
                onChange={selectAll}
                className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-gray-600"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Select all
              </span>
            </div>

            {/* Items List */}
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {trashedItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center gap-4 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-gray-600"
                  />
                  
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 overflow-hidden">
                    <h3 className="truncate font-medium text-gray-600 dark:text-gray-400 line-through">
                      {item.name}
                    </h3>
                    <p className="text-theme-sm text-gray-500 dark:text-gray-500">
                      {item.type === "folder" ? `${item.items} items` : item.size} • Deleted {item.deletedDate} • Expires in {item.expiresIn}
                    </p>
                  </div>

                  <div className="flex flex-shrink-0 items-center gap-2">
                    <button className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      Restore
                    </button>
                    <button className="rounded-lg p-2 text-error-500 transition hover:bg-error-50 dark:hover:bg-error-500/10">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
