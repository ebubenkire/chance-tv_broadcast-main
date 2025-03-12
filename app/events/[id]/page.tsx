'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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

// Event data
const eventDetails = {
  id: 1,
  title: 'Film Industry Networking Night',
  date: '2024-06-20',
  time: '7:00 PM - 10:00 PM',
  location: 'ChanceTv Studios Main Hall',
  address: '123 Studio Drive, Los Angeles, CA 90028',
  description: 'Connect with industry professionals, directors, producers, and fellow artists in a casual networking environment. This exclusive evening provides unique opportunities to build relationships, share experiences, and explore potential collaborations in the film industry.',
  capacity: 150,
  price: 'Free for Members / $25 for Non-Members',
  type: 'Networking',
  highlights: [
    'Meet industry professionals',
    'Portfolio review opportunities',
    'Light refreshments provided',
    'Panel discussion on current trends'
  ],
  schedule: [
    {
      time: '7:00 PM - 7:30 PM',
      activity: 'Check-in & Welcome Reception',
      description: 'Arrive, collect your name badge, and enjoy welcome drinks'
    },
    {
      time: '7:30 PM - 8:15 PM',
      activity: 'Industry Panel Discussion',
      description: 'Leading professionals discuss current trends and opportunities in film'
    },
    {
      time: '8:15 PM - 8:30 PM',
      activity: 'Break',
      description: 'Refreshments and informal networking'
    },
    {
      time: '8:30 PM - 9:30 PM',
      activity: 'Portfolio Reviews & Networking',
      description: 'One-on-one portfolio reviews with industry experts'
    },
    {
      time: '9:30 PM - 10:00 PM',
      activity: 'Closing Remarks & Final Networking',
      description: 'Event wrap-up and final networking opportunities'
    }
  ],
  speakers: [
    {
      name: 'Sarah Anderson',
      role: 'Executive Producer, Paramount Pictures',
      image: '/images/speakers/sarah-anderson.jpg',
      bio: 'Award-winning producer with over 15 years of industry experience'
    },
    {
      name: 'Michael Chen',
      role: 'Director, ChanceTv Studios',
      image: '/images/speakers/michael-chen.jpg',
      bio: 'Renowned director known for innovative storytelling approaches'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Casting Director',
      image: '/images/speakers/emily-rodriguez.jpg',
      bio: 'Leading casting director for major studio productions'
    }
  ],
  faqs: [
    {
      question: 'What should I bring?',
      answer: 'Business cards, portfolio (if seeking review), and a positive networking attitude. Dress code is business casual.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, free parking is available in the studio lot. Please follow signs for event parking.'
    },
    {
      question: 'Can I get a portfolio review?',
      answer: 'Yes, portfolio reviews are available on a first-come, first-served basis during the designated networking time.'
    },
    {
      question: 'Are refreshments included?',
      answer: 'Yes, light refreshments and non-alcoholic beverages will be provided. A cash bar will also be available.'
    }
  ]
};

export default function EventPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [showRegistration, setShowRegistration] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    specialRequests: '',
    portfolioReview: false
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

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
        specialRequests: '',
        portfolioReview: false
      });
      
    } catch (error) {
      console.error('Error submitting registration:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <style jsx>{`${floatAnimation} ${pulseAnimation}`}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] opacity-70" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
        
        <div className="relative container mx-auto px-6 lg:px-8 py-24 flex flex-col items-center">
          <button
            onClick={() => router.push('/events')}
            className="mb-8 text-gray-400 hover:text-white transition-colors duration-300 flex items-center group self-start"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
              <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium">
                {eventDetails.type}
              </span>
              <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium">
                {new Date(eventDetails.date).toLocaleDateString('en-US', { 
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium">
                {eventDetails.time}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {eventDetails.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed mx-auto">
              {eventDetails.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowRegistration(true)}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center">
                  Register Now
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(eventDetails.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-4 text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {['schedule', 'speakers', 'faqs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Schedule Tab */}
          <div className={`${activeTab === 'schedule' ? 'block' : 'hidden'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {eventDetails.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-wrap gap-6 items-start">
                      <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-medium">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.activity}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speakers Tab */}
          <div className={`${activeTab === 'speakers' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventDetails.speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-red-500 text-center mb-4">{speaker.role}</p>
                  <p className="text-gray-600 text-center">{speaker.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Tab */}
          <div className={`${activeTab === 'faqs' ? 'block' : 'hidden'}`}>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {eventDetails.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between"
                    >
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                          selectedFAQ === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ${
                        selectedFAQ === index ? 'py-4' : 'py-0 h-0'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-2xl w-full animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Register for {eventDetails.title}
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

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="portfolioReview"
                    name="portfolioReview"
                    checked={formData.portfolioReview}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="portfolioReview" className="ml-2 text-sm text-gray-700">
                    I would like to request a portfolio review during the networking session
                  </label>
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