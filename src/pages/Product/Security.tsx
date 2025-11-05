import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function Security() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "AES-256 Encryption",
      description: "All files are encrypted with military-grade AES-256 encryption at rest and in transit."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA using authenticator apps or SMS."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Secure Data Centers",
      description: "Your data is stored in geographically distributed, SOC 2 Type II certified data centers."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Privacy Controls",
      description: "Full control over who can access your files with granular sharing permissions."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Audit Logs",
      description: "Track all activity on your account with detailed audit logs and access history."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Version History",
      description: "Restore previous versions of files if they're accidentally modified or deleted."
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Annual security audits" },
    { name: "GDPR Compliant", description: "EU data protection standards" },
    { name: "HIPAA Ready", description: "Healthcare data security" },
    { name: "ISO 27001", description: "Information security management" }
  ];

  return (
    <>
      <PageMeta
        title="Security - BoltStorage"
        description="Learn how BoltStorage keeps your data secure with enterprise-grade encryption and security features."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-title-lg font-bold text-white sm:text-title-xl lg:text-title-2xl">
                Your data is safe with us
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-theme-lg text-white/90">
                BoltStorage uses enterprise-grade security to protect your files, with encryption, 
                compliance certifications, and industry best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Security Features
              </h2>
              <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
                Multiple layers of protection for your data
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="inline-flex rounded-xl bg-brand-500 p-3 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Certifications & Compliance
              </h2>
              <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
                We meet the highest industry standards
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-2xl border-2 border-brand-500 bg-white p-8 dark:bg-gray-900">
                    <h3 className="text-lg font-bold text-brand-500">
                      {cert.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-theme-sm text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
              Questions about security?
            </h2>
            <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
              Our security team is here to answer any questions you may have.
            </p>
            <div className="mt-8">
              <a
                href="mailto:security@boltstorage.app"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-brand-600"
              >
                Contact Security Team
              </a>
            </div>
          </div>
        </div>
        
        <LandingFooter />
      </div>
    </>
  );
}
