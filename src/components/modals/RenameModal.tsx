import { useState, useEffect, useRef } from "react";

interface RenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newName: string) => void;
  currentName: string;
  itemType: "file" | "folder";
}

export default function RenameModal({ 
  isOpen, 
  onClose, 
  onRename, 
  currentName,
  itemType 
}: RenameModalProps) {
  const [newName, setNewName] = useState(currentName);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setNewName(currentName);
      setError("");
      
      // Focus input and select name (without extension for files)
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          
          if (itemType === "file") {
            // Select filename without extension
            const lastDotIndex = currentName.lastIndexOf(".");
            if (lastDotIndex > 0) {
              inputRef.current.setSelectionRange(0, lastDotIndex);
            } else {
              inputRef.current.select();
            }
          } else {
            inputRef.current.select();
          }
        }
      }, 100);
    }
  }, [isOpen, currentName, itemType]);

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

  const validateName = (name: string): string => {
    if (!name.trim()) {
      return "Name cannot be empty";
    }

    // Check for invalid characters
    const invalidChars = /[<>:"/\\|?*]/;
    if (invalidChars.test(name)) {
      return "Name contains invalid characters: < > : \" / \\ | ? *";
    }

    // Check for reserved names (Windows)
    const reservedNames = ["CON", "PRN", "AUX", "NUL", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9"];
    const nameWithoutExt = name.split(".")[0].toUpperCase();
    if (reservedNames.includes(nameWithoutExt)) {
      return "This name is reserved by the system";
    }

    // Check length
    if (name.length > 255) {
      return "Name is too long (maximum 255 characters)";
    }

    return "";
  };

  const handleRename = () => {
    const validationError = validateName(newName);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (newName === currentName) {
      onClose();
      return;
    }

    onRename(newName);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRename();
    }
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
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-theme-xl dark:border-gray-800 dark:bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/10">
              <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Rename {itemType}
              </h2>
              <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                Enter a new name for this {itemType}
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {itemType === "file" ? "File name" : "Folder name"}
            </label>
            <input
              ref={inputRef}
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              className={`w-full rounded-lg border ${
                error 
                  ? "border-error-500 focus:border-error-500 focus:ring-error-500/20" 
                  : "border-gray-200 focus:border-brand-500 focus:ring-brand-500/20 dark:border-gray-700"
              } bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white`}
              placeholder={`Enter ${itemType} name`}
            />
            {error && (
              <p className="mt-2 flex items-center gap-1 text-sm text-error-600 dark:text-error-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </p>
            )}
          </div>

          {/* Guidelines */}
          <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Naming guidelines:
            </p>
            <ul className="space-y-1 text-theme-xs text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Cannot contain: &lt; &gt; : " / \ | ? *</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Maximum 255 characters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Cannot use reserved system names</span>
              </li>
            </ul>
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
            onClick={handleRename}
            disabled={!newName.trim() || !!error}
            className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  );
}
