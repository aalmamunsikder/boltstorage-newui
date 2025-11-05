import { Link } from "react-router";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-5 text-center shadow-theme-lg`}
    >
      <div className="mb-3 flex justify-center">
        <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="mb-2 font-semibold text-white">
        Upgrade Storage
      </h3>
      <p className="mb-4 text-white/90 text-theme-sm">
        Get more space and unlock premium features for your files.
      </p>
      <Link
        to="/upgrade"
        className="flex items-center justify-center p-3 font-medium text-brand-600 bg-white rounded-lg text-theme-sm hover:bg-gray-50 transition"
      >
        View Plans
      </Link>
    </div>
  );
}
