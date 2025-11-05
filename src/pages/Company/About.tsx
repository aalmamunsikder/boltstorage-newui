import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import LandingFooter from "../../components/landing/LandingFooter";

export default function About() {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff&size=256" },
    { name: "Michael Chen", role: "CTO", image: "https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff&size=256" },
    { name: "Emily Rodriguez", role: "Head of Product", image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3b82f6&color=fff&size=256" },
    { name: "David Park", role: "Head of Engineering", image: "https://ui-avatars.com/api/?name=David+Park&background=3b82f6&color=fff&size=256" }
  ];

  const values = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security First",
      description: "We prioritize the security and privacy of your data above all else."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Built for speed with cutting-edge technology and global infrastructure."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "User Focused",
      description: "Everything we build is designed with our users' needs in mind."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Reach",
      description: "Serving customers in over 150 countries around the world."
    }
  ];

  return (
    <>
      <PageMeta
        title="About Us - BoltStorage"
        description="Learn about BoltStorage's mission, team, and values."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-title-lg font-bold text-white sm:text-title-xl lg:text-title-2xl">
                Building the future of cloud storage
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-theme-lg text-white/90">
                BoltStorage was founded with a simple mission: make file storage and sharing fast, 
                secure, and accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Our Story
              </h2>
              <p className="mt-6 text-theme-base leading-relaxed text-gray-700 dark:text-gray-300">
                Founded in 2020, BoltStorage emerged from a frustration with slow, complicated cloud storage solutions. 
                Our founders believed that storing and sharing files shouldn't be a hassle—it should be instant, intuitive, and secure.
              </p>
              <p className="mt-4 text-theme-base leading-relaxed text-gray-700 dark:text-gray-300">
                Today, we serve over 50,000 users worldwide, from individuals to large enterprises, helping them store, 
                share, and collaborate on millions of files every day. Our commitment to speed, security, and simplicity 
                drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Our Values
              </h2>
              <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-500 text-white">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-title-sm font-bold text-gray-900 dark:text-white sm:text-title-md">
                Meet Our Team
              </h2>
              <p className="mt-4 text-theme-base text-gray-600 dark:text-gray-400">
                The people behind BoltStorage
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-32 w-32 rounded-full"
                  />
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-theme-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-brand-500 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              <div>
                <div className="text-4xl font-bold text-white lg:text-5xl">50K+</div>
                <div className="mt-2 text-theme-sm text-white/90">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white lg:text-5xl">10M+</div>
                <div className="mt-2 text-theme-sm text-white/90">Files Stored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white lg:text-5xl">99.99%</div>
                <div className="mt-2 text-theme-sm text-white/90">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white lg:text-5xl">150+</div>
                <div className="mt-2 text-theme-sm text-white/90">Countries</div>
              </div>
            </div>
          </div>
        </div>
        
        <LandingFooter />
      </div>
    </>
  );
}
