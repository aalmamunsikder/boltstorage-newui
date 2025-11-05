export default function StorageStats() {
  const totalStorage = 1000; // GB
  const usedStorage = 487; // GB
  const usagePercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Storage Usage
          </h3>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
            {usedStorage} GB <span className="text-lg font-normal text-gray-500">of {totalStorage} GB</span>
          </p>
        </div>
        <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
          Upgrade
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div 
            className="h-full rounded-full bg-brand-500 transition-all"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <p className="mt-2 text-theme-xs text-gray-600 dark:text-gray-400">
          {usagePercentage.toFixed(1)}% used • {totalStorage - usedStorage} GB available
        </p>
      </div>
    </div>
  );
}
