import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function TermsOfService() {
  return (
    <>
      <PageMeta
        title="Terms of Service - BoltStorage"
        description="Read our terms of service and user agreement."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-title-lg font-bold text-gray-900 dark:text-white sm:text-title-xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                By accessing and using BoltStorage, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                BoltStorage provides cloud storage services that allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Store and organize files in the cloud</li>
                <li>Share files with other users</li>
                <li>Access your files from multiple devices</li>
                <li>Collaborate with team members</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                To use BoltStorage, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Be at least 13 years old</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                You agree not to use BoltStorage to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious software or harmful content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for illegal file sharing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                5. Subscription and Payment
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                Paid subscriptions are billed in advance on a monthly or annual basis. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Provide current and accurate payment information</li>
                <li>Authorize automatic recurring charges</li>
                <li>Pay all applicable fees and taxes</li>
                <li>Accept that refunds are handled on a case-by-case basis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                6. Data and Content Ownership
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                You retain all rights to your content. By using BoltStorage, you grant us permission to store, 
                process, and transmit your content solely for the purpose of providing our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                7. Service Availability
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We may temporarily 
                suspend access for maintenance, upgrades, or emergency repairs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                8. Termination
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                We may terminate or suspend your account if you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Violate these Terms of Service</li>
                <li>Fail to pay applicable fees</li>
                <li>Engage in fraudulent activity</li>
                <li>Request account deletion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                BoltStorage is provided "as is" without warranties of any kind. We are not liable for any 
                indirect, incidental, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes via email or in-app notifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                11. Contact Information
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                For questions about these Terms of Service, contact us at{" "}
                <a href="mailto:legal@boltstorage.app" className="text-brand-500 hover:text-brand-600">
                  legal@boltstorage.app
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
