import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Studio Office',
      address: '123 Film Street, Hollywood',
      city: 'Los Angeles, CA 90028',
      phone: '+1 (323) 555-0123',
      email: 'office@moviepro.com',
      hours: 'Mon-Fri: 9AM - 6PM',
      image: '/images/contact/office.jpg'
    },
    {
      title: 'Equipment Rental',
      address: '456 Production Ave',
      city: 'Burbank, CA 91505',
      phone: '+1 (323) 555-0124',
      email: 'rental@moviepro.com',
      hours: 'Mon-Sat: 8AM - 8PM',
      image: '/images/contact/rental.jpg'
    },
    {
      title: 'Film Academy',
      address: '789 Cinema Boulevard',
      city: 'Studio City, CA 91604',
      phone: '+1 (323) 555-0125',
      email: 'academy@moviepro.com',
      hours: 'Mon-Fri: 10AM - 7PM',
      image: '/images/contact/academy.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What types of projects do you work with?',
      answer: 'We work with a wide range of projects including feature films, documentaries, commercials, music videos, and corporate videos. Our team has experience with both small independent productions and large-scale commercial projects.'
    },
    {
      question: 'How far in advance should I book your services?',
      answer: 'For film production services, we recommend booking at least 2-3 months in advance. For equipment rental, 1-2 weeks notice is usually sufficient. Rush bookings may be accommodated based on availability.'
    },
    {
      question: 'Do you offer international production services?',
      answer: 'Yes, we offer international production services and have experience working in multiple countries. Our team can help with logistics, local crew hiring, and necessary permits.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on project scope, duration, and specific requirements. We offer flexible packages starting from basic to premium services. Contact us for a customized quote.'
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
              Get in Touch
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%)]">
              Let's Create
              <span className="block mt-2 text-red-400">Something Amazing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-2xl leading-relaxed drop-shadow-lg">
              Ready to bring your vision to life? Our team is here to help turn your ideas into reality.
            </p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDF2F2_0%,transparent_70%)] animate-pulse" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
                <span className="w-12 h-px bg-red-500/50 mr-4" />
                Contact Us
                <span className="w-12 h-px bg-red-500/50 ml-4" />
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="text-center">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-slowZoom" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              Our Locations
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Drop by one of our locations to discuss your project in person
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((location, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{location.title}</h3>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p>{location.address}</p>
                          <p>{location.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>{location.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p>{location.email}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{location.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FDF2F2_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-12 h-px bg-red-500/50 mr-4" />
              FAQ
              <span className="w-12 h-px bg-red-500/50 ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 