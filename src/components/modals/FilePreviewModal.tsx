import { useEffect } from "react";

interface FilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: {
    name: string;
    type: string;
    size: string;
    url?: string;
    modified?: string;
  };
}

export default function FilePreviewModal({ isOpen, onClose, file }: FilePreviewModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getFilePreview = () => {
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    
    // Images
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(fileExt || '')) {
      return (
        <div className="flex h-full items-center justify-center bg-gray-900/50 p-8">
          <img
            src={file.url || 'https://via.placeholder.com/800x600?text=Image+Preview'}
            alt={file.name}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      );
    }
    
    // PDFs
    if (fileExt === 'pdf') {
      return (
        <div className="flex h-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
          <svg className="h-24 w-24 text-error-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{file.name}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">PDF File • {file.size}</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download to View
          </button>
        </div>
      );
    }
    
    // Videos
    if (['mp4', 'webm', 'ogg', 'mov'].includes(fileExt || '')) {
      return (
        <div className="flex h-full items-center justify-center bg-gray-900 p-8">
          <video
            controls
            className="max-h-full max-w-full rounded-lg"
            src={file.url || ''}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    
    // Audio
    if (['mp3', 'wav', 'ogg', 'flac'].includes(fileExt || '')) {
      return (
        <div className="flex h-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
          <svg className="h-24 w-24 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{file.name}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Audio File • {file.size}</p>
          <div className="mt-6 w-full max-w-md px-4">
            <audio controls className="w-full" src={file.url || ''}>
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
      );
    }
    
    // Documents (Office files, text, etc.)
    if (['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'].includes(fileExt || '')) {
      const iconColor = fileExt?.includes('doc') ? 'text-blue-light-500' :
                       fileExt?.includes('xls') ? 'text-success-500' :
                       fileExt?.includes('ppt') ? 'text-theme-orange-500' :
                       'text-gray-500';
      
      const fileTypeName = fileExt?.includes('doc') ? 'Word Document' :
                          fileExt?.includes('xls') ? 'Excel Spreadsheet' :
                          fileExt?.includes('ppt') ? 'PowerPoint Presentation' :
                          'Text Document';
      
      return (
        <div className="flex h-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
          <svg className={`h-24 w-24 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{file.name}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{fileTypeName} • {file.size}</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download to View
          </button>
        </div>
      );
    }
    
    // Default for unsupported types
    return (
      <div className="flex h-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
        </svg>
        <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{file.name}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Preview not available for this file type</p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download File
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 flex h-[90vh] w-[90vw] max-w-7xl flex-col overflow-hidden rounded-xl bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-6 py-4">
          <div className="flex-1 overflow-hidden">
            <h2 className="truncate text-lg font-semibold text-white">{file.name}</h2>
            <p className="text-sm text-gray-400">{file.size} {file.modified && `• Modified ${file.modified}`}</p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Action buttons */}
            <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-700 hover:text-white" title="Download">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-700 hover:text-white" title="Share">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-700 hover:text-white" title="Star">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-700 hover:text-white"
              title="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Preview Area */}
        <div className="flex-1 overflow-auto">
          {getFilePreview()}
        </div>
      </div>
    </div>
  );
}
