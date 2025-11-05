import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function Blog() {
  const posts = [
    { title: "10 Tips for Better File Organization", category: "Tips & Tricks", date: "Jan 15, 2025", image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?w=400&h=250&fit=crop" },
    { title: "How We Built BoltStorage's Encryption", category: "Engineering", date: "Jan 10, 2025", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" },
    { title: "Introducing Team Collaboration Features", category: "Product Updates", date: "Jan 5, 2025", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Security Best Practices for Cloud Storage", category: "Security", date: "Dec 28, 2024", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop" },
    { title: "Our Journey to 50K Users", category: "Company", date: "Dec 20, 2024", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "Mobile App Update: What's New", category: "Product Updates", date: "Dec 15, 2024", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop" }
  ];

  return (
    <>
      <PageMeta title="Blog - BoltStorage" description="Latest news and updates from BoltStorage" />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-title-lg font-bold text-white">Blog</h1>
            <p className="mt-4 text-theme-lg text-white/90">News, updates, and insights from the BoltStorage team</p>
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article key={index} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-theme-xs">
                      <span className="text-brand-500">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-500">{post.title}</h3>
                    <button className="mt-4 text-theme-sm font-medium text-brand-500 hover:text-brand-600">Read more →</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
}
