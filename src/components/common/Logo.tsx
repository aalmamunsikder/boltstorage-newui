interface LogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  variant = 'default', 
  size = 'md', 
  showText = true,
  className = '' 
}: LogoProps) {
  const sizes = {
    sm: { icon: 'h-6 w-6', text: 'text-lg' },
    md: { icon: 'h-8 w-8', text: 'text-xl' },
    lg: { icon: 'h-10 w-10', text: 'text-2xl' },
    xl: { icon: 'h-12 w-12', text: 'text-3xl' }
  };

  const colors = {
    default: {
      gradient: 'from-brand-500 to-brand-600',
      text: 'text-gray-900 dark:text-white',
      bolt: 'text-white'
    },
    white: {
      gradient: 'from-white to-gray-100',
      text: 'text-white',
      bolt: 'text-brand-500'
    },
    dark: {
      gradient: 'from-gray-800 to-gray-900',
      text: 'text-gray-900',
      bolt: 'text-brand-500'
    }
  };

  const currentSize = sizes[size];
  const currentColors = colors[variant];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Icon - Lightning Bolt in Circle */}
      <div className={`relative ${currentSize.icon} flex-shrink-0`}>
        {/* Gradient Circle Background */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${currentColors.gradient} shadow-lg`}></div>
        
        {/* Lightning Bolt Icon */}
        <svg 
          className={`relative ${currentSize.icon} ${currentColors.bolt}`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={`flex items-baseline gap-0.5 font-bold ${currentSize.text} ${currentColors.text}`}>
          <span>Bolt</span>
          <span className="text-brand-500">Storage</span>
        </div>
      )}
    </div>
  );
}
