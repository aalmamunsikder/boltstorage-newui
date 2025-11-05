import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    storage: "15 GB",
    description: "Perfect for personal use",
    features: [
      "15 GB storage",
      "File sharing",
      "Basic collaboration",
      "Mobile access",
      "Email support"
    ],
    popular: false,
    cta: "Current Plan"
  },
  {
    id: "pro",
    name: "Pro",
    price: 9.99,
    storage: "1 TB",
    description: "For professionals and power users",
    features: [
      "1 TB storage (1000 GB)",
      "Priority upload speeds",
      "Advanced sharing controls",
      "Version history (30 days)",
      "Priority support",
      "Offline access",
      "Advanced security"
    ],
    popular: true,
    cta: "Upgrade to Pro"
  },
  {
    id: "business",
    name: "Business",
    price: 19.99,
    storage: "Unlimited",
    description: "For teams and organizations",
    features: [
      "Unlimited storage",
      "Team collaboration tools",
      "Admin controls",
      "Version history (unlimited)",
      "24/7 priority support",
      "Advanced analytics",
      "Custom branding",
      "API access"
    ],
    popular: false,
    cta: "Upgrade to Business"
  }
];

export default function Upgrade() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const currentPlan = "free";

  return (
    <>
      <PageMeta
        title="Upgrade Storage | BoltStorage - Cloud Storage"
        description="Choose the perfect plan for your storage needs"
      />
      
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 dark:bg-brand-500/10 mb-4">
            <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-brand-700 dark:text-brand-400">
              Lightning Fast Storage
            </span>
          </div>
          <h1 className="text-title-lg font-bold text-gray-900 dark:text-white">
            Upgrade Your Storage
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get more space, better features, and premium support with BoltStorage
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${
              billingCycle === "yearly" ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                billingCycle === "yearly" ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <span className="rounded-full bg-success-100 px-2.5 py-1 text-xs font-medium text-success-700 dark:bg-success-500/10 dark:text-success-400">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const yearlyPrice = plan.price * 12 * 0.8; // 20% discount
            const displayPrice = billingCycle === "yearly" ? yearlyPrice / 12 : plan.price;
            const isCurrentPlan = plan.id === currentPlan;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-visible rounded-2xl ${
                  plan.popular
                    ? "border-2 border-brand-500 bg-white shadow-theme-lg dark:bg-gray-900"
                    : "border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900"
                } p-6 lg:p-8`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-medium text-white shadow-theme-sm">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${displayPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  {billingCycle === "yearly" && plan.price > 0 && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Billed ${yearlyPrice.toFixed(2)} yearly
                    </p>
                  )}
                  <p className="mt-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                    {plan.storage} storage
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  disabled={isCurrentPlan}
                  className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
                    plan.popular
                      ? "bg-brand-500 text-white hover:bg-brand-600 disabled:bg-gray-200 disabled:text-gray-500 dark:disabled:bg-gray-800 dark:disabled:text-gray-600"
                      : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:bg-gray-800 dark:disabled:text-gray-600"
                  } disabled:cursor-not-allowed`}
                >
                  {isCurrentPlan ? "Current Plan" : plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="pb-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="pb-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="py-4 text-sm text-gray-700 dark:text-gray-300">Storage Space</td>
                  <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">15 GB</td>
                  <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">1 TB</td>
                  <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-700 dark:text-gray-300">File Sharing</td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-700 dark:text-gray-300">Version History</td>
                  <td className="py-4 text-center text-sm text-gray-400">-</td>
                  <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">30 days</td>
                  <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-700 dark:text-gray-300">Priority Support</td>
                  <td className="py-4 text-center text-sm text-gray-400">-</td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-700 dark:text-gray-300">Team Collaboration</td>
                  <td className="py-4 text-center text-sm text-gray-400">-</td>
                  <td className="py-4 text-center text-sm text-gray-400">-</td>
                  <td className="py-4 text-center">
                    <svg className="mx-auto h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I change plans at any time?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                What happens to my files if I downgrade?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your files remain safe and accessible. If you exceed the storage limit of your new plan, you won't be able to upload new files until you free up space or upgrade again.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
