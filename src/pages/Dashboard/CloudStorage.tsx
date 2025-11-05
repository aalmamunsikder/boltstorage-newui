import PageMeta from "../../components/common/PageMeta";
import StorageHeader from "../../components/storage/StorageHeader";
import StorageStats from "../../components/storage/StorageStats";
import RecentFiles from "../../components/storage/RecentFiles";
import FolderList from "../../components/storage/FolderList";

export default function CloudStorage() {
  return (
    <>
      <PageMeta
        title="My Files | BoltStorage - Cloud Storage"
        description="Access and manage your files in BoltStorage"
      />
      
      <div className="space-y-6">
        <StorageHeader />
        <StorageStats />
        <FolderList />
        <RecentFiles />
      </div>
    </>
  );
}
