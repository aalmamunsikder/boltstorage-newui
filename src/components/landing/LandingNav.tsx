import { Link } from "react-router";
import { ThemeToggleButton } from "../common/ThemeToggleButton";

export default function LandingNav() {
  return (
    <nav className="sticky top-0 z-99999 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8 text-brand-500 lg:h-9 lg:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
              BoltStorage
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-theme-sm font-medium text-gray-700 transition hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-400">
              Features
            </a>
            <a href="#pricing" className="text-theme-sm font-medium text-gray-700 transition hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-400">
              Pricing
            </a>
            <a href="#about" className="text-theme-sm font-medium text-gray-700 transition hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-400">
              About
            </a>
            <a href="#contact" className="text-theme-sm font-medium text-gray-700 transition hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-400">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggleButton />
            <Link 
              to="/signin" 
              className="hidden text-theme-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600 lg:px-5 lg:py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
