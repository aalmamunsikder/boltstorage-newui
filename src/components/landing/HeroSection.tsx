import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-950 dark:to-gray-900 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-pulse">
          <div className="h-[600px] w-[600px] rounded-full bg-brand-500/10 blur-3xl"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 dark:border-brand-500/20 dark:bg-brand-500/10 animate-fade-in-down">
            <svg className="h-4 w-4 text-brand-500 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Trusted by 50,000+ users worldwide
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-title-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-title-xl lg:text-title-2xl animate-fade-in-up animation-delay-100">
            Store, Share & Sync
            <br />
            <span className="text-brand-500">
              Files in the Cloud
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-8 animate-fade-in-up animation-delay-200">
            Experience lightning-fast cloud storage with military-grade security. 
            Upload, organize, and share your files seamlessly across all devices.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-10 animate-fade-in-up animation-delay-300">
            <Link 
              to="/signup" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-medium text-white shadow-theme-md transition-all duration-300 hover:bg-brand-600 hover:scale-105 hover:shadow-theme-lg sm:w-auto lg:px-8"
            >
              <span>Start Free Trial</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a 
              href="/demo" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-theme-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 sm:w-auto lg:px-8"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-theme-sm text-gray-500 dark:text-gray-400 animate-fade-in-up animation-delay-400">
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
        <div className="mt-16 lg:mt-20 animate-fade-in-up animation-delay-500">
          <div className="relative mx-auto max-w-6xl group">
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-500/20 to-blue-light-500/20 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 transition-transform duration-500 hover:scale-[1.02]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-800/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-error-500"></div>
                  <div className="h-3 w-3 rounded-full bg-warning-500"></div>
                  <div className="h-3 w-3 rounded-full bg-success-500"></div>
                </div>
                <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1.5 text-theme-xs text-gray-500 dark:bg-gray-900/50">
                  boltstorage.app/dashboard
                </div>
              </div>
              
              {/* Dashboard Content - Matching Real UI */}
              <div className="bg-gray-50 p-6 dark:bg-gray-900/50 lg:p-8">
                  {/* Storage Stats Card */}
                  <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Storage Usage
                      </h3>
                      <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                        487 GB <span className="text-lg font-normal text-gray-500">of 1000 GB</span>
                      </p>
                    </div>
                    <button className="text-sm font-medium text-brand-500 hover:text-brand-600">
                      Upgrade
                    </button>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                      <div className="h-full w-[48.7%] rounded-full bg-brand-500"></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                      48.7% used • 513 GB available
                    </p>
                  </div>
                  </div>

                  {/* Files Grid */}
                  <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Recent Files
                    </h3>
                    <div className="flex gap-2">
                      <div className="rounded-lg bg-gray-200 px-3 py-1.5 dark:bg-gray-800">
                        <div className="h-4 w-4 rounded bg-brand-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* File Cards Grid */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {/* File Card 1 - Folder */}
                    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-brand-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-500">
                      <div className="mb-3 flex items-center justify-center rounded-lg bg-brand-50 p-4 dark:bg-brand-500/10">
                        <svg className="h-8 w-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Projects
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        24 files
                      </p>
                    </div>

                    {/* File Card 2 - Image */}
                    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-brand-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-500">
                      <div className="mb-3 flex items-center justify-center rounded-lg bg-success-50 p-4 dark:bg-success-500/10">
                        <svg className="h-8 w-8 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Design.jpg
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        2.4 MB
                      </p>
                    </div>

                    {/* File Card 3 - Document */}
                    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-brand-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-500">
                      <div className="mb-3 flex items-center justify-center rounded-lg bg-blue-50 p-4 dark:bg-blue-500/10">
                        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Report.pdf
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        1.8 MB
                      </p>
                    </div>

                    {/* File Card 4 - Video */}
                    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-brand-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-500">
                      <div className="mb-3 flex items-center justify-center rounded-lg bg-purple-50 p-4 dark:bg-purple-500/10">
                        <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Tutorial.mp4
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        45.2 MB
                      </p>
                    </div>
                    </div>
                    
                    {/* File List View */}
                    <div className="mt-6">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                      All Files
                    </h3>
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      {/* List Header */}
                      <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                        <div className="col-span-6">Name</div>
                        <div className="col-span-3">Modified</div>
                        <div className="col-span-3 text-right">Size</div>
                      </div>
                      
                      {/* List Items */}
                      <div className="divide-y divide-gray-200 dark:divide-gray-800">
                        {/* File Row 1 */}
                        <div className="grid grid-cols-12 gap-4 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <div className="col-span-6 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                              <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <span className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Presentation.pptx
                            </span>
                          </div>
                          <div className="col-span-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
                            2 hours ago
                          </div>
                          <div className="col-span-3 flex items-center justify-end text-sm text-gray-600 dark:text-gray-400">
                            12.4 MB
                          </div>
                        </div>
                        
                        {/* File Row 2 */}
                        <div className="grid grid-cols-12 gap-4 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <div className="col-span-6 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-50 dark:bg-success-500/10">
                              <svg className="h-4 w-4 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Vacation-Photo.jpg
                            </span>
                          </div>
                          <div className="col-span-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
                            Yesterday
                          </div>
                          <div className="col-span-3 flex items-center justify-end text-sm text-gray-600 dark:text-gray-400">
                            5.2 MB
                          </div>
                        </div>
                        
                        {/* File Row 3 */}
                        <div className="grid grid-cols-12 gap-4 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <div className="col-span-6 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-500/10">
                              <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Budget-2024.xlsx
                            </span>
                          </div>
                          <div className="col-span-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
                            3 days ago
                          </div>
                          <div className="col-span-3 flex items-center justify-end text-sm text-gray-600 dark:text-gray-400">
                            892 KB
                          </div>
                        </div>
                      </div>
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
