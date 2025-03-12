'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Add these keyframe animations at the top of the file, after the imports
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

// Course data (in a real app, this would come from an API/database)
const courses = [
  {
    id: 1,
    title: 'Film Direction',
    duration: '6 months',
    price: 4999.99,
    description: 'Learn the art of film direction from industry professionals. This comprehensive course covers storytelling, shot composition, working with actors, and more.',
    longDescription: 'Dive deep into the world of film direction with our comprehensive program designed for aspiring directors. Learn from industry veterans, work with professional equipment, and develop your unique directorial voice. This course combines theoretical knowledge with hands-on experience to prepare you for a successful career in film direction.',
    topics: [
      'Visual Storytelling',
      'Camera Techniques',
      'Actor Direction',
      'Scene Analysis',
      'Production Management',
    ],
    startDate: '2024-06-01',
    spotsLeft: 8,
    curriculum: [
      {
        title: 'Foundation of Film Direction',
        weeks: '2 weeks',
        topics: [
          'Understanding the Role of a Director',
          'Film Grammar and Visual Language',
          'Script Analysis and Interpretation',
          'Pre-visualization Techniques',
        ],
      },
      {
        title: 'Visual Storytelling',
        weeks: '4 weeks',
        topics: [
          'Shot Composition and Framing',
          'Camera Movement and Blocking',
          'Color Theory in Film',
          'Lighting for Mood and Story',
        ],
      },
      {
        title: 'Working with Actors',
        weeks: '4 weeks',
        topics: [
          'Actor Direction Techniques',
          'Character Development',
          'Rehearsal Methods',
          'Performance Analysis',
        ],
      },
      {
        title: 'Production Management',
        weeks: '3 weeks',
        topics: [
          'Pre-production Planning',
          'Budget Management',
          'Team Coordination',
          'Schedule Organization',
        ],
      },
      {
        title: 'Advanced Techniques',
        weeks: '4 weeks',
        topics: [
          'Complex Scene Direction',
          'Action Sequence Planning',
          'Emotional Scene Handling',
          'Style Development',
        ],
      },
      {
        title: 'Final Project',
        weeks: '7 weeks',
        topics: [
          'Project Development',
          'Pre-production',
          'Shooting Period',
          'Post-production',
        ],
      },
    ],
    instructors: [
      {
        name: 'Sarah Anderson',
        role: 'Lead Instructor',
        experience: '15+ years in film direction',
        awards: 'Multiple international film festival awards',
        image: '/images/instructors/sarah-anderson.jpg',
      },
      {
        name: 'Michael Chen',
        role: 'Technical Director',
        experience: '12 years in cinematography',
        awards: 'Best Cinematography Award 2022',
        image: '/images/instructors/michael-chen.jpg',
      },
    ],
    facilities: [
      {
        name: 'Professional Film Studio',
        description: 'State-of-the-art film studio with professional lighting and sound equipment',
        image: '/images/facilities/studio.jpg',
      },
      {
        name: 'Post-production Suite',
        description: 'Modern editing rooms equipped with industry-standard software',
        image: '/images/facilities/post-production.jpg',
      },
    ],
    faqs: [
      {
        question: 'Do I need prior experience in filmmaking?',
        answer: 'While prior experience is beneficial, our course is designed to accommodate beginners who are passionate about film direction. We start with the fundamentals and progressively move to advanced concepts.',
      },
      {
        question: 'What equipment will I have access to?',
        answer: 'Students have access to professional-grade cameras, lighting equipment, sound gear, and post-production facilities. All equipment needed for coursework is provided by the academy.',
      },
      {
        question: 'Will I get to direct my own film?',
        answer: "Yes! The course culminates in a final project where you'll direct your own short film with support from our instructors and access to our professional equipment.",
      },
    ],
  },
  {
    id: 2,
    title: 'Cinematography',
    duration: '4 months',
    price: 3999.99,
    description: 'Master the technical and creative aspects of cinematography. Learn about lighting, camera movement, composition, and color theory.',
    longDescription: 'Immerse yourself in the art and science of cinematography. This comprehensive course covers everything from camera operations to advanced lighting techniques. Learn to create stunning visuals and develop your unique visual style under the guidance of industry professionals.',
    topics: [
      'Camera Operations',
      'Lighting Techniques',
      'Color Grading',
      'Shot Composition',
      'Equipment Handling',
    ],
    startDate: '2024-05-15',
    spotsLeft: 5,
    curriculum: [
      {
        title: 'Camera Fundamentals',
        weeks: '3 weeks',
        topics: [
          'Camera Types and Functions',
          'Lens Selection and Usage',
          'Camera Movement Techniques',
          'Digital Imaging Basics',
        ],
      },
      {
        title: 'Lighting Design',
        weeks: '4 weeks',
        topics: [
          'Natural and Artificial Lighting',
          'Three-Point Lighting Setup',
          'Location Lighting Challenges',
          'Creative Lighting Effects',
        ],
      },
      {
        title: 'Composition and Framing',
        weeks: '3 weeks',
        topics: [
          'Rule of Thirds',
          'Dynamic Composition',
          'Frame Dynamics',
          'Visual Storytelling',
        ],
      },
      {
        title: 'Color Theory',
        weeks: '2 weeks',
        topics: [
          'Color Psychology',
          'Color Grading Techniques',
          'Color Correction',
          'Look Development',
        ],
      },
      {
        title: 'Advanced Techniques',
        weeks: '4 weeks',
        topics: [
          'Steadicam Operations',
          'Drone Cinematography',
          'High-Speed Filming',
          'Special Effects Photography',
        ],
      },
    ],
    instructors: [
      {
        name: 'David Rodriguez',
        role: 'Lead Cinematographer',
        experience: '20+ years in cinematography',
        awards: 'Emmy Award winner for Outstanding Cinematography',
        image: '/images/instructors/david-rodriguez.jpg',
      },
      {
        name: 'Emily Zhang',
        role: 'Lighting Director',
        experience: '15 years in lighting design',
        awards: 'Best Cinematography at Sundance Film Festival',
        image: '/images/instructors/emily-zhang.jpg',
      },
    ],
    facilities: [
      {
        name: 'Camera Lab',
        description: 'Fully equipped camera testing and practice facility with the latest digital cinema cameras',
        image: '/images/facilities/camera-lab.jpg',
      },
      {
        name: 'Lighting Studio',
        description: 'Professional lighting studio with a comprehensive range of lighting equipment',
        image: '/images/facilities/lighting-studio.jpg',
      },
    ],
    faqs: [
      {
        question: 'What cameras will I learn to use?',
        answer: 'You will get hands-on experience with professional cinema cameras including ARRI, RED, and Sony professional cameras. We ensure you are comfortable with both digital and traditional film equipment.',
      },
      {
        question: 'Is there a final project?',
        answer: 'Yes, you will work as the Director of Photography on several short film projects, culminating in a final showcase piece that demonstrates your technical and creative abilities.',
      },
      {
        question: 'What job opportunities are available after the course?',
        answer: 'Graduates often find work as camera operators, cinematographers, lighting technicians, or camera assistants in film, television, and commercial production.',
      },
    ],
  },
  {
    id: 3,
    title: 'Screenwriting',
    duration: '3 months',
    price: 2999.99,
    description: 'Develop your storytelling skills and learn the craft of screenwriting. From concept to final draft, learn how to write compelling scripts.',
    fullDescription: 'Our comprehensive screenwriting course is designed to transform your creative ideas into professional screenplays. Through hands-on workshops, expert mentorship, and practical assignments, you\'ll master the art of visual storytelling and develop the skills needed to craft compelling narratives for film and television.',
    topics: [
      'Story Structure',
      'Character Development',
      'Dialogue Writing',
      'Script Formatting',
      'Scene Construction',
    ],
    startDate: '2024-07-01',
    spotsLeft: 12,
    instructor: {
      name: 'Sarah Mitchell',
      role: 'Lead Screenwriting Instructor',
      bio: 'Award-winning screenwriter with over 15 years of industry experience. Former writer for HBO and Netflix original series.',
      image: '/instructors/sarah-mitchell.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'Foundations of Screenwriting',
        topics: [
          'Understanding screenplay format and structure',
          'The three-act structure',
          'Creating compelling hooks',
          'Scene fundamentals'
        ]
      },
      {
        week: 2,
        title: 'Character Creation & Development',
        topics: [
          'Character archetypes and subversion',
          'Writing character backgrounds',
          'Character arcs and transformation',
          'Creating character relationships'
        ]
      },
      {
        week: 3,
        title: 'Dialogue & Scene Writing',
        topics: [
          'Writing natural dialogue',
          'Subtext in conversations',
          'Scene transitions',
          'Action and description'
        ]
      },
      {
        week: 4,
        title: 'Story Development',
        topics: [
          'Plot development',
          'Subplot integration',
          'Building tension',
          'Story pacing'
        ]
      },
      {
        week: 5,
        title: 'Advanced Techniques',
        topics: [
          'Non-linear storytelling',
          'Genre conventions',
          'Theme development',
          'Visual storytelling'
        ]
      },
      {
        week: 6,
        title: 'Script Workshop & Revision',
        topics: [
          'Script analysis',
          'Revision techniques',
          'Feedback implementation',
          'Final draft preparation'
        ]
      }
    ],
    requirements: [
      'Basic understanding of storytelling concepts',
      'Proficiency in written English',
      'Access to a computer with screenwriting software',
      'Commitment to complete writing assignments',
      'Ability to participate in group workshops'
    ],
    benefits: [
      'Professional screenplay formatting skills',
      'Portfolio of completed script works',
      'Industry networking opportunities',
      'One-on-one mentorship sessions',
      'Access to exclusive screenwriting software',
      'Certificate of completion'
    ],
    faqs: [
      {
        question: 'Do I need prior screenwriting experience?',
        answer: 'No prior screenwriting experience is required. However, a basic understanding of storytelling concepts and good written communication skills are beneficial.'
      },
      {
        question: 'What software will I need?',
        answer: 'We provide access to professional screenwriting software (Final Draft) as part of the course. You\'ll just need a computer with internet access.'
      },
      {
        question: 'How much time should I commit weekly?',
        answer: 'Students should expect to commit 15-20 hours per week, including classes, workshops, and writing assignments.'
      },
      {
        question: 'Will I complete a full screenplay?',
        answer: 'Yes, by the end of the course, you will have completed at least one full short film screenplay and the first act of a feature film screenplay.'
      }
    ]
  },
];

