import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Film Production',
      description: 'From concept to screen, we bring your vision to life with cutting-edge equipment and expert crews.',
      features: [
        'Feature Films',
        'Short Films',
        'Documentaries',
        'Music Videos',
        'Commercial Production'
      ],
      image: '/images/services/film-production.jpg',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      )
    },
    {
      title: 'Film Academy',
      description: 'Learn from industry professionals and master the art of filmmaking through hands-on experience.',
      features: [
        'Directing Workshops',
        'Cinematography Classes',
        'Screenwriting Programs',
        'Production Management',
        'Acting Courses'
      ],
      image: '/images/services/film-academy.jpg',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      )
    },
    {
      title: 'Equipment Rental',
      description: 'Access professional-grade equipment for your productions with our comprehensive rental service.',
      features: [
        'Cameras & Lenses',
        'Lighting Equipment',
        'Sound Equipment',
        'Grip & Electric',
        'Production Vehicles'
      ],
      image: '/images/services/equipment-rental.jpg',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      )
    },
    {
      title: 'Post Production',
      description: 'Transform raw footage into cinematic masterpieces with our state-of-the-art post-production facilities.',
      features: [
        'Video Editing',
        'Color Grading',
        'Sound Design',
        'Visual Effects',
        'Motion Graphics'
      ],
      image: '/images/services/post-production.jpg',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      )
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '1,999',
      description: 'Perfect for small productions and indie filmmakers',
      features: [
        'Up to 3 days of shooting',
        'Basic equipment package',
        '2-person crew',
        'Basic post-production',
        'Digital delivery'
      ],
      isPopular: false
    },
    {
      name: 'Professional',
      price: '4,999',
      description: 'Ideal for professional productions and commercial projects',
      features: [
        'Up to 7 days of shooting',
        'Professional equipment package',
        '5-person crew',
        'Advanced post-production',
        'Marketing materials',
        'Digital & physical delivery'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-service solution for major productions',
      features: [
        'Flexible shooting schedule',
        'Premium equipment package',
        'Full production crew',
        'Complete post-production',
        'Marketing campaign',
        'Worldwide distribution support'
      ],
      isPopular: false
    }
  ];

  const events = [
    {
      title: 'Film Festival Showcase',
      date: 'June 15-20, 2024',
      category: 'Festival',
      location: 'Downtown Cinema Complex',
      description: 'Join us for a week-long celebration of independent films featuring emerging directors and exclusive Q&A sessions.',
      image: '/images/services/film-festival.jpg',
      tags: ['Screenings', 'Q&A', 'Networking']
    },
    {
      title: 'Masterclass: Advanced Cinematography',
      date: 'July 8, 2024',
      category: 'Workshop',
      location: 'ChanceTv Studios - Studio A',
      description: 'Learn advanced lighting techniques and camera movements from award-winning cinematographer Sarah Chen.',
      image: '/images/services/masterclass.jpg',
      tags: ['Workshop', 'Hands-on', 'Professional']
    },
    {
      title: 'Industry Networking Night',
      date: 'July 25, 2024',
      category: 'Networking',
      location: 'The Grand Hotel',
      description: 'Connect with industry professionals, producers, and fellow filmmakers in a casual networking environment.',
      image: '/images/services/networking.jpg',
      tags: ['Networking', 'Industry', 'Social']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-pulse opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-pulse opacity-80" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay animate-slowZoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Our Services
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%)]">
              Comprehensive
              <span className="block mt-2 text-red-400">Film Production Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-2xl leading-relaxed drop-shadow-lg">
              From pre-production to post, we offer end-to-end solutions for all your filmmaking needs.
            </p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDF2F2_0%,transparent_70%)] animate-pulse" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              What We Offer
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of film production services designed to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Service Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 flex items-center">
                      <div className="bg-red-600 p-3 rounded-xl mr-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {service.icon}
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-8 pt-0">
                    <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <span className="relative z-10 flex items-center">
                        Learn More
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Pricing Plans
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options to match your production needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.isPopular ? 'md:-mt-8' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 ${plan.isPopular ? 'border-2 border-red-500/20' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white ml-1">{plan.price}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{plan.description}</p>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FDF2F2_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              How It Works
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to discuss your vision and requirements'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning and resource allocation'
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional execution of your project'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final touches and project delivery'
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl font-bold text-red-500/20 mb-4 group-hover:text-red-500/30 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Upcoming Events
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Join Our Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover upcoming film screenings, workshops, and industry events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-red-400 font-semibold mb-2">{event.date}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <span className="relative z-10 flex items-center">
                        Register Now
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-16">
            <Link href="/events" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-1 group">
              View All Events
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3B0000_0%,transparent_60%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss how we can help bring your vision to life with our comprehensive production services.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-16 py-6 rounded-xl transition-all duration-500 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute inset-0 -m-1 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 