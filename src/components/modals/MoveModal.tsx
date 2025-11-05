import { useState, useEffect } from "react";

interface Folder {
  id: string;
  name: string;
  path: string;
  parent?: string;
  subfolders?: Folder[];
}

interface MoveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMove: (destinationId: string) => void;
  onCopy: (destinationId: string) => void;
  itemName: string;
  itemType: "file" | "folder";
  mode: "move" | "copy";
}

export default function MoveModal({ 
  isOpen, 
  onClose, 
  onMove,
  onCopy,
  itemName,
  itemType,
  mode 
}: MoveModalProps) {
  const [selectedFolder, setSelectedFolder] = useState<string>("root");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["root"]));
  const [searchQuery, setSearchQuery] = useState("");

  // Sample folder structure - in real app, this would come from state/API
  const [folders] = useState<Folder[]>([
    {
      id: "root",
      name: "My Files",
      path: "/",
      subfolders: [
        {
          id: "documents",
          name: "Documents",
          path: "/documents",
          parent: "root",
          subfolders: [
            { id: "work", name: "Work", path: "/documents/work", parent: "documents" },
            { id: "personal", name: "Personal", path: "/documents/personal", parent: "documents" }
          ]
        },
        {
          id: "photos",
          name: "Photos",
          path: "/photos",
          parent: "root",
          subfolders: [
            { id: "vacation", name: "Vacation 2024", path: "/photos/vacation", parent: "photos" }
          ]
        },
        { id: "projects", name: "Projects", path: "/projects", parent: "root" },
        { id: "videos", name: "Videos", path: "/videos", parent: "root" },
        { id: "music", name: "Music", path: "/music", parent: "root" }
      ]
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      setSelectedFolder("root");
      setSearchQuery("");
    }
  }, [isOpen]);

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

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const handleConfirm = () => {
    if (mode === "move") {
      onMove(selectedFolder);
    } else {
      onCopy(selectedFolder);
    }
    onClose();
  };

  const renderFolder = (folder: Folder, depth: number = 0) => {
    const isExpanded = expandedFolders.has(folder.id);
    const isSelected = selectedFolder === folder.id;
    const hasSubfolders = folder.subfolders && folder.subfolders.length > 0;

    // Filter by search query
    if (searchQuery && !folder.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }

    return (
      <div key={folder.id}>
        <div
          className={`flex items-center gap-2 rounded-lg px-3 py-2 transition cursor-pointer ${
            isSelected 
              ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400" 
              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          }`}
          style={{ paddingLeft: `${depth * 20 + 12}px` }}
          onClick={() => setSelectedFolder(folder.id)}
        >
          {/* Expand/Collapse Icon */}
          {hasSubfolders ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder(folder.id);
              }}
              className="flex-shrink-0"
            >
              <svg 
                className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <span className="w-4" />
          )}

          {/* Folder Icon */}
          <svg className="h-5 w-5 flex-shrink-0 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>

          {/* Folder Name */}
          <span className="flex-1 truncate text-sm font-medium">
            {folder.name}
          </span>

          {/* Selected Checkmark */}
          {isSelected && (
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Subfolders */}
        {hasSubfolders && isExpanded && (
          <div>
            {folder.subfolders!.map(subfolder => renderFolder(subfolder, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-theme-xl dark:border-gray-800 dark:bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/10">
              <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mode === "move" ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {mode === "move" ? "Move" : "Copy"} {itemType}
              </h2>
              <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                Select destination for "{itemName}"
              </p>
            </div>
          </div>
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
        <div className="p-6">
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search folders..."
                className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          {/* Folder Tree */}
          <div className="max-h-[400px] overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800/50">
            {folders.map(folder => renderFolder(folder))}
          </div>

          {/* Info */}
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-light-50 p-3 dark:bg-blue-light-500/10">
            <svg className="h-5 w-5 flex-shrink-0 text-blue-light-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-blue-light-700 dark:text-blue-light-400">
              {mode === "move" 
                ? `The ${itemType} will be moved to the selected folder. You can move it back anytime.`
                : `A copy of the ${itemType} will be created in the selected folder. The original will remain in place.`
              }
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-6 dark:border-gray-800">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600"
          >
            {mode === "move" ? "Move here" : "Copy here"}
          </button>
        </div>
      </div>
    </div>
  );
}
