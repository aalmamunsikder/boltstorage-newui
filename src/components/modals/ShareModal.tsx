import { useState, useEffect } from "react";
import { useToast } from "../common/Toast";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare?: (users: SharedUser[], linkEnabled: boolean) => void;
  item: {
    name: string;
    type: "file" | "folder";
  };
}

interface SharedUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  permission: "view" | "edit" | "owner";
}

export default function ShareModal({ isOpen, onClose, onShare, item }: ShareModalProps) {
  const [emailInput, setEmailInput] = useState("");
  const [permission, setPermission] = useState<"view" | "edit">("view");
  const [linkSharing, setLinkSharing] = useState(false);
  const { showToast } = useToast();
  const [sharedUsers, setSharedUsers] = useState<SharedUser[]>([
    {
      id: "1",
      name: "You",
      email: "you@example.com",
      permission: "owner"
    }
  ]);

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

  const handleShare = () => {
    if (!emailInput.trim()) return;
    
    const newUser: SharedUser = {
      id: Date.now().toString(),
      name: emailInput.split("@")[0],
      email: emailInput,
      permission: permission
    };
    
    setSharedUsers([...sharedUsers, newUser]);
    setEmailInput("");
    showToast(`Shared with ${newUser.email}`, "success");
  };

  const updatePermission = (userId: string, newPermission: "view" | "edit") => {
    setSharedUsers(sharedUsers.map(user => 
      user.id === userId ? { ...user, permission: newPermission } : user
    ));
    const user = sharedUsers.find(u => u.id === userId);
    if (user) {
      showToast(`Updated ${user.name}'s permission to ${newPermission}`, "success");
    }
  };

  const removeUser = (userId: string) => {
    const user = sharedUsers.find(u => u.id === userId);
    setSharedUsers(sharedUsers.filter(user => user.id !== userId));
    if (user) {
      showToast(`Removed ${user.name} from sharing`, "success");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://boltstorage.com/share/${item.name}`);
    showToast("Link copied to clipboard", "success");
  };

  const handleDone = () => {
    if (onShare) {
      onShare(sharedUsers, linkSharing);
    }
    showToast(
      `"${item.name}" is now shared with ${sharedUsers.length - 1} ${sharedUsers.length - 1 === 1 ? 'person' : 'people'}`,
      "success"
    );
    onClose();
  };

  const handleToggleLinkSharing = () => {
    const newState = !linkSharing;
    setLinkSharing(newState);
    showToast(
      newState ? "Link sharing enabled" : "Link sharing disabled",
      newState ? "success" : "info"
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-theme-xl dark:border-gray-800 dark:bg-gray-900 m-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/10">
              <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Share "{item.name}"
              </h2>
              <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                {item.type === "folder" ? "Folder" : "File"}
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
        <div className="p-6 space-y-6">
          {/* Add people */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Add people
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleShare()}
                placeholder="Enter email address"
                className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <select
                value={permission}
                onChange={(e) => setPermission(e.target.value as "view" | "edit")}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="view">Can view</option>
                <option value="edit">Can edit</option>
              </select>
              <button
                onClick={handleShare}
                disabled={!emailInput.trim()}
                className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Share
              </button>
            </div>
          </div>

          {/* People with access */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              People with access
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {sharedUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white font-semibold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {user.permission === "owner" ? (
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-theme-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">
                        Owner
                      </span>
                    ) : (
                      <>
                        <select
                          value={user.permission}
                          onChange={(e) => updatePermission(user.id, e.target.value as "view" | "edit")}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-900 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        >
                          <option value="view">Can view</option>
                          <option value="edit">Can edit</option>
                        </select>
                        <button
                          onClick={() => removeUser(user.id)}
                          className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link sharing */}
          <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Get link
                </h3>
                <p className="text-theme-xs text-gray-600 dark:text-gray-400">
                  Anyone with the link can {linkSharing ? "view" : "access (disabled)"}
                </p>
              </div>
              <button
                onClick={handleToggleLinkSharing}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  linkSharing ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    linkSharing ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            
            {linkSharing && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={`https://boltstorage.com/share/${item.name}`}
                  readOnly
                  className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-600 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                />
                <button
                  onClick={copyLink}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Copy link
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 p-6 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {sharedUsers.length - 1 === 0 ? "Not shared" : `Shared with ${sharedUsers.length - 1} ${sharedUsers.length - 1 === 1 ? 'person' : 'people'}`}
          </p>
          <button
            onClick={handleDone}
            className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
