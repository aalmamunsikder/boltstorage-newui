import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "10M+", label: "Files Stored" },
  { value: "99.99%", label: "Uptime" },
  { value: "150+", label: "Countries" }
];

export default function StatsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="bg-brand-500 py-16 sm:py-20" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-title-md font-bold text-white lg:text-title-lg animate-pulse">
                {stat.value}
              </div>
              <div className="mt-2 text-theme-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
