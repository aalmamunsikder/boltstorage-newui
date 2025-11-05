import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning Fast Uploads",
    description: "Upload files at blazing speeds with our optimized infrastructure. Support for files up to 5GB with parallel uploads."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Military-Grade Security",
    description: "Your files are encrypted end-to-end with AES-256 encryption. Zero-knowledge architecture ensures complete privacy."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Smart File Sharing",
    description: "Share files and folders with custom permissions, password protection, and expiration dates. Track downloads in real-time."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Automatic Backup",
    description: "Never lose your files again. Automated backups run continuously across multiple data centers with 99.99% uptime."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Smart Search",
    description: "Find any file instantly with AI-powered search. Search by content, tags, date, or even objects within images."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cross-Platform Sync",
    description: "Access your files from anywhere. Native apps for Windows, Mac, Linux, iOS, and Android with real-time sync."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Version History",
    description: "Access previous versions of your files for up to 30 days. Restore or download any version with a single click."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Work together seamlessly. Real-time collaboration, comments, and shared workspaces for your entire team."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "File Preview",
    description: "Preview over 200 file types directly in your browser. No need to download files to view documents, images, or videos."
  }
];

export default function FeaturesSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 sm:py-24 lg:py-28" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10 animate-fade-in-down">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Features
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg animate-fade-in-up animation-delay-100">
            Everything you need for cloud storage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-5 animate-fade-in-up animation-delay-200">
            Powerful features designed to make file management effortless and secure.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm transition-all duration-500 hover:shadow-theme-lg hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-900 lg:p-8 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-brand-500/5 opacity-0 transition group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <p className="text-theme-sm text-gray-600 dark:text-gray-400">
            Want to see more?{" "}
            <a href="#" className="font-medium text-brand-500 hover:text-brand-600">
              Explore all features →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
