'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

const FAQ: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'careers', name: 'Careers & Applications' },
    { id: 'productions', name: 'Productions & Projects' },
    { id: 'services', name: 'Services & Rentals' },
    { id: 'technical', name: 'Technical Support' },
    { id: 'privacy', name: 'Privacy & Security' }
  ];

  const faqData = {
    general: [
      {
        id: 'what-is-chancetv',
        question: 'What is ChanceTV Studios?',
        answer: 'ChanceTV Studios is a leading production company specializing in creating high-quality content across various media formats. We offer comprehensive services including film production, studio rentals, equipment rentals, and post-production facilities.'
      },
      {
        id: 'locations',
        question: 'Where are your studios located?',
        answer: 'Our main studios are located in Los Angeles, with additional facilities in New York, Atlanta, and Miami. Each location is equipped with state-of-the-art technology and professional staff.'
      },
      {
        id: 'contact-info',
        question: 'How can I contact your team?',
        answer: 'You can reach us through our contact page, by email at info@chancetv.com, or by phone at (555) 123-4567. For specific departments, please visit our Contact page for detailed information.'
      }
    ],
    careers: [
      {
        id: 'application-process',
        question: 'What is your hiring process?',
        answer: 'Our hiring process typically includes: 1) Online application submission, 2) Portfolio/resume review, 3) Initial screening call, 4) Technical/skills assessment if applicable, 5) Team interviews, 6) Final decision and offer.'
      },
      {
        id: 'internships',
        question: 'Do you offer internships?',
        answer: 'Yes, we offer paid internships in various departments throughout the year. Internship opportunities are posted on our Careers page, and we typically recruit for summer, fall, and spring programs.'
      },
      {
        id: 'remote-work',
        question: 'Do you offer remote work opportunities?',
        answer: 'Yes, we offer remote, hybrid, and on-site positions depending on the role and department. Each job posting specifies the work arrangement available for that position.'
      }
    ],
    productions: [
      {
        id: 'current-projects',
        question: 'What types of productions do you work on?',
        answer: 'We work on a diverse range of productions including feature films, television series, documentaries, commercials, and digital content. Our portfolio spans various genres and formats.'
      },
      {
        id: 'collaboration',
        question: 'How can I pitch a project or collaborate?',
        answer: 'For project pitches or collaboration inquiries, please submit your proposal through our Productions page. Include a detailed synopsis, budget estimate, and relevant materials.'
      },
      {
        id: 'production-timeline',
        question: 'What is your typical production timeline?',
        answer: 'Production timelines vary based on project scope and complexity. Generally, pre-production takes 2-3 months, production 1-6 months, and post-production 2-4 months.'
      }
    ],
    services: [
      {
        id: 'studio-rental',
        question: 'How do I rent a studio space?',
        answer: 'Studio rentals can be booked through our Studio Rental page. Choose your preferred location, date, and duration. Our team will contact you to confirm details and provide a quote.'
      },
      {
        id: 'equipment-rental',
        question: 'What equipment is available for rent?',
        answer: 'We offer a wide range of professional equipment including cameras, lighting, sound gear, and grip equipment. Visit our Equipment Rental page for a complete inventory and pricing.'
      },
      {
        id: 'post-production',
        question: 'What post-production services do you offer?',
        answer: 'Our post-production services include editing, color grading, sound mixing, VFX, and motion graphics. We provide both individual services and complete post-production packages.'
      }
    ],
    technical: [
      {
        id: 'technical-requirements',
        question: 'What are your technical specifications?',
        answer: 'Our studios support various formats including 4K/8K recording, HDR, and surround sound. Detailed technical specifications for each studio and equipment are available upon request.'
      },
      {
        id: 'support-hours',
        question: 'When is technical support available?',
        answer: 'Technical support is available 24/7 for active productions. For general inquiries, our support team is available Monday-Friday, 9 AM - 6 PM PST.'
      }
    ],
    privacy: [
      {
        id: 'data-protection',
        question: 'How do you protect my data?',
        answer: 'We implement industry-standard security measures to protect your data. This includes encryption, secure servers, and regular security audits. For more details, please review our Privacy Policy.'
      },
      {
        id: 'content-rights',
        question: 'Who owns the rights to produced content?',
        answer: 'Content rights are determined by the production agreement. Typically, clients retain ownership of their content while we maintain rights to our production services and facilities.'
      }
    ]
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredQuestions = Object.entries(faqData).flatMap(([category, questions]) =>
    activeCategory === category || searchQuery
      ? questions.filter(q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70" />
        
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-20 border-b">
        <div className="container mx-auto px-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl pl-12 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            />
            <svg
              className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories and Questions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchQuery('');
                }}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredQuestions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-8">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                      expandedQuestions.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedQuestions.includes(item.id) && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredQuestions.length === 0 && (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or selecting a different category
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors duration-300"
                >
                  Contact Support
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                >
                  View Privacy Policy
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 