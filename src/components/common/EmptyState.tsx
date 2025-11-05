interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actions?: {
    label: string;
    onClick: () => void;
    primary?: boolean;
    icon?: React.ReactNode;
  }[];
}

export default function EmptyState({ icon, title, description, actions }: EmptyStateProps) {
  const defaultIcon = (
    <svg className="h-24 w-24 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );

  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="text-center">
        <div className="flex justify-center">
          {icon || defaultIcon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          {description}
        </p>
        
        {actions && actions.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  action.primary
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
