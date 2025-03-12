'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample consulting services data
const SERVICES = [
  {
    id: 1,
    title: "Production Strategy",
    description: "Expert guidance on project planning, budgeting, and resource allocation. We help you make informed decisions to maximize your production's potential.",
    image: "/consulting/strategy.jpg",
    category: "Strategy",
    expertise: ["Project Planning", "Budget Optimization", "Resource Management"],
    benefits: ["Cost Efficiency", "Risk Mitigation", "Timeline Optimization"],
    rate: "Starting at $200/hour",
    duration: "4-8 hours",
    deliverables: ["Strategic Plan", "Budget Analysis", "Resource Schedule"]
  },
  {
    id: 2,
    title: "Technical Consultation",
    description: "In-depth technical advice on equipment selection, workflow optimization, and technical setup for your production needs.",
    image: "/consulting/technical.jpg",
    category: "Technical",
    expertise: ["Equipment Selection", "Workflow Design", "Technical Setup"],
    benefits: ["Optimized Workflow", "Equipment ROI", "Technical Excellence"],
    rate: "Starting at $150/hour",
    duration: "2-6 hours",
    deliverables: ["Technical Specifications", "Workflow Document", "Equipment List"]
  },
  {
    id: 3,
    title: "Creative Development",
    description: "Creative consultation to help shape your vision, from concept development to visual storytelling strategies.",
    image: "/consulting/creative.jpg",
    category: "Creative",
    expertise: ["Story Development", "Visual Style", "Creative Direction"],
    benefits: ["Unique Vision", "Audience Engagement", "Brand Alignment"],
    rate: "Starting at $175/hour",
    duration: "3-5 hours",
    deliverables: ["Creative Brief", "Style Guide", "Concept Deck"]
  }
];

const CATEGORIES = ["All", "Strategy", "Technical", "Creative", "Operations", "Marketing"];

interface ConsultingFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  preferredDate: string;
}

export default function ConsultingContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [formData, setFormData] = useState<ConsultingFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    preferredDate: ''
  });

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Consultation request submitted:', { service: selectedService?.title, ...formData });
    // Show success message
    alert('Your consultation request has been submitted! We will contact you shortly.');
    setSelectedService(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
              Consulting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert guidance to help you make informed decisions and achieve your production goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 shadow-md sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.expertise.map(item => (
                        <span key={item} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map(benefit => (
                        <span key={benefit} className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map(item => (
                        <span key={item} className="px-2 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t">
                    <div className="font-semibold text-lg text-gray-900">
                      {service.rate}
                    </div>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No services found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Consultation Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Book Consultation</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{selectedService.title}</h3>
                <p className="text-gray-600">{selectedService.rate}</p>
                <p className="text-gray-600">Typical Duration: {selectedService.duration}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="film">Film</option>
                    <option value="television">Television</option>
                    <option value="commercial">Commercial</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5000">Less than $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value=">50000">More than $50,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please describe your project and specific areas you need help with"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 