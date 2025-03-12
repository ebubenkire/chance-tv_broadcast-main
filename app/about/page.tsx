import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/images/team/john-smith.jpg',
      bio: 'With over 20 years of experience in film production, John has led the company to produce award-winning content.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/images/team/sarah-johnson.jpg',
      bio: 'Sarah brings her innovative vision and artistic expertise to every production.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Production',
      image: '/images/team/michael-chen.jpg',
      bio: 'Michael ensures smooth operation of all productions while maintaining the highest quality standards.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Academy Director',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'Emily leads our film academy, nurturing the next generation of filmmaking talent.',
    },
  ];

  const milestones = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'MoviePro Studios was founded with a vision to create meaningful content and provide opportunities for emerging filmmakers.',
    },
    {
      year: '2012',
      title: 'Academy Launch',
      description: 'We launched our film academy to train and nurture the next generation of filmmaking talent.',
    },
    {
      year: '2015',
      title: 'First Major Success',
      description: 'Our first feature film received critical acclaim and won multiple industry awards.',
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Launched our streaming platform to bring our content directly to audiences worldwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover opacity-30 scale-105 animate-slowZoom"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-pulse opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-pulse opacity-80" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay animate-slowZoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-px w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-shimmer" />
          <div className="absolute h-px w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-shimmer [animation-delay:0.5s]" />
          {/* Vertical Lines */}
          <div className="absolute w-px h-full left-1/4 top-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-shimmer" />
          <div className="absolute w-px h-full right-1/4 top-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-shimmer [animation-delay:0.5s]" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-red-500/20 animate-spin-slow [animation-duration:20s]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-red-500/10 animate-spin-slow-reverse [animation-duration:25s]" />
        
        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl relative">
            {/* Red Accent Line - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
            
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4 group-hover:w-16 transition-all duration-300" />
              Our Story
              <span className="w-12 h-px bg-red-500/50 ml-4 group-hover:w-16 transition-all duration-300" />
            </span>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%)]">
              Crafting Stories That
              <span className="block mt-2 relative">
                <span className="text-red-400">
                  Move the World
                </span>
                {/* Underline Effect - Centered */}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-px bg-red-500/50" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-2xl leading-relaxed drop-shadow-lg">
              At MoviePro Studios, we believe in the power of storytelling to inspire, 
              educate, and entertain. Our mission is to produce high-quality content while 
              providing opportunities for emerging talent in the film industry.
            </p>

            {/* CTA Buttons - Centered */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center">
              <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-red-700 shadow-lg">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-black/30 backdrop-blur-sm border-2 border-white/20 rounded-xl overflow-hidden hover:bg-black/50 hover:border-white/30 transition-all duration-300 shadow-lg">
                <span className="relative z-10">Watch Showreel</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-64 bg-gradient-to-t from-gray-50 to-transparent" />
          <div className="h-px bg-red-500/20" />
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
          <span className="mt-2 text-white/70 text-sm uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDF2F2_0%,transparent_70%)] animate-pulse" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming the entertainment industry through innovation and excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "50+", label: "Productions Completed" },
              { number: "1000+", label: "Students Trained" },
              { number: "25", label: "Industry Awards" },
              { number: "15+", label: "Years of Experience" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent rounded-2xl transform scale-100 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-red-100/20">
                  <div className="text-7xl font-bold bg-gradient-to-br from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transform transition-all duration-300 group-hover:[text-shadow:_0_10px_20px_rgb(239_68_68_/_20%)]">
                    {stat.number}
                  </div>
                  <div className="text-base text-gray-600 uppercase tracking-wider font-medium group-hover:text-red-600 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Our Team
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The visionaries and experts who drive our success and innovation in the film industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="w-full h-full bg-gray-800 relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  </div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300 font-medium">
                      {member.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FDF2F2_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Timeline
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A timeline of our growth and achievements in the film industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="group relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-red-500 to-red-600 group-last:h-[50%]" />
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-500 -translate-x-[7px] group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-red-500/50" />
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-white">
                  <div className="relative">
                    <div className="text-3xl font-bold text-red-600 mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-900 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3B0000_0%,transparent_60%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Contact Us
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
              Have questions about our productions or interested in collaborating?
              We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  title: "Email",
                  content: "contact@moviepro.com"
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                  title: "Phone",
                  content: "(555) 123-4567"
                },
                {
                  icon: (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  ),
                  title: "Address",
                  content: "123 Studio Way,\nLos Angeles, CA 90028"
                }
              ].map((item, index) => (
                <div key={index} className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20">
                  <div className="text-red-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-16 py-6 rounded-xl transition-all duration-500 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 -m-1 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 