import { Link } from "react-router";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "Forever",
    description: "Perfect for personal use and trying out BoltStorage",
    features: [
      "10 GB storage",
      "Basic file sharing",
      "Web & mobile access",
      "Email support",
      "2-factor authentication",
      "30-day version history"
    ],
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Best for professionals and power users",
    popular: true,
    features: [
      "1 TB storage",
      "Advanced sharing controls",
      "All platforms (Web, Mobile, Desktop)",
      "Priority support",
      "Unlimited file versioning",
      "Advanced security options",
      "Password-protected links",
      "Custom branding on shares"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Business",
    price: "$19.99",
    period: "per user/month",
    description: "For teams that need collaboration and control",
    features: [
      "Unlimited storage",
      "Team collaboration tools",
      "Admin dashboard & controls",
      "24/7 phone & chat support",
      "Advanced analytics & reporting",
      "Custom branding",
      "API access",
      "SSO & advanced security",
      "Dedicated account manager",
      "Service level agreement (SLA)"
    ],
    cta: "Contact Sales"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 dark:bg-gray-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Pricing
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-5">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-visible rounded-2xl ${
                plan.popular
                  ? "border-2 border-brand-500 bg-white shadow-theme-lg dark:bg-gray-900"
                  : "border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-gray-900"
              } p-6 lg:p-8`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-theme-xs font-medium text-white shadow-theme-sm">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-theme-sm text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features list */}
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-theme-sm text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                to="/signup"
                className={`mt-8 block w-full rounded-lg py-3.5 text-center text-sm font-medium transition ${
                  plan.popular
                    ? "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-theme-sm text-gray-600 dark:text-gray-400">
            All plans include SSL encryption, 2-factor authentication, and 99.99% uptime guarantee.
          </p>
          <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
            Need a custom plan?{" "}
            <a href="#contact" className="font-medium text-brand-500 hover:text-brand-600">
              Contact our sales team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
