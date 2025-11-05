import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    content: "BoltStorage has completely transformed how our team collaborates. The speed and reliability are unmatched.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "The security features give me peace of mind. Enterprise-grade encryption for all our sensitive documents.",
    author: "Michael Chen",
    role: "CEO at SecureData Inc",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "Best cloud storage solution we've tried. The interface is intuitive and file sharing is seamless.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "Outstanding support and easy migration. We moved our entire company without any downtime.",
    author: "David Park",
    role: "Operations Director",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "Real-time sync across all my devices works flawlessly. Perfect for my workflow.",
    author: "Lisa Anderson",
    role: "Freelance Designer",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Anderson&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "Team collaboration features are excellent. File versioning has saved us countless times.",
    author: "James Wilson",
    role: "Engineering Lead",
    avatar: "https://ui-avatars.com/api/?name=James+Wilson&background=3b82f6&color=fff&size=128",
    rating: 5
  },
  {
    content: "Incredible performance and uptime. Our business depends on BoltStorage and it never lets us down.",
    author: "Rachel Thompson",
    role: "Startup Founder",
    avatar: "https://ui-avatars.com/api/?name=Rachel+Thompson&background=3b82f6&color=fff&size=128",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-20 dark:bg-gray-900 sm:py-24 lg:py-28" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10 animate-fade-in-down">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Testimonials
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg animate-fade-in-up animation-delay-100">
            Loved by teams worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-base text-gray-600 dark:text-gray-400 lg:mt-5 animate-fade-in-up animation-delay-200">
            See what our customers have to say about BoltStorage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm transition-all duration-500 hover:shadow-theme-lg hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-900 lg:p-8 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-warning-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 flex-1 text-theme-sm text-gray-700 dark:text-gray-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-theme-xs text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
