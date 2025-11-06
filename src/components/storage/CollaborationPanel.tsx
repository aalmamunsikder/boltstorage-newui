import { useState } from 'react';

interface ActivityLog {
  id: string;
  user: string;
  action: string;
  file: string;
  timestamp: string;
  avatar: string;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  avatar: string;
  status: 'online' | 'offline';
}

export default function CollaborationPanel() {
  const [activeTab, setActiveTab] = useState<'team' | 'activity'>('team');

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      role: 'Admin',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff',
      status: 'online'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@company.com',
      role: 'Editor',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff',
      status: 'online'
    },
    {
      id: '3',
      name: 'Emma Davis',
      email: 'emma@company.com',
      role: 'Viewer',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=3b82f6&color=fff',
      status: 'offline'
    }
  ];

  const activityLogs: ActivityLog[] = [
    {
      id: '1',
      user: 'Sarah Johnson',
      action: 'edited',
      file: 'Project Proposal.docx',
      timestamp: '2 minutes ago',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff'
    },
    {
      id: '2',
      user: 'Michael Chen',
      action: 'shared',
      file: 'Design Mockups.fig',
      timestamp: '15 minutes ago',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff'
    },
    {
      id: '3',
      user: 'Emma Davis',
      action: 'downloaded',
      file: 'Financial Report.pdf',
      timestamp: '1 hour ago',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=3b82f6&color=fff'
    },
    {
      id: '4',
      user: 'You',
      action: 'commented on',
      file: 'Marketing Strategy.pptx',
      timestamp: '3 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=You&background=10b981&color=fff'
    }
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Team Workspace
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Collaborate with your team in real-time
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 px-6 dark:border-gray-800">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('team')}
            className={`relative border-b-2 py-3 text-sm font-medium transition ${
              activeTab === 'team'
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Team Members
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`relative border-b-2 py-3 text-sm font-medium transition ${
              activeTab === 'activity'
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Activity Log
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'team' ? (
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <span
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900 ${
                        member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.email}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    member.role === 'Admin'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'
                      : member.role === 'Editor'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400'
                  }`}
                >
                  {member.role}
                </span>
              </div>
            ))}

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-3 text-sm font-medium text-gray-600 transition hover:border-brand-500 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-500 dark:hover:text-brand-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Invite Team Member
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {activityLogs.map((log) => (
              <div key={log.id} className="flex gap-3">
                <img
                  src={log.avatar}
                  alt={log.user}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{log.user}</span>{' '}
                    <span className="text-gray-600 dark:text-gray-400">{log.action}</span>{' '}
                    <span className="font-medium text-brand-500">{log.file}</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    {log.timestamp}
                  </p>
                </div>
              </div>
            ))}

            <button className="mt-4 w-full rounded-lg bg-gray-100 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              View Full History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
