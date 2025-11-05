import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function Status() {
  const services = [
    { name: "API", status: "operational", uptime: "99.99%" },
    { name: "Web Application", status: "operational", uptime: "99.98%" },
    { name: "File Upload", status: "operational", uptime: "99.97%" },
    { name: "File Download", status: "operational", uptime: "99.99%" },
    { name: "Mobile Apps", status: "operational", uptime: "99.96%" },
    { name: "Desktop Apps", status: "operational", uptime: "99.95%" }
  ];

  const incidents = [
    { date: "Jan 10, 2025", title: "Resolved: Brief API slowdown", status: "Resolved", duration: "15 minutes" },
    { date: "Dec 28, 2024", title: "Scheduled maintenance completed", status: "Completed", duration: "2 hours" },
    { date: "Dec 15, 2024", title: "Resolved: Upload service degradation", status: "Resolved", duration: "30 minutes" }
  ];

  return (
    <>
      <PageMeta title="System Status - BoltStorage" description="Check the current status of BoltStorage services" />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-title-lg font-bold text-white">System Status</h1>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-success-500 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className="text-sm font-medium text-white">All Systems Operational</span>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-title-sm font-bold text-gray-900 dark:text-white">Current Status</h2>
            <div className="mt-8 space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-success-500"></div>
                    <span className="font-medium text-gray-900 dark:text-white">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-theme-sm text-gray-600 dark:text-gray-400">
                    <span>{service.uptime} uptime</span>
                    <span className="text-success-500">Operational</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-16 text-title-sm font-bold text-gray-900 dark:text-white">Recent Incidents</h2>
            <div className="mt-8 space-y-4">
              {incidents.map((incident, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{incident.title}</h3>
                      <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">{incident.date} • {incident.duration}</p>
                    </div>
                    <span className="rounded-full bg-success-100 px-3 py-1 text-theme-xs font-medium text-success-700 dark:bg-success-900/20 dark:text-success-400">
                      {incident.status}
                    </span>
                  </div>
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
