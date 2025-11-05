import { useState, useRef } from "react";
import ContextMenu, { useContextMenu } from "../common/ContextMenu";
import { getFileContextMenuItems } from "./FileContextMenuItems";
import FilePreviewModal from "../modals/FilePreviewModal";
import ShareModal from "../modals/ShareModal";
import RenameModal from "../modals/RenameModal";
import MoveModal from "../modals/MoveModal";
import EmptyState from "../common/EmptyState";
import { useToast } from "../common/Toast";
import FileDetailsPanel from "./FileDetailsPanel";

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  size?: string;
  modified: string;
  isStarred: boolean;
  isShared?: boolean;
  sharedWith?: number;
  fileType?: string;
}

interface FileManagerProps {
  view: "grid" | "list";
  sortBy: string;
}

const sampleFiles: FileItem[] = [
  {
    id: "1",
    name: "Project Proposal 2024.pdf",
    type: "file",
    size: "2.4 MB",
    modified: "2 hours ago",
    isStarred: false,
    isShared: true,
    sharedWith: 3,
    fileType: "pdf"
  },
  {
    id: "2",
    name: "Design Mockups",
    type: "folder",
    modified: "Yesterday",
    isStarred: true,
    isShared: false
  },
  {
    id: "3",
    name: "Budget_Q4_2024.xlsx",
    type: "file",
    size: "1.8 MB",
    modified: "3 days ago",
    isStarred: false,
    isShared: true,
    sharedWith: 1,
    fileType: "xlsx"
  },
  {
    id: "4",
    name: "Team Photos",
    type: "folder",
    modified: "Last week",
    isStarred: false,
    isShared: false
  },
  {
    id: "5",
    name: "Presentation.pptx",
    type: "file",
    size: "8.5 MB",
    modified: "2 days ago",
    isStarred: true,
    isShared: false,
    fileType: "pptx"
  },
  {
    id: "6",
    name: "Meeting Notes.docx",
    type: "file",
    size: "245 KB",
    modified: "5 hours ago",
    isStarred: false,
    isShared: true,
    sharedWith: 5,
    fileType: "docx"
  }
];

