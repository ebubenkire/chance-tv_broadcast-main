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

// Audition data
const auditions = [
  {
    id: 1,
    title: 'Feature Film Lead Role',
    type: 'Feature Film',
    role: 'Lead Actor/Actress',
    ageRange: '25-35',
    gender: 'All genders',
    description: 'Seeking a dynamic performer for the lead role in an upcoming psychological thriller. The character is a complex individual dealing with personal demons while uncovering a mystery that threatens their reality.',
    requirements: [
      'Professional acting experience',
      'Strong emotional range',
      'Ability to perform intense scenes',
      'Availability for 3 months of shooting',
    ],
    date: '2024-07-15',
    location: 'Los Angeles Studio',
    compensation: '$5,000/week + benefits',
    deadline: '2024-06-01',
  },
  {
    id: 2,
    title: 'TV Series Regular',
    type: 'Television Series',
    role: 'Supporting Character',
    ageRange: '30-45',
    gender: 'All genders',
    description: 'Looking for a charismatic performer to play a recurring character in an upcoming drama series. The role requires someone who can bring depth and authenticity to a complex character arc.',
    requirements: [
      'TV/Film experience required',
      'Strong improvisational skills',
      'Ability to commit to a full season',
      'Good team player',
    ],
    date: '2024-08-01',
    location: 'New York Studio',
    compensation: '$3,000/episode',
    deadline: '2024-07-01',
  },
  {
    id: 3,
    title: 'Short Film Ensemble',
    type: 'Short Film',
    role: 'Multiple Roles',
    ageRange: '20-60',
    gender: 'All genders',
    description: 'Casting multiple roles for an artistic short film exploring family dynamics. Looking for performers who can work well in ensemble scenes and bring authenticity to their characters.',
    requirements: [
      'Theater or film experience',
      'Comfortable with emotional scenes',
      'Available for 2 weeks of shooting',
      'Local to Los Angeles preferred',
    ],
    date: '2024-06-15',
    location: 'Los Angeles Studio',
    compensation: '$500/day',
    deadline: '2024-05-15',
  }
];

const auditionTips = [
  {
    title: 'Preparation',
    description: 'Research the role thoroughly and prepare your monologues or scenes well in advance. Familiarize yourself with the project and creative team.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Punctuality',
    description: 'Arrive at least 15 minutes early to complete paperwork and warm up. Being late to an audition is often an immediate disqualification.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professionalism',
    description: 'Bring your headshot and resume, dress appropriately, and maintain a positive and professional attitude throughout the process.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Flexibility',
    description: 'Be prepared to take direction and try different approaches. Casting directors often want to see how well you can adapt.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function AuditionsPage() {
  const router = useRouter();
  const [showApplication, setShowApplication] = useState(false);
  const [selectedAudition, setSelectedAudition] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    portfolio: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setShowApplication(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        availability: '',
        portfolio: '',
      });
      
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Audition Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed mx-auto">
              Take your next career step with ChanceTv Studios. We're constantly seeking talented performers for our upcoming productions across film, television, and digital media.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Open Roles</p>
                <p className="text-lg font-semibold text-white">{auditions.length} Positions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Next Audition</p>
                <p className="text-lg font-semibold text-white">June 15, 2024</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Locations</p>
                <p className="text-lg font-semibold text-white">LA & NY</p>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('auditions')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 flex items-center">
                View Open Roles
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Audition Tips Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Audition Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {auditionTips.map((tip, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Auditions Section */}
      <section id="auditions" className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Open Auditions</h2>
          <div className="grid gap-10">
            {auditions.map((audition) => (
              <div
                key={audition.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-10">
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{audition.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                          {audition.type}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {audition.role}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {audition.ageRange}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">{audition.description}</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {audition.requirements.map((req, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                            <p className="text-gray-600">{audition.location}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Compensation</h4>
                            <p className="text-gray-600">{audition.compensation}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Application Deadline</h4>
                            <p className="text-gray-600">
                              {new Date(audition.deadline).toLocaleDateString('en-US', { 
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedAudition(audition.id);
                        setShowApplication(true);
                      }}
                      className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <span className="relative z-10 flex items-center">
                        Apply Now
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

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-2xl w-full animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Apply for {auditions.find(a => a.id === selectedAudition)?.title}
              </h2>
              <button
                onClick={() => setShowApplication(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
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
                    Portfolio/Reel Link
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                    placeholder="https://"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                  placeholder="Please specify your availability for auditions and potential shooting dates"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowApplication(false)}
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
                      'Submit Application'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 