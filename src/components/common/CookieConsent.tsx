import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-99999 animate-fade-in-up">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  We use cookies
                </h3>
                <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.{" "}
                  <a href="/cookies" className="font-medium text-brand-500 hover:text-brand-600">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col gap-3 sm:ml-6 sm:mt-0 sm:flex-row sm:flex-shrink-0">
            <button
              onClick={handleDecline}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-brand-600"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
