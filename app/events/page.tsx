'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Add keyframe animations
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.5; }
  }
`;

const events = [
  {
    id: 1,
    title: 'Film Industry Networking Night',
    date: '2024-06-20',
    time: '7:00 PM - 10:00 PM',
    location: 'ChanceTv Studios Main Hall',
    description: 'Connect with industry professionals, directors, producers, and fellow artists in a casual networking environment.',
    capacity: 150,
    price: 'Free for Members / $25 for Non-Members',
    type: 'Networking',
    highlights: [
      'Meet industry professionals',
      'Portfolio review opportunities',
      'Light refreshments provided',
      'Panel discussion on current trends'
    ]
  },
  {
    id: 2,
    title: 'Masterclass: Advanced Cinematography',
    date: '2024-07-05',
    time: '2:00 PM - 6:00 PM',
    location: 'Studio Workshop Room A',
    description: 'An intensive masterclass on advanced cinematography techniques led by award-winning cinematographer Michael Chen.',
    capacity: 50,
    price: '$199',
    type: 'Workshop',
    highlights: [
      'Hands-on camera experience',
      'Lighting techniques workshop',
      'Color grading session',
      'Certificate of completion'
    ]
  },
  {
    id: 3,
    title: 'Student Film Festival',
    date: '2024-07-15',
    time: '12:00 PM - 8:00 PM',
    location: 'MoviePro Theater',
    description: 'Annual showcase of outstanding student films, featuring Q&A sessions with young filmmakers and industry judges.',
    capacity: 300,
    price: '$15',
    type: 'Festival',
    highlights: [
      'Student film screenings',
      'Awards ceremony',
      'Networking opportunities',
      'Industry judge feedback'
    ]
  }
];

export default function EventsPage() {
  const router = useRouter();
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    specialRequests: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
        setShowRegistration(false);
      }, 3000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendees: '1',
        specialRequests: ''
      });
      
    } catch (error) {
      console.error('Error submitting registration:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredEvents = [
    {
      title: 'International Film Festival 2024',
      date: 'August 10-17, 2024',
      category: 'Festival',
      location: 'Multiple Venues, Los Angeles',
      description: 'A week-long celebration of international cinema featuring premieres, director Q&As, and networking events.',
      image: '/images/events/film-festival.jpg',
      tags: ['Screenings', 'Workshops', 'Networking'],
      isFeatured: true,
      ticketPrice: '$299',
      attendees: '5000+',
      speakers: [
        'Christopher Nolan',
        'Ava DuVernay',
        'Roger Deakins'
      ]
    },
    {
      title: 'Cinematography Masterclass Series',
      date: 'Monthly, Starting July 2024',
      category: 'Workshop',
      location: 'ChanceTv Studios',
      description: 'Monthly masterclasses with renowned cinematographers covering lighting, composition, and camera techniques.',
      image: '/images/events/masterclass.jpg',
      tags: ['Education', 'Hands-on', 'Professional'],
      isFeatured: true,
      ticketPrice: '$199/session',
      attendees: '50 per session',
      speakers: [
        'Roger Deakins',
        'Rachel Morrison',
        'Bradford Young'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Sound Design Workshop',
      date: 'July 15, 2024',
      category: 'Workshop',
      location: 'Audio Lab A',
      description: 'Learn professional sound design techniques for film and television.',
      image: '/images/events/sound-workshop.jpg',
      tags: ['Audio', 'Post-Production']
    },
    {
      title: 'Indie Filmmakers Meetup',
      date: 'July 20, 2024',
      category: 'Networking',
      location: 'The Filmmaker\'s Lounge',
      description: 'Monthly gathering of independent filmmakers to share ideas and collaborate.',
      image: '/images/events/indie-meetup.jpg',
      tags: ['Networking', 'Independent Film']
    },
    {
      title: 'Visual Effects Symposium',
      date: 'July 25, 2024',
      category: 'Conference',
      location: 'Digital Arts Center',
      description: 'Industry experts share the latest in VFX technology and techniques.',
      image: '/images/events/vfx-symposium.jpg',
      tags: ['VFX', 'Technology']
    },
    {
      title: 'Documentary Filmmaking Workshop',
      date: 'August 5, 2024',
      category: 'Workshop',
      location: 'Studio B',
      description: 'Comprehensive workshop on documentary storytelling and production.',
      image: '/images/events/documentary.jpg',
      tags: ['Documentary', 'Production']
    }
  ];

  const eventCategories = [
    {
      name: 'Workshops',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
      count: 12
    },
    {
      name: 'Festivals',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      ),
      count: 3
    },
    {
      name: 'Networking',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      count: 8
    },
    {
      name: 'Conferences',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      count: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <style jsx>{`${floatAnimation} ${pulseAnimation}`}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] opacity-70" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
        
        <div className="relative container mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Upcoming Events
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed mx-auto">
              Join us for exclusive film industry events, workshops, and networking opportunities. Connect with professionals and enhance your skills.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Total Events</p>
                <p className="text-lg font-semibold text-white">{events.length} Events</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Next Event</p>
                <p className="text-lg font-semibold text-white">June 20, 2024</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Venue</p>
                <p className="text-lg font-semibold text-white">ChanceTv Studios</p>
              </div>
            </div>

            <button
              onClick={scrollToEvents}
              className="group relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 flex items-center">
                View All Events
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Featured Events</h2>
          <div className="grid gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-10">
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {event.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">{event.description}</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Event Highlights</h4>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                            <p className="text-gray-600">{event.location}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Capacity</h4>
                            <p className="text-gray-600">{event.capacity} attendees</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Price</h4>
                            <p className="text-gray-600">{event.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => router.push(`/events/${event.id}`)}
                      className="px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedEvent(event.id);
                        setShowRegistration(true);
                      }}
                      className="group relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-2xl w-full animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Register for {events.find(e => e.id === selectedEvent)?.title}
              </h2>
              <button
                onClick={() => setShowRegistration(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {registrationSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600">Thank you for registering. We'll send you a confirmation email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Attendees
                    </label>
                    <select
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                    placeholder="Any dietary requirements or accessibility needs?"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowRegistration(false)}
                    className="w-1/2 px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-1/2 group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        'Complete Registration'
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 