import { useState } from 'react';

interface ShareLink {
  id: string;
  fileName: string;
  url: string;
  accessType: 'Public' | 'Private' | 'Team';
  expiration: string;
  downloads: number;
  watermark: boolean;
}

export default function SmartSharing() {
  const [showCreateLink, setShowCreateLink] = useState(false);

  const shareLinks: ShareLink[] = [
    {
      id: '1',
      fileName: 'Project Proposal.docx',
      url: 'https://bolt.st/abc123',
      accessType: 'Team',
      expiration: '7 days',
      downloads: 12,
      watermark: true
    },
    {
      id: '2',
      fileName: 'Design Mockups.fig',
      url: 'https://bolt.st/xyz789',
      accessType: 'Public',
      expiration: '30 days',
      downloads: 45,
      watermark: false
    },
    {
      id: '3',
      fileName: 'Financial Report.pdf',
      url: 'https://bolt.st/fin456',
      accessType: 'Private',
      expiration: 'No expiration',
      downloads: 3,
      watermark: true
    }
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Smart Sharing
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Share files securely with advanced controls
          </p>
        </div>
        <button
          onClick={() => setShowCreateLink(!showCreateLink)}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Share Link
        </button>
      </div>

      {/* Create Link Form */}
      {showCreateLink && (
        <div className="border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/50">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Select File
              </label>
              <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                <option>Project Proposal.docx</option>
                <option>Design Mockups.fig</option>
                <option>Financial Report.pdf</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Access Type
                </label>
                <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Team Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Expiration
                </label>
                <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                  <option>7 days</option>
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>No expiration</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="watermark"
                className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
              />
              <label htmlFor="watermark" className="text-sm text-gray-700 dark:text-gray-300">
                Add dynamic watermark to shared files
              </label>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600">
                Generate Link
              </button>
              <button
                onClick={() => setShowCreateLink(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Links List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {shareLinks.map((link) => (
          <div key={link.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {link.fileName}
                  </h4>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      link.accessType === 'Public'
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                        : link.accessType === 'Team'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'
                    }`}
                  >
                    {link.accessType}
                  </span>
                  {link.watermark && (
                    <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      Watermarked
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {link.downloads} downloads
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Expires in {link.expiration}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    value={link.url}
                    readOnly
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  />
                  <button className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    Copy
                  </button>
                </div>
              </div>
              <button className="ml-4 text-gray-400 hover:text-red-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
