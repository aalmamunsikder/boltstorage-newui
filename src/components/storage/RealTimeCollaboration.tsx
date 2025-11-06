import { useState } from 'react';

interface Comment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
}

interface Version {
  id: string;
  version: string;
  user: string;
  timestamp: string;
  size: string;
}

export default function RealTimeCollaboration() {
  const [activeFile] = useState('Project Proposal.docx');
  const [newComment, setNewComment] = useState('');

  const activeUsers = [
    { name: 'Sarah Johnson', avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff' },
    { name: 'Michael Chen', avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=10b981&color=fff' },
    { name: 'You', avatar: 'https://ui-avatars.com/api/?name=You&background=f59e0b&color=fff' }
  ];

  const comments: Comment[] = [
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff',
      text: 'Can we update the budget section with the latest numbers?',
      timestamp: '5 mins ago'
    },
    {
      id: '2',
      user: 'You',
      avatar: 'https://ui-avatars.com/api/?name=You&background=f59e0b&color=fff',
      text: 'Sure, I\'ll update it now.',
      timestamp: '2 mins ago'
    }
  ];

  const versions: Version[] = [
    {
      id: '1',
      version: 'v3.0',
      user: 'You',
      timestamp: '2 mins ago',
      size: '2.4 MB'
    },
    {
      id: '2',
      version: 'v2.1',
      user: 'Sarah Johnson',
      timestamp: '1 hour ago',
      size: '2.3 MB'
    },
    {
      id: '3',
      version: 'v2.0',
      user: 'Michael Chen',
      timestamp: '3 hours ago',
      size: '2.1 MB'
    }
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Real-Time Collaboration
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {activeFile}
            </p>
          </div>
          <div className="flex -space-x-2">
            {activeUsers.map((user, index) => (
              <img
                key={index}
                src={user.avatar}
                alt={user.name}
                title={user.name}
                className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-900"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Live Editing Status */}
      <div className="border-b border-gray-200 bg-green-50 px-6 py-3 dark:border-gray-800 dark:bg-green-500/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            Sarah Johnson is editing this document
          </p>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="grid grid-cols-2">
        {/* Comments Section */}
        <div className="border-r border-gray-200 dark:border-gray-800">
          <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-800">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Comments
            </h4>
          </div>
          <div className="space-y-4 p-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="h-8 w-8 rounded-full"
                />
                <div className="flex-1">
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                    <p className="text-xs font-medium text-gray-900 dark:text-white">
                      {comment.user}
                    </p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {comment.text}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    {comment.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {/* Add Comment */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Version History Section */}
        <div>
          <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-800">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Version History
            </h4>
          </div>
          <div className="space-y-2 p-4">
            {versions.map((version) => (
              <div
                key={version.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {version.version}
                    </span>
                    {version.id === '1' && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    {version.user} • {version.timestamp}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {version.size}
                  </p>
                </div>
                <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                  Restore
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
