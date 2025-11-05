import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-950 dark:to-gray-900 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-brand-500/10 blur-3xl"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 dark:border-brand-500/20 dark:bg-brand-500/10">
            <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Trusted by 50,000+ users worldwide
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-title-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-title-xl lg:text-title-2xl">
            Store, Share & Sync
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-blue-light-600 bg-clip-text text-transparent">
              Files in the Cloud
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-8">
            Experience lightning-fast cloud storage with military-grade security. 
            Upload, organize, and share your files seamlessly across all devices.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-10">
            <Link 
              to="/signup" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-medium text-white shadow-theme-md transition hover:bg-brand-600 sm:w-auto lg:px-8"
            >
              <span>Start Free Trial</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 sm:w-auto lg:px-8">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-theme-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-500/20 to-blue-light-500/20 blur-2xl"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-xl dark:border-gray-800 dark:bg-gray-900">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-800">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-error-500"></div>
                  <div className="h-3 w-3 rounded-full bg-warning-500"></div>
                  <div className="h-3 w-3 rounded-full bg-success-500"></div>
                </div>
                <div className="ml-4 flex-1 rounded bg-white px-3 py-1 text-theme-xs text-gray-500 dark:bg-gray-900">
                  boltstorage.app/dashboard
                </div>
              </div>
              
              {/* Dashboard preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-800 dark:to-gray-900">
                <div className="grid h-full grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 space-y-2 rounded-lg bg-white p-4 dark:bg-gray-800">
                    <div className="h-3 w-3/4 rounded bg-brand-500"></div>
                    <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-9 space-y-4 rounded-lg bg-white p-4 dark:bg-gray-800">
                    <div className="h-4 w-1/3 rounded bg-gray-800 dark:bg-white"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-lg bg-brand-50 dark:bg-brand-500/10"></div>
                      <div className="h-16 rounded-lg bg-success-50 dark:bg-success-500/10"></div>
                      <div className="h-16 rounded-lg bg-orange-50 dark:bg-orange-500/10"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-2 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-2 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
