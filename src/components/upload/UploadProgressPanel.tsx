import { useState } from "react";

interface UploadFile {
  id: string;
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "complete" | "error" | "paused";
  speed?: string;
  timeRemaining?: string;
}

export default function UploadProgressPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const [uploads, setUploads] = useState<UploadFile[]>([
    {
      id: "1",
      name: "Project_Presentation.pptx",
      size: "15.8 MB",
      progress: 65,
      status: "uploading",
      speed: "2.3 MB/s",
      timeRemaining: "4s"
    },
    {
      id: "2",
      name: "Team_Photo_2024.jpg",
      size: "4.2 MB",
      progress: 100,
      status: "complete",
      speed: "3.1 MB/s"
    },
    {
      id: "3",
      name: "Budget_Report_Q4.xlsx",
      size: "2.1 MB",
      progress: 35,
      status: "paused",
      speed: "0 MB/s"
    }
  ]);

  const cancelUpload = (id: string) => {
    setUploads(uploads.filter(upload => upload.id !== id));
  };

  const pauseUpload = (id: string) => {
    setUploads(uploads.map(upload => 
      upload.id === id 
        ? { ...upload, status: upload.status === "paused" ? "uploading" : "paused" as const }
        : upload
    ));
  };

  const clearCompleted = () => {
    setUploads(uploads.filter(upload => upload.status !== "complete"));
  };

  const uploadingCount = uploads.filter(u => u.status === "uploading").length;
  const completedCount = uploads.filter(u => u.status === "complete").length;

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9998] w-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-theme-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="font-semibold text-gray-900 dark:text-white">
            {uploadingCount > 0 ? `Uploading ${uploadingCount} file${uploadingCount > 1 ? 's' : ''}` : 'Uploads'}
          </span>
          {completedCount > 0 && (
            <span className="rounded-full bg-success-100 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/10 dark:text-success-400">
              {completedCount} done
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg className={`h-5 w-5 transition-transform ${isMinimized ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Upload List */}
      {!isMinimized && (
        <div className="max-h-96 overflow-y-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {uploads.map((upload) => (
              <div key={upload.id} className="p-4">
                <div className="flex items-start gap-3">
                  {/* File Icon */}
                  <div className="flex-shrink-0">
                    {upload.status === "complete" ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-100 dark:bg-success-500/10">
                        <svg className="h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : upload.status === "error" ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-error-100 dark:bg-error-500/10">
                        <svg className="h-5 w-5 text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium text-gray-900 dark:text-white">
                          {upload.name}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-theme-sm text-gray-600 dark:text-gray-400">
                          <span>{upload.size}</span>
                          {upload.status === "uploading" && upload.speed && (
                            <>
                              <span>•</span>
                              <span>{upload.speed}</span>
                              {upload.timeRemaining && (
                                <>
                                  <span>•</span>
                                  <span>{upload.timeRemaining} left</span>
                                </>
                              )}
                            </>
                          )}
                          {upload.status === "complete" && (
                            <>
                              <span>•</span>
                              <span className="text-success-500">Complete</span>
                            </>
                          )}
                          {upload.status === "paused" && (
                            <>
                              <span>•</span>
                              <span className="text-warning-500">Paused</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1">
                        {upload.status === "uploading" && (
                          <button
                            onClick={() => pauseUpload(upload.id)}
                            className="rounded p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                        {upload.status === "paused" && (
                          <button
                            onClick={() => pauseUpload(upload.id)}
                            className="rounded p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                        {upload.status !== "complete" && (
                          <button
                            onClick={() => cancelUpload(upload.id)}
                            className="rounded p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {upload.status !== "complete" && (
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                        <div
                          className={`h-full rounded-full transition-all ${
                            upload.status === "error" ? "bg-error-500" :
                            upload.status === "paused" ? "bg-warning-500" :
                            "bg-brand-500"
                          }`}
                          style={{ width: `${upload.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          {completedCount > 0 && (
            <div className="border-t border-gray-200 p-3 dark:border-gray-800">
              <button
                onClick={clearCompleted}
                className="text-sm font-medium text-brand-500 hover:text-brand-600"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
