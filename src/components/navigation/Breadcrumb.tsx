import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

export interface BreadcrumbItem {
  id: string;
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  maxItems?: number;
}

export default function Breadcrumb({ items, maxItems = 4 }: BreadcrumbProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  if (items.length === 0) return null;

  // If items exceed maxItems, show collapsed version
  const shouldCollapse = items.length > maxItems;
  const visibleItems = shouldCollapse 
    ? [items[0], ...items.slice(-(maxItems - 2))]
    : items;
  const hiddenItems = shouldCollapse 
    ? items.slice(1, -(maxItems - 2))
    : [];

  return (
    <nav className="flex items-center space-x-1 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {/* Home/Root */}
        <li>
          <Link
            to={items[0].path}
            className="flex items-center text-gray-600 transition hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="ml-2">{items[0].label}</span>
          </Link>
        </li>

        {/* Collapsed items dropdown */}
        {shouldCollapse && hiddenItems.length > 0 && (
          <li className="flex items-center">
            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <div className="relative ml-1" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center rounded px-2 py-1 text-gray-600 transition hover:bg-gray-100 hover:text-brand-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-brand-400"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white shadow-theme-lg dark:border-gray-700 dark:bg-gray-800">
                  <div className="py-1">
                    {hiddenItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        )}

        {/* Visible items */}
        {visibleItems.slice(1).map((item, index) => {
          const isLast = index === visibleItems.length - 2;
          
          return (
            <li key={item.id} className="flex items-center">
              <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              {isLast ? (
                <span className="ml-1 font-medium text-gray-900 dark:text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="ml-1 text-gray-600 transition hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Hook for managing breadcrumb state
export function useBreadcrumb() {
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { id: "root", label: "My Files", path: "/dashboard" }
  ]);

  const addBreadcrumb = (item: BreadcrumbItem) => {
    setBreadcrumbItems(prev => [...prev, item]);
  };

  const navigateTo = (itemId: string) => {
    const index = breadcrumbItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      setBreadcrumbItems(breadcrumbItems.slice(0, index + 1));
    }
  };

  const resetBreadcrumb = () => {
    setBreadcrumbItems([{ id: "root", label: "My Files", path: "/dashboard" }]);
  };

  return {
    breadcrumbItems,
    addBreadcrumb,
    navigateTo,
    resetBreadcrumb
  };
}
