import { useState, createContext, useContext, ReactNode } from "react";
import { useSidebar } from "../../context/SidebarContext";

interface FavoritesSidebarContextType {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

const FavoritesSidebarContext = createContext<FavoritesSidebarContextType | undefined>(undefined);

export const useFavoritesSidebar = () => {
  const context = useContext(FavoritesSidebarContext);
  if (!context) {
    throw new Error("useFavoritesSidebar must be used within FavoritesSidebarProvider");
  }
  return context;
};

export const FavoritesSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Default to collapsed (icons only)

  return (
    <FavoritesSidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </FavoritesSidebarContext.Provider>
  );
};

interface FavoriteItem {
  id: string;
  name: string;
  type: "folder" | "file";
  icon?: string;
}

function FavoritesSidebar() {
  const { isExpanded: mainSidebarExpanded } = useSidebar();
  const { isExpanded } = useFavoritesSidebar();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    { id: "1", name: "Important Projects", type: "folder" },
    { id: "2", name: "Meeting Notes.pdf", type: "file" },
    { id: "3", name: "Budget 2024", type: "folder" },
  ]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetId) return;

    const draggedIndex = favorites.findIndex((item) => item.id === draggedItem);
    const targetIndex = favorites.findIndex((item) => item.id === targetId);

    const newFavorites = [...favorites];
    const [removed] = newFavorites.splice(draggedIndex, 1);
    newFavorites.splice(targetIndex, 0, removed);

    setFavorites(newFavorites);
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleRemove = (itemId: string) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  const getFileIcon = (type: "folder" | "file", fileName?: string) => {
    if (type === "folder") {
      return (
        <svg className="h-5 w-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    }

    // Determine file type by extension
    const extension = fileName?.split('.').pop()?.toLowerCase();
    if (extension === "pdf") {
      return (
        <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
        </svg>
      );
    }

    return (
      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  const mainSidebarWidth = mainSidebarExpanded ? 290 : 90;

  return (
    <div
      className={`fixed top-0 h-screen border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 z-40 hidden lg:block ${
        isExpanded ? "w-64" : "w-0"
      } overflow-hidden`}
      style={{ left: `${mainSidebarWidth}px` }}
    >
      {/* Content */}
      <div className="flex h-full flex-col p-4 pt-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Favorites
          </h3>
          <button
            className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            title="Add to favorites"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Info Text */}
        <p className="mb-4 text-theme-xs text-gray-500 dark:text-gray-400">
          Drag and drop to reorder your favorite items
        </p>

        {/* Favorites List */}
        <div className="flex-1 space-y-1 overflow-y-auto">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <svg className="mb-2 h-12 w-12 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                No favorites yet
              </p>
              <p className="mt-1 text-theme-xs text-gray-400 dark:text-gray-500">
                Star items to add them here
              </p>
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, item.id)}
                onDragEnd={handleDragEnd}
                className={`group flex cursor-move items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  draggedItem === item.id ? "opacity-50" : ""
                }`}
              >
                {/* Drag Handle */}
                <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>

                {/* Icon */}
                <div className="flex-shrink-0">
                  {getFileIcon(item.type, item.name)}
                </div>

                {/* Name */}
                <span className="flex-1 truncate text-theme-sm text-gray-700 dark:text-gray-300">
                  {item.name}
                </span>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex-shrink-0 opacity-0 transition group-hover:opacity-100"
                  title="Remove from favorites"
                >
                  <svg className="h-4 w-4 text-gray-400 hover:text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Add Button */}
        <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 py-2.5 text-theme-sm font-medium text-gray-600 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-500 dark:hover:bg-brand-500/10 dark:hover:text-brand-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Add Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoritesSidebar;