export default function FileManager({ view }: FileManagerProps) {
  const [files, setFiles] = useState<FileItem[]>(sampleFiles);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();
  
  // Modal states
  const [previewModal, setPreviewModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [renameModal, setRenameModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  const [moveMode, setMoveMode] = useState<"move" | "copy">("move");
  const [detailsPanel, setDetailsPanel] = useState(false);
  
  const { contextMenu, openContextMenu, closeContextMenu } = useContextMenu();

  // Bulk selection handlers
  const toggleFileSelection = (fileId: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    setSelectedFiles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fileId)) {
        newSet.delete(fileId);
      } else {
        newSet.add(fileId);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    if (selectedFiles.size === files.length) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(files.map(f => f.id)));
    }
  };

  const clearSelection = () => {
    setSelectedFiles(new Set());
  };

  const handleFileClick = (file: FileItem, event: React.MouseEvent) => {
    // If clicking checkbox area, don't open preview
    if ((event.target as HTMLElement).closest('.checkbox-area')) {
      return;
    }
    
    setSelectedFile(file);
    if (file.type === "file") {
      setPreviewModal(true);
    }
  };

  const handleContextMenu = (e: React.MouseEvent, file: FileItem) => {
    e.preventDefault();
    setSelectedFile(file);
    openContextMenu(e);
  };

  const toggleStar = (fileId: string) => {
    setFiles(files.map(f => 
      f.id === fileId ? { ...f, isStarred: !f.isStarred } : f
    ));
    const file = files.find(f => f.id === fileId);
    if (file) {
      showToast(
        file.isStarred ? `Removed "${file.name}" from starred` : `Added "${file.name}" to starred`,
        "success"
      );
    }
  };

  const handleRename = (newName: string) => {
    if (selectedFile) {
      setFiles(files.map(f => 
        f.id === selectedFile.id ? { ...f, name: newName } : f
      ));
      showToast(`Renamed to "${newName}"`, "success");
    }
  };

  const handleMove = (destinationId: string) => {
    console.log("Move to:", destinationId); // Placeholder for backend integration
    showToast(`Moved ${selectedFiles.size > 0 ? selectedFiles.size + ' items' : '1 item'}`, "success", {
      label: "Undo",
      onClick: () => console.log("Undo move")
    });
    clearSelection();
  };

  const handleCopy = (destinationId: string) => {
    console.log("Copy to:", destinationId); // Placeholder for backend integration
    showToast(`Copied ${selectedFiles.size > 0 ? selectedFiles.size + ' items' : '1 item'}`, "success");
    clearSelection();
  };

  const handleDelete = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    setFiles(files.filter(f => f.id !== fileId));
    if (file) {
      showToast(`"${file.name}" moved to trash`, "success", {
        label: "Undo",
        onClick: () => {
          setFiles(prev => [...prev, file]);
          showToast("Restored from trash", "success");
        }
      });
    }
  };

  const handleBulkDelete = () => {
    const count = selectedFiles.size;
    setFiles(files.filter(f => !selectedFiles.has(f.id)));
    showToast(`${count} items moved to trash`, "success", {
      label: "Undo",
      onClick: () => showToast("Restored from trash", "success")
    });
    clearSelection();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles && uploadedFiles.length > 0) {
      const fileNames = Array.from(uploadedFiles).map(f => f.name);
      showToast(
        `Uploading ${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''}: ${fileNames.join(", ")}`,
        "info"
      );
      // In real app, this would trigger the upload progress panel
    }
    e.target.value = ""; // Reset input
  };

  const handleShare = (users: any[], linkEnabled: boolean) => {
    if (selectedFile) {
      console.log("Sharing with:", users, "Link enabled:", linkEnabled); // Placeholder for backend integration
      setFiles(files.map(f => 
        f.id === selectedFile.id 
          ? { ...f, isShared: true, sharedWith: users.length - 1 } 
          : f
      ));
    }
  };

  // Get context menu items
  const contextMenuItems = selectedFile ? getFileContextMenuItems({
    fileName: selectedFile.name,
    fileType: selectedFile.type,
    isStarred: selectedFile.isStarred,
    onOpen: () => {
      if (selectedFile.type === "file") {
        setPreviewModal(true);
      }
    },
    onDownload: selectedFile.type === "file" ? () => {
      console.log("Download:", selectedFile.name);
    } : undefined,
    onShare: () => setShareModal(true),
    onStar: () => toggleStar(selectedFile.id),
    onRename: () => setRenameModal(true),
    onMove: () => {
      setMoveMode("move");
      setMoveModal(true);
    },
    onCopy: () => {
      setMoveMode("copy");
      setMoveModal(true);
    },
    onDelete: () => handleDelete(selectedFile.id),
    onDetails: () => setDetailsPanel(true)
  }) : [];

  const getFileIcon = (file: FileItem) => {
    if (file.type === "folder") {
      return (
        <svg className="h-8 w-8 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    }

    // File type icons
    const iconClass = "h-8 w-8";
    switch (file.fileType) {
      case "pdf":
        return (
          <svg className={`${iconClass} text-error-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case "xlsx":
        return (
          <svg className={`${iconClass} text-success-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case "pptx":
        return (
          <svg className={`${iconClass} text-theme-orange-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case "docx":
        return (
          <svg className={`${iconClass} text-blue-light-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className={`${iconClass} text-gray-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* Hidden file input for empty state */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        accept="*/*"
      />

      {/* Bulk Actions Toolbar */}
      {selectedFiles.size > 0 && (
        <div className="mb-4 flex items-center justify-between rounded-lg border border-brand-500 bg-brand-50 px-4 py-3 dark:border-brand-500/50 dark:bg-brand-500/10">
          <div className="flex items-center gap-3">
            <button
              onClick={clearSelection}
              className="rounded p-1 text-gray-600 transition hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {selectedFiles.size} selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast(`Downloaded ${selectedFiles.size} items`, "success")}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
            <button
              onClick={() => setShareModal(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
            <button
              onClick={handleBulkDelete}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-error-600 transition hover:bg-error-50 dark:bg-gray-800 dark:hover:bg-error-500/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      )}

      {files.length === 0 ? (
        <EmptyState
          title="No files here"
          description="Upload files or create a new folder to get started"
          actions={[
            {
              label: "Upload Files",
              onClick: handleUploadClick,
              primary: true,
              icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              )
            },
            {
              label: "New Folder",
              onClick: () => showToast("Use the 'New Folder' button in the header", "info"),
              icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              )
            }
          ]}
        />
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          {view === "grid" ? (
            // Grid View
            <>
              {/* Select All Header */}
              <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-3 dark:border-gray-800">
                <button
                  onClick={selectAll}
                  className="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 transition hover:border-brand-500 dark:border-gray-600"
                >
                  {selectedFiles.size === files.length && selectedFiles.size > 0 && (
                    <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedFiles.size > 0 ? `${selectedFiles.size} of ${files.length} selected` : "Select all"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {files.map((file) => (
                  <div
                    key={file.id}
                    onClick={(e) => handleFileClick(file, e)}
                    onContextMenu={(e) => handleContextMenu(e, file)}
                    className={`group relative cursor-pointer rounded-lg border p-4 transition ${
                      selectedFiles.has(file.id)
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
                        : "border-gray-200 bg-white hover:border-brand-500 hover:shadow-theme-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-500"
                    }`}
                  >
                    {/* Checkbox */}
                    <div className="checkbox-area absolute left-2 top-2">
                      <button
                        onClick={(e) => toggleFileSelection(file.id, e)}
                        className="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 bg-white transition hover:border-brand-500 dark:border-gray-600 dark:bg-gray-800"
                      >
                        {selectedFiles.has(file.id) && (
                          <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Star Badge */}
                    {file.isStarred && (
                      <div className="absolute right-2 top-2">
                        <svg className="h-4 w-4 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center gap-3">
                      {getFileIcon(file)}
                      <div className="w-full text-center">
                        <div className="flex items-center justify-center gap-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {file.name}
                          </p>
                          {file.isShared && (
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {file.size || file.modified}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // List View
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {/* List Header with Select All */}
              <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 dark:bg-gray-800/50 dark:text-gray-400">
                <div className="checkbox-area w-5">
                  <button
                    onClick={selectAll}
                    className="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 transition hover:border-brand-500 dark:border-gray-600"
                  >
                    {selectedFiles.size === files.length && selectedFiles.size > 0 && (
                      <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="flex-1">Name</div>
                <div className="w-32 text-right">Modified</div>
                <div className="w-24 text-right">Size</div>
                <div className="w-10"></div>
              </div>

              {files.map((file) => (
                <div
                  key={file.id}
                  onClick={(e) => handleFileClick(file, e)}
                  onContextMenu={(e) => handleContextMenu(e, file)}
                  className={`group flex items-center gap-4 p-4 transition cursor-pointer ${
                    selectedFiles.has(file.id)
                      ? "bg-brand-50 dark:bg-brand-500/10"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {/* Checkbox */}
                  <div className="checkbox-area">
                    <button
                      onClick={(e) => toggleFileSelection(file.id, e)}
                      className="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 bg-white transition hover:border-brand-500 dark:border-gray-600 dark:bg-gray-800"
                    >
                      {selectedFiles.has(file.id) && (
                        <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="flex-shrink-0">
                    {getFileIcon(file)}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {file.isStarred && (
                          <svg className="h-4 w-4 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        {file.isShared && (
                          <span title={`Shared with ${file.sharedWith} ${file.sharedWith === 1 ? 'person' : 'people'}`}>
                            <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-32 text-right text-sm text-gray-600 dark:text-gray-400">
                    {file.modified}
                  </div>
                  <div className="w-24 text-right text-sm text-gray-600 dark:text-gray-400">
                    {file.size || "—"}
                  </div>
                  <button className="w-10 opacity-0 group-hover:opacity-100 rounded p-1 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Context Menu */}
      <ContextMenu
        isOpen={contextMenu.isOpen}
        position={contextMenu.position}
        onClose={closeContextMenu}
        items={contextMenuItems}
      />

      {/* Modals */}
      {selectedFile && (
        <>
          <FilePreviewModal
            isOpen={previewModal}
            onClose={() => setPreviewModal(false)}
            file={{
              name: selectedFile.name,
              type: selectedFile.fileType || "unknown",
              size: selectedFile.size || "0",
              modified: selectedFile.modified
            }}
          />

          <ShareModal
            isOpen={shareModal}
            onClose={() => setShareModal(false)}
            onShare={handleShare}
            item={{
              name: selectedFile.name,
              type: selectedFile.type
            }}
          />

          <RenameModal
            isOpen={renameModal}
            onClose={() => setRenameModal(false)}
            onRename={handleRename}
            currentName={selectedFile.name}
            itemType={selectedFile.type}
          />

          <MoveModal
            isOpen={moveModal}
            onClose={() => setMoveModal(false)}
            onMove={handleMove}
            onCopy={handleCopy}
            itemName={selectedFile.name}
            itemType={selectedFile.type}
            mode={moveMode}
          />

          <FileDetailsPanel
            isOpen={detailsPanel}
            onClose={() => setDetailsPanel(false)}
            file={{
              name: selectedFile.name,
              type: selectedFile.type,
              size: selectedFile.size,
              modified: selectedFile.modified,
              created: "Jan 15, 2024",
              owner: "John Doe",
              isStarred: selectedFile.isStarred
            }}
          />
        </>
      )}
    </>
  );
}
