import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

export default function Settings() {
  const [autoSync, setAutoSync] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <>
      <PageMeta
        title="Settings | BoltStorage - Cloud Storage"
        description="Manage your storage settings and preferences"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-title-md font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Manage your account and storage preferences
          </p>
        </div>

        {/* Storage Quota */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Storage Quota
          </h2>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Current plan: Pro Plan
          </p>
          
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                487 GB of 1000 GB used
              </span>
              <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                Upgrade Plan
              </button>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
              <div className="h-full w-[48.7%] rounded-full bg-brand-500"></div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
              <p className="text-theme-xs text-gray-600 dark:text-gray-400">Files</p>
              <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">12,458</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
              <p className="text-theme-xs text-gray-600 dark:text-gray-400">Folders</p>
              <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">234</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
              <p className="text-theme-xs text-gray-600 dark:text-gray-400">Shared</p>
              <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">89</p>
            </div>
          </div>
        </div>

        {/* Sync Settings */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sync Settings
          </h2>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Configure automatic synchronization
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Auto-sync</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  Automatically sync files across devices
                </p>
              </div>
              <button
                onClick={() => setAutoSync(!autoSync)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  autoSync ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    autoSync ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Sync folder</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  C:\Users\YourName\BoltStorage
                </p>
              </div>
              <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                Change
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Bandwidth limit</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  Unlimited
                </p>
              </div>
              <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h2>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Manage how you receive notifications
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email notifications</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  Receive updates via email
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  notifications ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">File sharing updates</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Comments and mentions</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Storage limit alerts</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Security
          </h2>
          <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
            Keep your account secure
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Two-factor authentication</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  Add an extra layer of security
                </p>
              </div>
              <button
                onClick={() => setTwoFactor(!twoFactor)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  twoFactor ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    twoFactor ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Change password</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Active sessions</p>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                  3 devices currently logged in
                </p>
              </div>
              <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-error-200 bg-error-50 p-6 dark:border-error-500/20 dark:bg-error-500/10">
          <h2 className="text-lg font-semibold text-error-700 dark:text-error-400">
            Danger Zone
          </h2>
          <p className="mt-1 text-theme-sm text-error-600 dark:text-error-400/80">
            Irreversible actions
          </p>
          
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="font-medium text-error-700 dark:text-error-400">Delete account</p>
              <p className="text-theme-sm text-error-600 dark:text-error-400/80">
                Permanently delete your account and all data
              </p>
            </div>
            <button className="rounded-lg bg-error-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-error-600">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
