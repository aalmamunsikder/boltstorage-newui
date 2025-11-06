import { useEffect } from "react";

interface FileDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  file: {
    name: string;
    type: "file" | "folder";
    size?: string;
    modified: string;
    created?: string;
    owner?: string;
    isStarred?: boolean;
  } | null;
}

export default function FileDetailsPanel({ isOpen, onClose, file }: FileDetailsPanelProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !file) return null;

  const getFileIcon = () => {
    if (file.type === "folder") {
      return (
        <svg className="h-12 w-12 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    }
    return (
      <svg className="h-12 w-12 text-blue-light-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <>
      {/* Backdrop - for all screen sizes */}
      <div
        className={`fixed inset-0 z-[9997] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 z-[9999] h-full w-full bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 sm:w-96 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Details
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* File Preview */}
            <div className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/50">
              {getFileIcon()}
              <div className="text-center">
                <p className="font-medium text-gray-900 dark:text-white">
                  {file.name}
                </p>
                {file.size && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {file.size}
                  </p>
                )}
              </div>
            </div>

            {/* Info Sections */}
            <div className="mt-6 space-y-6">
              {/* Properties */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                  Properties
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Type</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {file.type === "folder" ? "Folder" : "File"}
                    </span>
                  </div>
                  {file.size && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Size</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {file.size}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Modified</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {file.modified}
                    </span>
                  </div>
                  {file.created && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Created</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {file.created}
                      </span>
                    </div>
                  )}
                  {file.owner && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Owner</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {file.owner}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Who has access - Team Workspace */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                  Team Workspace
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">
                      <span className="text-sm font-semibold">JD</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        John Doe (you)
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Owner • Full Access</p>
                    </div>
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-500/20 dark:text-purple-400">
                      Admin
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                    <div className="relative">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                        <span className="text-sm font-semibold">SJ</span>
                      </div>
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Sarah Johnson
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">sarah@company.com</p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                      Editor
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400">
                      <span className="text-sm font-semibold">MC</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Michael Chen
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">michael@company.com</p>
                    </div>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-500/20 dark:text-gray-400">
                      Viewer
                    </span>
                  </div>
                </div>
                <button className="mt-3 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                  Manage Access
                </button>
              </div>

              {/* Activity Log */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                  Activity Log
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-light-100 dark:bg-blue-light-500/10">
                      <svg className="h-4 w-4 text-blue-light-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">Sarah Johnson</span> edited this {file.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/10">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">Michael Chen</span> downloaded this {file.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/10">
                      <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">You</span> shared this {file.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-success-100 dark:bg-success-500/10">
                      <svg className="h-4 w-4 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">You</span> created this {file.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{file.created || file.modified}</p>
                    </div>
                  </div>
                </div>
                <button className="mt-3 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                  View Full History
                </button>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-200 p-6 dark:border-gray-800">
            <div className="grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-error-500 bg-white px-4 py-2.5 text-sm font-medium text-error-600 transition hover:bg-error-50 dark:bg-gray-900 dark:hover:bg-error-500/10">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
