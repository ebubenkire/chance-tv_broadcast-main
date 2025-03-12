'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3B0000_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Logo and Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent inline-block">
            ChanceTv Studios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting cinematic excellence through innovation, education, and storytelling. Join us in shaping the future of film.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/academy", label: "Film Academy" },
                { href: "/productions", label: "Productions" },
                { href: "/events", label: "Events" },
                { href: "/careers", label: "Careers" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group relative flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300" />
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300">→</span>
                    <span className="ml-6">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/studio-rental", label: "Studio Rental" },
                { href: "/equipment", label: "Equipment Hire" },
                { href: "/post-production", label: "Post Production" },
                { href: "/workshops", label: "Workshops" },
                { href: "/consulting", label: "Consulting" }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="group relative flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300" />
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300">→</span>
                    <span className="ml-6">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="ml-3">
                    123 Studio Way<br />
                    Hollywood, CA 90028
                  </span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="ml-3">(123) 456-7890</span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="mailto:info@chancetvstudios.com" 
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-3">info@chancetvstudios.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Get updates on our latest productions and events.
              </p>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {[
                { href: "#", icon: "twitter", label: "Twitter" },
                { href: "#", icon: "instagram", label: "Instagram" },
                { href: "#", icon: "youtube", label: "YouTube" },
                { href: "#", icon: "linkedin", label: "LinkedIn" }
              ].map((social) => (
                <a 
                  key={social.icon}
                  href={social.href} 
                  className="group bg-red-600/10 p-2 rounded-lg hover:bg-red-600/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <div className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors duration-300">
                    {social.icon === "twitter" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    )}
                    {social.icon === "youtube" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ChanceTv Studios
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">
                All rights reserved
              </span>
            </div>
            <div className="flex space-x-6">
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/cookies", label: "Cookies" },
                { href: "/sitemap", label: "Sitemap" }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 