const testimonials = [
  {
    content: "BoltStorage has completely transformed how our team collaborates. The speed and reliability are unmatched. We've been able to increase productivity by 40%.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar: "SJ",
    rating: 5
  },
  {
    content: "The security features give me peace of mind. Knowing that our sensitive documents are encrypted end-to-end is crucial for our business.",
    author: "Michael Chen",
    role: "CEO at SecureData Inc",
    avatar: "MC",
    rating: 5
  },
  {
    content: "I've tried many cloud storage solutions, but BoltStorage's interface and features are by far the best. The file sharing capabilities are excellent.",
    author: "Emily Rodriguez",
    role: "Product Manager at StartupHub",
    avatar: "ER",
    rating: 5
  },
  {
    content: "Outstanding customer support and intuitive interface. We migrated our entire company to BoltStorage and haven't looked back since.",
    author: "David Park",
    role: "Operations Director at GlobalTech",
    avatar: "DP",
    rating: 5
  },
  {
    content: "The real-time sync across devices is flawless. I can start work on my desktop and continue seamlessly on my phone without any issues.",
    author: "Lisa Anderson",
    role: "Freelance Designer",
    avatar: "LA",
    rating: 5
  },
  {
    content: "BoltStorage's team collaboration features have made remote work so much easier. File versioning has saved us countless times.",
    author: "James Wilson",
    role: "Engineering Lead at DevStudio",
    avatar: "JW",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 dark:border-brand-500/20 dark:bg-brand-500/10">
            <span className="text-theme-xs font-medium text-brand-700 dark:text-brand-400">
              Testimonials
            </span>
          </div>
          <h2 className="mt-4 text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md lg:text-title-lg">
            Loved by teams worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-xl text-gray-600 dark:text-gray-400 lg:mt-5">
            See what our customers have to say about their experience with BoltStorage.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900 lg:p-8"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
                  {testimonial.avatar}
                </div>
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
