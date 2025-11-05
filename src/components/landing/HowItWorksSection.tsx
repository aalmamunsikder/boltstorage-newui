const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up in seconds with your email or social account. No credit card required for the 14-day free trial.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Upload Your Files",
    description: "Drag and drop files or entire folders. Enjoy blazing-fast uploads with our parallel upload technology.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Organize & Share",
    description: "Create folders, add tags, and organize your files. Share with anyone using secure links with custom permissions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Access Anywhere",
    description: "Access your files from any device. Install our desktop and mobile apps for seamless sync across all platforms.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export default function HowItWorksSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-gray-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              How It Works
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg">
            Get started in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-5">
            Join BoltStorage and start storing your files securely in just four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop between items) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-brand-500 to-transparent lg:block"></div>
              )}

              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm transition hover:shadow-theme-md dark:border-gray-800 dark:bg-gray-900">
                {/* Large number watermark */}
                <div className="absolute right-4 top-4 text-6xl font-bold text-brand-100 dark:text-brand-500/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="relative z-10 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 text-theme-sm font-medium text-brand-500 hover:text-brand-600"
          >
            <span>Get started now for free</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
