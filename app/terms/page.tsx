'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FC } from 'react';

const Terms: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('general');

  const sections = [
    { id: 'general', name: 'General Terms' },
    { id: 'services', name: 'Services' },
    { id: 'intellectual', name: 'Intellectual Property' },
    { id: 'privacy', name: 'Privacy & Data' },
    { id: 'liability', name: 'Liability' },
    { id: 'termination', name: 'Termination' }
  ];

  const termsData = {
    general: {
      title: 'General Terms and Conditions',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using ChanceTV Studios services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.'
        },
        {
          subtitle: 'Changes to Terms',
          text: 'We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.'
        },
        {
          subtitle: 'User Eligibility',
          text: 'You must be at least 18 years old and capable of forming a binding contract to use our services. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization.'
        }
      ]
    },
    services: {
      title: 'Services and Products',
      content: [
        {
          subtitle: 'Service Description',
          text: 'ChanceTV Studios provides production services, studio rentals, equipment rentals, and post-production facilities. Services are subject to availability and may require advance booking.'
        },
        {
          subtitle: 'Pricing and Payment',
          text: 'Prices for services are as quoted on our website or in custom proposals. Payment terms and methods will be specified in service agreements or at the time of booking.'
        },
        {
          subtitle: 'Service Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any part of our services with or without notice. We will not be liable if any part of the service becomes unavailable.'
        }
      ]
    },
    intellectual: {
      title: 'Intellectual Property Rights',
      content: [
        {
          subtitle: 'Content Ownership',
          text: 'Clients retain ownership of their original content. ChanceTV Studios maintains ownership of our production processes, methodologies, and proprietary technologies.'
        },
        {
          subtitle: 'License Grant',
          text: 'By using our services, you grant us the right to use your content as necessary to provide our services and for promotional purposes, subject to confidentiality agreements.'
        },
        {
          subtitle: 'Trademark Protection',
          text: 'The ChanceTV Studios name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ChanceTV Studios or its affiliates.'
        }
      ]
    },
    privacy: {
      title: 'Privacy and Data Protection',
      content: [
        {
          subtitle: 'Data Collection',
          text: 'We collect and process personal data as outlined in our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided is accurate.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement reasonable security measures to protect your data but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'Our services may integrate with third-party services. Your use of such services is subject to their respective terms and privacy policies.'
        }
      ]
    },
    liability: {
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Disclaimer',
          text: 'Our services are provided "as is" without any warranty of any kind. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.'
        },
        {
          subtitle: 'Limitation of Damages',
          text: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.'
        },
        {
          subtitle: 'Force Majeure',
          text: 'We are not liable for any failure to perform due to causes beyond our reasonable control including, but not limited to, acts of God, war, pandemic, or equipment failure.'
        }
      ]
    },
    termination: {
      title: 'Account Termination',
      content: [
        {
          subtitle: 'Termination Rights',
          text: 'We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms or for any other reason at our discretion.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We may retain your data for legal, regulatory, or technical requirements even after account termination.'
        }
      ]
    }
  };

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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated Banner */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-600 text-sm text-center">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Section Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto">
            {Object.entries(termsData).map(([sectionId, section]) => (
              <div
                key={sectionId}
                className={`mb-12 ${activeSection === sectionId ? '' : 'hidden'}`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.content.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these terms, please contact our legal team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors duration-300"
                >
                  Contact Legal Team
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

export default Terms; 