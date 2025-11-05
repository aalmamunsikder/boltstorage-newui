import { useState, useRef, DragEvent } from "react";
import { useToast } from "../common/Toast";

interface DropZoneProps {
  onFilesSelected?: (files: FileList) => void;
}

export default function DropZone({ onFilesSelected }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only set dragging to false if we're leaving the drop zone entirely
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    if (x <= rect.left || x >= rect.right || y <= rect.top || y >= rect.bottom) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (onFilesSelected) {
      onFilesSelected(files);
    } else {
      // Default behavior - show toast
      const fileNames = Array.from(files).map(f => f.name).join(", ");
      showToast(
        `Uploading ${files.length} file${files.length > 1 ? 's' : ''}: ${fileNames}`,
        "info"
      );
    }
  };

  if (!isDragging) return null;

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Drop zone overlay */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="fixed inset-0 z-[9998] flex items-center justify-center bg-brand-500/10 backdrop-blur-sm"
      >
        <div className="relative rounded-2xl border-4 border-dashed border-brand-500 bg-white/90 p-16 text-center dark:bg-gray-900/90">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-brand-50 p-6 dark:bg-brand-500/10">
              <svg className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Drop files here to upload
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Release to start uploading
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Hook to enable drag and drop anywhere on the page
export function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragging(true);
    }
  };

  return { isDragging, handleDragEnter, setIsDragging };
}