export default function CourseDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('curriculum');
  const [showApplication, setShowApplication] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: '',
  });

  const courseDetails = courses.find(c => c.id === parseInt(params.id));

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
        education: '',
        experience: '',
        motivation: '',
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

  if (!courseDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you are looking for does not exist.</p>
          <button
            onClick={() => router.push('/academy')}
            className="inline-flex items-center px-6 py-3 text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Academy
          </button>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center justify-center space-x-2 text-red-400 mb-8 animate-[float_3s_ease-in-out_infinite]">
              <button
                onClick={() => router.push('/academy')}
                className="inline-flex items-center text-sm font-medium hover:text-red-500 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Academy
              </button>
              <span>/</span>
              <span>Courses</span>
              <span>/</span>
              <span className="text-white/70">{courseDetails.title}</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              {courseDetails.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed mx-auto">
              {courseDetails.fullDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-lg font-semibold text-white">{courseDetails.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Start Date</p>
                <p className="text-lg font-semibold text-white">
                  {new Date(courseDetails.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Price</p>
                <p className="text-lg font-semibold text-white">${courseDetails.price.toFixed(2)}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-400">Spots Left</p>
                <p className="text-lg font-semibold text-white">{courseDetails.spotsLeft} spots</p>
              </div>
            </div>

            <button
              onClick={() => setShowApplication(true)}
              className="group relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 flex items-center">
                Apply Now
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 mb-16 border-b border-gray-200">
            {['curriculum', 'instructors', 'facilities', 'requirements', 'benefits', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 relative ${
                  activeTab === tab
                    ? 'text-red-600'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-100 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div className="grid gap-10">
              {courseDetails.curriculum.map((week, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="p-10">
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          Week {index + 1}: {week.title}
                        </h3>
                        <p className="text-red-600 font-medium text-lg">{week.topics.join(', ')}</p>
                      </div>
                      <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-600 font-bold text-2xl group-hover:bg-red-100 transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                    <ul className="grid gap-5">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start text-gray-600 text-lg">
                          <svg className="w-6 h-6 text-red-500 mr-4 mt-1 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Instructors Tab */}
          {activeTab === 'instructors' && (
            <div className="grid md:grid-cols-2 gap-10">
              {courseDetails.instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{instructor.name}</h3>
                    <p className="text-red-600 font-medium text-lg mb-6">{instructor.role}</p>
                    <p className="text-gray-600 text-lg mb-3">{instructor.experience}</p>
                    <p className="text-gray-600 text-lg">{instructor.awards}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="grid md:grid-cols-2 gap-10">
              {courseDetails.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                    <p className="text-gray-600 text-lg">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Requirements</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <ul className="space-y-4">
                  {courseDetails.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <ul className="space-y-4">
                  {courseDetails.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {courseDetails.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <button
                    onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 bg-white rounded-2xl text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-xl font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                        selectedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {selectedFaq === index && (
                    <div className="px-8 py-6 bg-white rounded-b-2xl -mt-2 text-lg text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-2xl w-full animate-[float_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Apply for {courseDetails.title}</h2>
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
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
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
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Motivation Statement
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
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