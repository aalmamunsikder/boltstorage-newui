import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";
import { Link } from "react-router";

export default function Demo() {
  const features = [
    {
      title: "Upload Files",
      description: "Drag and drop files or click to upload. Supports all file types.",
      video: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=500&fit=crop"
    },
    {
      title: "Organize with Folders",
      description: "Create folders and subfolders to keep your files organized.",
      video: "https://images.unsplash.com/photo-1544654803-b69140b285a1?w=800&h=500&fit=crop"
    },
    {
      title: "Share Securely",
      description: "Share files with custom permissions and expiration dates.",
      video: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
    },
    {
      title: "Access Anywhere",
      description: "Sync across all your devices - desktop, mobile, and web.",
      video: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
    }
  ];

  return (
    <>
      <PageMeta
        title="Watch Demo - BoltStorage"
        description="See BoltStorage in action with our interactive demo."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-title-lg font-bold text-white sm:text-title-xl lg:text-title-2xl">
                See BoltStorage in Action
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-theme-lg text-white/90">
                Discover how easy it is to store, share, and manage your files with BoltStorage. 
                Watch our interactive demo to see all features in action.
              </p>
            </div>
          </div>
        </div>

        {/* Main Demo Video */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-2xl dark:border-gray-800">
              <div className="aspect-video">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-500/20 to-blue-500/20">
                  <button className="group flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition hover:scale-110">
                    <svg className="h-10 w-10 translate-x-1 text-brand-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-700 bg-gray-800 px-6 py-4">
                <p className="text-sm text-white">
                  Full Product Demo • 3:45 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Demos */}
        <div className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Feature Highlights
              </h2>
              <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
                Explore key features one by one
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={feature.video} 
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
              Sign up now and get 14 days free trial with full access to all features.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-medium text-white shadow-md transition hover:bg-brand-600"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
        
        <LandingFooter />
      </div>
    </>
  );
}
