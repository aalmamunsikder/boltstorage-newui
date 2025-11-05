import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy - BoltStorage"
        description="Learn how BoltStorage protects your privacy and handles your data."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-title-lg font-bold text-gray-900 dark:text-white sm:text-title-xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                We collect information you provide directly to us when you create an account, upload files, 
                or communicate with us. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Account information (name, email address, password)</li>
                <li>Files and content you upload to our service</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices, updates, and security alerts</li>
                <li>Respond to your comments and questions</li>
                <li>Detect, prevent, and address fraud and security issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                3. Data Security
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>AES-256 encryption for files at rest</li>
                <li>TLS/SSL encryption for data in transit</li>
                <li>Regular security audits and penetration testing</li>
                <li>Two-factor authentication options</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>With your consent or at your direction</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                5. Your Rights and Choices
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-base text-gray-700 dark:text-gray-300">
                <li>Access, update, or delete your personal information</li>
                <li>Export your data at any time</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your account and data</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                We retain your information for as long as your account is active or as needed to provide services. 
                After account deletion, we may retain certain information for legitimate business purposes or legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white mb-4">
                7. Contact Us
              </h2>
              <p className="text-theme-base text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
