import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function Careers() {
  const positions = [
    { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Designer", department: "Design", location: "San Francisco, CA", type: "Full-time" },
    { title: "Customer Success Manager", department: "Support", location: "Remote", type: "Full-time" },
    { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Marketing Manager", department: "Marketing", location: "New York, NY", type: "Full-time" },
    { title: "Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time" }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Top of market compensation" },
    { icon: "🏥", title: "Health Insurance", description: "Medical, dental, and vision" },
    { icon: "🏖️", title: "Unlimited PTO", description: "Take time when you need it" },
    { icon: "💻", title: "Remote Work", description: "Work from anywhere" },
    { icon: "📚", title: "Learning Budget", description: "$2000/year for courses" },
    { icon: "🚀", title: "Stock Options", description: "Equity in our success" }
  ];

  return (
    <>
      <PageMeta title="Careers - BoltStorage" description="Join the BoltStorage team" />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-title-lg font-bold text-white sm:text-title-xl">Join Our Team</h1>
            <p className="mt-6 text-theme-lg text-white/90">Help us build the future of cloud storage</p>
          </div>
        </div>

        <div className="py-16 bg-gray-50 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">Benefits & Perks</h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-4xl">{benefit.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">Open Positions</h2>
            <div className="mt-12 space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                    <div className="mt-2 flex gap-4 text-theme-sm text-gray-600 dark:text-gray-400">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-brand-600">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
}
