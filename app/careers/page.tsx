'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const jobListings = [
  {
    id: 1,
    title: 'Makeup Artist',
    department: 'Production',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    description: 'We are seeking a talented makeup artist with experience in film and television production.',
  },
  {
    id: 2,
    title: 'Producer',
    department: 'Production',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    description: 'Experienced producer needed for upcoming film projects.',
  },
  {
    id: 3,
    title: 'Cinematographer',
    department: 'Production',
    type: 'Project-based',
    location: 'Multiple Locations',
    description: 'Looking for a creative cinematographer with a strong portfolio.',
  },
  {
    id: 4,
    title: 'Script Writer',
    department: 'Creative',
    type: 'Freelance',
    location: 'Remote',
    description: 'Seeking experienced scriptwriters for various upcoming projects.',
  },
];

// Add these keyframe animations to the top of the file, after imports
const styles = {
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
  },
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.5,
    },
  },
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    resume: null as File | null,
    notificationEmail: '',
    lastName: '',
    location: '',
    linkedin: '',
    currentRole: '',
    yearsOfExperience: '',
    availabilityDate: '',
    salaryExpectation: '',
    referralSource: '',
    coverLetter: '',
    workAuthorization: '',
    preferredWorkType: 'onsite',
    willingToRelocate: false,
    agreeToTerms: false
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccessMessage('Application submitted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        setShowJobModal(false);
        // Reset form
        setFormData({
          ...formData,
          name: '',
          email: '',
          phone: '',
          experience: '',
          portfolio: '',
          resume: null,
          lastName: '',
          location: '',
          linkedin: '',
          currentRole: '',
          yearsOfExperience: '',
          availabilityDate: '',
          salaryExpectation: '',
          referralSource: '',
          coverLetter: '',
          workAuthorization: '',
          preferredWorkType: 'onsite',
          willingToRelocate: false,
          agreeToTerms: false
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccessMessage('You will be notified when this position opens!');
      setTimeout(() => {
        setSuccessMessage('');
        setShowNotificationModal(false);
        setFormData({
          ...formData,
          notificationEmail: '',
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error setting up notification:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobApplication = (job: any) => {
    setSelectedPosition(job);
    setShowJobModal(true);
  };

  const handleNotification = (position: any) => {
    setSelectedPosition(position);
    setShowNotificationModal(true);
  };

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobOpenings = [
    {
      title: 'Senior Film Director',
      department: 'Production',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead creative direction for major film projects, collaborate with producers, and mentor junior directors.',
      requirements: [
        'Proven track record of successful film productions',
        'Strong storytelling and visual composition skills',
        'Experience with both narrative and commercial projects',
        'Excellent team leadership and communication abilities'
      ],
      benefits: ['Health Insurance', 'Equipment Access', 'Project Bonuses'],
      featured: true
    },
    {
      title: 'VFX Supervisor',
      department: 'Post-Production',
      location: 'Burbank, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Oversee visual effects production, manage artist teams, and ensure high-quality deliverables.',
      requirements: [
        'Advanced knowledge of industry-standard VFX software',
        'Strong portfolio of film/TV VFX work',
        'Team management experience',
        'Understanding of both practical and digital effects'
      ],
      benefits: ['Health Insurance', 'Software Licenses', '401(k)'],
      featured: true
    }
  ];

  const upcomingPositions = [
    {
      title: 'Production Coordinator',
      department: 'Production',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Coordinate daily production activities and assist in project management.'
    },
    {
      title: 'Sound Engineer',
      department: 'Audio',
      location: 'Studio City, CA',
      type: 'Full-time',
      description: 'Handle sound recording, mixing, and post-production audio work.'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Hollywood, CA',
      type: 'Full-time',
      description: 'Develop and execute marketing strategies for film releases.'
    },
    {
      title: 'Camera Operator',
      department: 'Production',
      location: 'Los Angeles, CA',
      type: 'Contract',
      description: 'Operate various camera systems for film and commercial shoots.'
    }
  ];

  const cultureHighlights = [
    {
      title: 'Creative Freedom',
      description: 'We encourage innovative thinking and provide the resources to bring your vision to life.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      )
    },
    {
      title: 'Collaborative Environment',
      description: 'Work alongside industry veterans and learn from the best in the business.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )
    },
    {
      title: 'Growth Opportunities',
      description: 'Clear career paths and continuous learning through workshops and mentorship.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      )
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous time off to keep creativity flowing.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive Health Insurance',
        'Dental and Vision Coverage',
        'Mental Health Support',
        'Fitness Membership'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive Salary',
        '401(k) with Company Match',
        'Annual Bonuses',
        'Stock Options'
      ]
    },
    {
      category: 'Professional Development',
      items: [
        'Training Budget',
        'Conference Attendance',
        'Industry Certifications',
        'Mentorship Program'
      ]
    },
    {
      category: 'Lifestyle',
      items: [
        'Flexible PTO',
        'Remote Work Options',
        'Paid Parental Leave',
        'Equipment Allowance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[90vh] bg-black overflow-hidden flex items-center justify-center">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
        
        {/* Enhanced Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-red-700/10 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-red-600/15 rounded-full blur-[90px] animate-[float_9s_ease-in-out_infinite_2s]" />
        </div>

        {/* Enhanced Content */}
        <div className="relative container mx-auto px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium">
                Join Our Team
              </span>
              <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium">
                Multiple Positions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Shape the Future of Entertainment
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mx-auto max-w-3xl">
              Join our passionate team of creators, innovators, and storytellers. We're looking for talented individuals who want to make their mark in the entertainment industry.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleScroll('openings')}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center">
                  View Open Positions
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => handleScroll('culture')}
                className="inline-flex items-center px-6 py-4 text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn About Culture
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-400">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-gray-400">Office Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Positions */}
      <section id="openings" className="py-40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDF2F2_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-24 animate-fadeIn">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-8 w-full">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4" />
              Featured Positions
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4" />
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Join Our Creative Team
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              We're looking for talented individuals to help us push the boundaries of filmmaking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {jobOpenings.map((job, index) => (
              <div key={index} className="group relative animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-500/10">
                  <div className="p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {job.title}
                        </h3>
                        <p className="text-lg text-gray-600 mt-1">{job.department}</p>
                      </div>
                      <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {job.type}
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center text-gray-600 text-lg">
                        <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>

                      <div className="flex items-center text-gray-600 text-lg">
                        <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">{job.description}</p>

                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900">Requirements</h4>
                        <ul className="space-y-4">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600 text-lg">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <span 
                            key={benefitIndex}
                            className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-300 hover:shadow-md"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleJobApplication(job)}
                        className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-red-500/20"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <span className="relative z-10 flex items-center">
                          {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          ) : (
                            <>
                              Apply Now
                              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Culture */}
      <section className="py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-[float_6s_ease-in-out_infinite]" />
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-red-500/5 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-red-700/5 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_1s]" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-8 w-full">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4" />
              Our Culture
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4" />
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Life at ChanceTv Studios
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Experience a workplace that values creativity, collaboration, and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cultureHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="bg-red-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {highlight.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FDF2F2_0%,transparent_60%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <span className="inline-flex items-center justify-center text-red-500 text-lg font-semibold tracking-wider uppercase mb-8 w-full">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4" />
              Benefits
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4" />
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              What We Offer
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive benefits designed to support your professional and personal life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((category, index) => (
              <div 
                key={index} 
                className="group animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-500/10 p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 group-hover:text-red-600 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <ul className="space-y-5">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-red-500 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced More Opportunities */}
      <section className="py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay animate-[float_6s_ease-in-out_infinite]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold tracking-wider uppercase mb-8 w-full">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4" />
              More Opportunities
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4" />
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Upcoming Positions
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Keep an eye on these upcoming roles and be the first to apply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {upcomingPositions.map((position, index) => (
              <div 
                key={index} 
                className="group animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                  <div className="flex items-center justify-between mb-8">
                    <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                      {position.department}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">
                    {position.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 mb-6">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {position.location}
                  </div>
                  
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    {position.description}
                  </p>

                  <button
                    onClick={() => handleNotification(position)}
                    className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-red-500/20"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <span className="relative z-10 flex items-center">
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <>
                          Get Notified
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Apply for {selectedPosition?.title}
                </h2>
                <p className="text-gray-600">Fill out the form below to apply for this position</p>
              </div>
              <button
                onClick={() => setShowJobModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {successMessage ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{successMessage}</h3>
                <p className="text-gray-600">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Role
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Salary Range
                      </label>
                      <input
                        type="text"
                        name="salaryExpectation"
                        value={formData.salaryExpectation}
                        onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        placeholder="e.g., $80,000 - $100,000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relevant Experience *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      required
                      placeholder="Describe your relevant experience, key achievements, and skills"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      placeholder="Why are you interested in this position? What makes you a great fit?"
                    />
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Additional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Earliest Start Date
                      </label>
                      <input
                        type="date"
                        name="availabilityDate"
                        value={formData.availabilityDate}
                        onChange={(e) => setFormData({ ...formData, availabilityDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Authorization *
                      </label>
                      <select
                        name="workAuthorization"
                        value={formData.workAuthorization}
                        onChange={(e) => setFormData({ ...formData, workAuthorization: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="citizen">US Citizen</option>
                        <option value="permanent_resident">Permanent Resident</option>
                        <option value="visa_holder">Visa Holder</option>
                        <option value="need_sponsorship">Need Sponsorship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Work Type *
                      </label>
                      <select
                        name="preferredWorkType"
                        value={formData.preferredWorkType}
                        onChange={(e) => setFormData({ ...formData, preferredWorkType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                        required
                      >
                        <option value="onsite">On-site</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="remote">Remote</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                      >
                        <option value="">Select...</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="indeed">Indeed</option>
                        <option value="company_website">Company Website</option>
                        <option value="employee_referral">Employee Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume *
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-red-500/50 transition-colors duration-300">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              required
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        {formData.resume && (
                          <p className="text-sm text-gray-600 mt-2">
                            Selected file: {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="willingToRelocate"
                        name="willingToRelocate"
                        type="checkbox"
                        checked={formData.willingToRelocate}
                        onChange={(e) => setFormData({ ...formData, willingToRelocate: e.target.checked })}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="willingToRelocate" className="text-sm text-gray-700">
                        I am willing to relocate if required
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                        I agree to the <a href="/terms" className="text-red-600 hover:text-red-500">Terms and Conditions</a> and <a href="/privacy" className="text-red-600 hover:text-red-500">Privacy Policy</a> *
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowJobModal(false)}
                    className="w-1/3 px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !formData.agreeToTerms}
                    className="w-2/3 group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <>
                          Submit Application
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-2xl w-full animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Get Notified - {selectedPosition?.title}
              </h2>
              <button
                onClick={() => setShowNotificationModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {successMessage ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{successMessage}</h3>
              </div>
            ) : (
              <form onSubmit={handleNotificationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="notificationEmail"
                    value={formData.notificationEmail}
                    onChange={(e) => setFormData({ ...formData, notificationEmail: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowNotificationModal(false)}
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
                        'Set Up Notification'
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