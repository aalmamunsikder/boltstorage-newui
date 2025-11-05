import { useState, DragEvent } from "react";
import PageMeta from "../../components/common/PageMeta";
import StorageHeader from "../../components/storage/StorageHeader";
import StorageStats from "../../components/storage/StorageStats";
import FileManager from "../../components/storage/FileManager";
import FolderList from "../../components/storage/FolderList";
import Breadcrumb, { useBreadcrumb } from "../../components/navigation/Breadcrumb";
import DropZone from "../../components/upload/DropZone";
import { useToast } from "../../components/common/Toast";

export default function CloudStorage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");
  const [isDragging, setIsDragging] = useState(false);
  const { breadcrumbItems } = useBreadcrumb();
  const { showToast } = useToast();

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Check if we're leaving the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    if (x <= rect.left || x >= rect.right || y <= rect.top || y >= rect.bottom) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFilesSelected = (files: FileList) => {
    const fileNames = Array.from(files).map(f => f.name).join(", ");
    showToast(
      `Uploading ${files.length} file${files.length > 1 ? 's' : ''}: ${fileNames}`,
      "info"
    );
  };

  return (
    <>
      <PageMeta
        title="My Files | BoltStorage - Cloud Storage"
        description="Access and manage your files in BoltStorage"
      />
      
      <div 
        className="space-y-6"
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />
        
        <StorageHeader 
          view={view}
          onViewChange={setView}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <StorageStats />
        <FolderList />
        <FileManager view={view} sortBy={sortBy} />
      </div>

      {/* Drop Zone Overlay */}
      {isDragging && <DropZone onFilesSelected={handleFilesSelected} />}
    </>
  );
}
