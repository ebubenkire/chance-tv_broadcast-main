'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information Collection',
      content: [
        'Personal Information: We collect information that you provide directly to us, including name, email address, phone number, and professional details when you apply for positions or contact us.',
        'Usage Data: We automatically collect certain information about your device and how you interact with our website.',
        'Cookies: We use cookies and similar tracking technologies to enhance your experience on our platform.'
      ]
    },
    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      content: [
        'To process your job applications and maintain your candidate profile',
        'To communicate with you about opportunities and respond to your inquiries',
        'To improve our website and services',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'We may share your information with hiring managers and relevant team members',
        'Service providers who assist in our operations may have access to your information',
        'We may disclose information if required by law or to protect our rights'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your data',
        'Regular security assessments and updates to maintain data protection',
        'Employee training on data privacy and security practices',
        'Incident response procedures in place'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate or incomplete data',
        'Request deletion of your personal information',
        'Opt-out of certain data processing activities',
        'Lodge complaints with relevant supervisory authorities'
      ]
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: [
        'We retain your information as long as necessary to fulfill the purposes outlined in this policy',
        'Job application data is retained according to legal requirements and business needs',
        'You can request deletion of your data subject to legal obligations'
      ]
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      content: [
        'Your information may be transferred to and processed in different countries',
        'We ensure appropriate safeguards are in place for international transfers',
        'Compliance with applicable data protection laws for cross-border transfers'
      ]
    },
    {
      id: 'changes',
      title: 'Changes to Privacy Policy',
      content: [
        'We may update this privacy policy from time to time',
        'Significant changes will be notified to you',
        'Continued use of our services constitutes acceptance of changes'
      ]
    }
  ];

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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated Banner */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">Last Updated: March 15, 2024</p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-2">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contents</h2>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-red-50 text-gray-600 hover:text-red-500'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <ul className="space-y-4">
                      {section.content.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <svg
                            className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-3xl p-8 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About Our Privacy Policy?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our privacy practices or would like to exercise your rights,
                  please don't hesitate to contact our Privacy Team.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors duration-300"
                  >
                    Contact Privacy Team
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
                    href="/faq"
                    className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                  >
                    View FAQ
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 