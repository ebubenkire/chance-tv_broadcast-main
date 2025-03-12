'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courses = [
  {
    id: 1,
    title: 'Film Direction',
    duration: '6 months',
    price: 4999.99,
    description: 'Learn the art of film direction from industry professionals. This comprehensive course covers storytelling, shot composition, working with actors, and more.',
    topics: [
      'Visual Storytelling',
      'Camera Techniques',
      'Actor Direction',
      'Scene Analysis',
      'Production Management',
    ],
    startDate: '2024-06-01',
    spotsLeft: 8,
  },
  {
    id: 2,
    title: 'Cinematography',
    duration: '4 months',
    price: 3999.99,
    description: 'Master the technical and creative aspects of cinematography. Learn about lighting, camera movement, composition, and color theory.',
    topics: [
      'Camera Operations',
      'Lighting Techniques',
      'Color Grading',
      'Shot Composition',
      'Equipment Handling',
    ],
    startDate: '2024-05-15',
    spotsLeft: 5,
  },
  {
    id: 3,
    title: 'Screenwriting',
    duration: '3 months',
    price: 2999.99,
    description: 'Develop your storytelling skills and learn the craft of screenwriting. From concept to final draft, learn how to write compelling scripts.',
    topics: [
      'Story Structure',
      'Character Development',
      'Dialogue Writing',
      'Script Formatting',
      'Scene Construction',
    ],
    startDate: '2024-07-01',
    spotsLeft: 12,
  },
];

export default function Academy() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState<{ [key: number]: boolean }>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: '',
    portfolio: '',
    previousProjects: '',
    softwareExperience: [] as string[],
    availability: '',
    referral: '',
    preferredRole: '',
  });

  const softwareOptions = [
    'Adobe Premiere Pro',
    'Final Cut Pro',
    'DaVinci Resolve',
    'Adobe After Effects',
    'Avid Media Composer',
    'Cinema 4D',
    'Maya',
    'Blender',
  ];

  const handleSoftwareChange = (software: string) => {
    setFormData(prev => ({
      ...prev,
      softwareExperience: prev.softwareExperience.includes(software)
        ? prev.softwareExperience.filter(s => s !== software)
        : [...prev.softwareExperience, software]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setShowApplication(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        motivation: '',
        portfolio: '',
        previousProjects: '',
        softwareExperience: [],
        availability: '',
        referral: '',
        preferredRole: '',
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedCourse(null);
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = async (courseId: number) => {
    setButtonLoading(prev => ({ ...prev, [courseId]: true }));
    try {
      // Simulate checking course availability
      await new Promise(resolve => setTimeout(resolve, 800));
      setSelectedCourse(courseId);
      setShowApplication(true);
    } finally {
      setButtonLoading(prev => ({ ...prev, [courseId]: false }));
    }
  };

  const handleClose = () => {
    setShowApplication(false);
    setSelectedCourse(null);
  };

  const handleLearnMore = async (courseId: number) => {
    setButtonLoading(prev => ({ ...prev, [courseId]: true }));
    try {
      await router.push(`/academy/courses/${courseId}`);
    } finally {
      setButtonLoading(prev => ({ ...prev, [courseId]: false }));
    }
  };

  const handleExplore = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-red-700/10 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-red-600/15 rounded-full blur-[90px] animate-[float_9s_ease-in-out_infinite_2s]" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="max-w-5xl animate-fadeIn">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-8 w-full animate-slideDown">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4 animate-expandWidth" />
              ChanceTv Studios
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4 animate-expandWidth" />
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-10 leading-tight [text-shadow:_0_2px_30px_rgb(0_0_0_/_60%)] animate-slideUp">
              Film Production
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-400 animate-gradient bg-[length:200%_auto]">
                Academy
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mx-auto max-w-3xl leading-relaxed drop-shadow-2xl animate-fadeIn animation-delay-500 font-light">
              Transform your passion into profession with industry-leading courses and mentorship
            </p>

            <div className="mt-12 flex items-center justify-center space-x-6 animate-fadeIn animation-delay-700">
              <button 
                onClick={handleExplore}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center">
                  Explore Courses
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => router.push('/academy/about')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16l4-4m0 0l-4-4m4 4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-40 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDF2F2_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-6 w-full">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4" />
              Our Courses
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent animate-gradient">
              Professional Film Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our selection of comprehensive courses designed to give you the skills and knowledge needed in the film industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      {course.spotsLeft} spots left
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {course.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">What you'll learn:</h3>
                      <ul className="space-y-2">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-gray-900">${course.price.toLocaleString()}</span>
                        <span className="text-gray-600">Starts {new Date(course.startDate).toLocaleDateString()}</span>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleLearnMore(course.id)}
                          disabled={buttonLoading[course.id]}
                          className="flex-1 px-6 py-3 text-red-600 font-semibold border-2 border-red-600 rounded-full hover:bg-red-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          {buttonLoading[course.id] ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Loading...
                            </span>
                          ) : (
                            'Learn More'
                          )}
                        </button>
                        <button
                          onClick={() => handleApply(course.id)}
                          disabled={buttonLoading[course.id]}
                          className="flex-1 px-6 py-3 text-white font-semibold bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          {buttonLoading[course.id] ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Loading...
                            </span>
                          ) : (
                            'Apply Now'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Course Application
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                    Educational Background
                  </label>
                  <textarea
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Describe your educational background"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Describe any relevant experience"
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                    Motivation
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    placeholder="Why do you want to join this course?"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 text-white font-medium bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. We'll review your application and get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 text-white font-medium bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 