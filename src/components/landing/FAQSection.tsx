import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is BoltStorage and how does it work?",
    answer: "BoltStorage is a cloud storage platform that lets you securely store, sync, and share your files across all devices. Simply upload your files and access them from anywhere."
  },
  {
    question: "How secure is my data?",
    answer: "We use AES-256 encryption for all files at rest and in transit. Your data is stored across multiple secure data centers with automatic backups, 2FA, and GDPR compliance."
  },
  {
    question: "Can I share files with non-users?",
    answer: "Yes! You can create shareable links that work for anyone. Set custom permissions, add password protection, and set expiration dates for shared links."
  },
  {
    question: "What file types are supported?",
    answer: "BoltStorage supports all file types with no restrictions. You can preview over 200 file formats directly in your browser."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial of our Pro plan with no credit card required. Full access to all Pro features including 1TB storage."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Cancel anytime from your account settings. Your data remains accessible until the end of your billing period."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20 lg:py-24" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10 animate-fade-in-down">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              FAQ
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg animate-fade-in-up animation-delay-100">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-base text-gray-600 dark:text-gray-400 lg:mt-5 animate-fade-in-up animation-delay-200">
            Everything you need to know about BoltStorage. Can't find what you're looking for?{" "}
            <a href="mailto:support@boltstorage.app" className="font-medium text-brand-500 hover:text-brand-600">
              Contact our support team
            </a>
            .
          </p>
        </div>

        {/* FAQ items */}
        <div className="mx-auto mt-10 max-w-3xl lg:mt-12">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 dark:border-gray-800 dark:bg-gray-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50 lg:p-6"
                >
                  <span className="pr-4 text-base font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-gray-200 p-5 dark:border-gray-800 lg:p-6">
                    <p className="text-theme-sm text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-theme-sm text-gray-600 dark:text-gray-400">
            Still have questions?{" "}
            <a href="mailto:support@boltstorage.app" className="font-medium text-brand-500 hover:text-brand-600">
              Get in touch with our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
