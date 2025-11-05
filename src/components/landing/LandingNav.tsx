import { Link } from "react-router";
import { ThemeToggleButton } from "../common/ThemeToggleButton";
import Logo from "../common/Logo";

export default function LandingNav() {
  return (
    <nav className="sticky top-0 z-99999 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/">
            <Logo size="md" />
          </Link>

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
              className="hidden items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:inline-flex lg:px-5 lg:py-3"
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
