import { useState, useRef } from "react";
import ViewToggle, { SortDropdown } from "./ViewControls";
import NewFolderModal from "../modals/NewFolderModal";
import { useToast } from "../common/Toast";

interface StorageHeaderProps {
  view?: "grid" | "list";
  onViewChange?: (view: "grid" | "list") => void;
  sortBy?: string;
  onSortChange?: (sortBy: string) => void;
}

export default function StorageHeader({ 
  view = "grid", 
  onViewChange = () => {}, 
  sortBy = "name", 
  onSortChange = () => {} 
}: StorageHeaderProps) {
  const [newFolderModal, setNewFolderModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleCreateFolder = (folderName: string) => {
    showToast(`Created folder "${folderName}"`, "success");
    // In real app, would create folder here
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileNames = Array.from(files).map(f => f.name);
      showToast(
        `Uploading ${files.length} file${files.length > 1 ? 's' : ''}: ${fileNames.join(", ")}`,
        "info"
      );
      // In real app, this would trigger the upload progress panel
      // and actually upload the files
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };
  return (
    <div className="space-y-4">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        accept="*/*"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
          My Files
        </h1>
        <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
          Access and manage all your files in one place
        </p>
      </div>
      
        <div className="flex items-center gap-3">
          {/* New Folder Button */}
          <button 
            onClick={() => setNewFolderModal(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <span>New Folder</span>
          </button>

          {/* Upload Button */}
          <button 
            onClick={handleUploadClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* View Controls */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing all files
        </p>
        <div className="flex items-center gap-3">
          <SortDropdown sortBy={sortBy} onSortChange={onSortChange} />
          <ViewToggle view={view} onViewChange={onViewChange} />
        </div>
      </div>

      {/* New Folder Modal */}
      <NewFolderModal
        isOpen={newFolderModal}
        onClose={() => setNewFolderModal(false)}
        onCreate={handleCreateFolder}
      />
    </div>
  );
}
