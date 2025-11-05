import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const searchResults = [
  {
    id: "1",
    name: "Marketing_Plan_2024.pdf",
    type: "PDF",
    size: "3.2 MB",
    location: "Marketing / Plans",
    modified: "2 days ago",
    matches: ["marketing", "2024", "plan"]
  },
  {
    id: "2",
    name: "Marketing Team Photos",
    type: "folder",
    items: 45,
    location: "Photos",
    modified: "Last week",
    matches: ["marketing"]
  },
  {
    id: "3",
    name: "Q4_Marketing_Budget.xlsx",
    type: "Excel",
    size: "1.8 MB",
    location: "Finance / Q4",
    modified: "3 weeks ago",
    matches: ["marketing", "budget"]
  }
];

export default function Search() {
  const [searchQuery] = useState("marketing");
  const [filter, setFilter] = useState("all");

  return (
    <>
      <PageMeta
        title={`Search: ${searchQuery} | BoltStorage`}
        description="Search results"
      />
      
      <div className="space-y-6">
        {/* Search Header */}
        <div>
          <div className="flex items-center gap-2 text-theme-sm text-gray-600 dark:text-gray-400">
            <span>Search results for</span>
            <span className="font-semibold text-gray-900 dark:text-white">"{searchQuery}"</span>
          </div>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Found {searchResults.length} results
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "all"
                ? "bg-brand-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("files")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "files"
                ? "bg-brand-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Files
          </button>
          <button
            onClick={() => setFilter("folders")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === "folders"
                ? "bg-brand-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Folders
          </button>
          
          <div className="ml-auto flex items-center gap-2">
            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-brand-500 focus:outline-hidden dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <option>Last modified</option>
              <option>Name</option>
              <option>Size</option>
              <option>Type</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="group flex items-center gap-4 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  {result.type === "folder" ? (
                    <svg className="h-5 w-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <h3 className="truncate font-medium text-gray-900 dark:text-white">
                    {result.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-theme-sm text-gray-600 dark:text-gray-400">
                    <span>{result.location}</span>
                    <span>•</span>
                    <span>{result.type === "folder" ? `${result.items} items` : result.size}</span>
                    <span>•</span>
                    <span>{result.modified}</span>
                  </div>
                  {/* Match highlights */}
                  <div className="mt-1 flex flex-wrap gap-1">
                    {result.matches.map((match, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-warning-100 px-2 py-0.5 text-theme-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400"
                      >
                        {match}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center gap-2 opacity-0 transition group-hover:opacity-100">
                  <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
