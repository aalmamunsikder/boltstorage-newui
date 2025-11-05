import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function CookiePolicy() {
  return (
    <>
      <PageMeta title="Cookie Policy - BoltStorage" description="Learn about how BoltStorage uses cookies" />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <h1 className="text-title-lg font-bold text-gray-900 dark:text-white sm:text-title-xl">Cookie Policy</h1>
            <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Help us improve our service by collecting usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">Managing Cookies</h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Manage Website Data</li>
                <li>Edge: Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                We may use third-party services that place cookies on your device for analytics and advertising purposes. These third parties have their own privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                If you have questions about our Cookie Policy, contact us at{" "}
                <a href="mailto:privacy@boltstorage.app" className="text-brand-500 hover:text-brand-600">
                  privacy@boltstorage.app
                </a>
              </p>
            </section>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
}
