'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample services data - in a real app, this would come from an API or database
const SERVICES = [
  {
    id: 1,
    title: "Professional Video Editing",
    description: "Expert video editing services with industry-standard software. From rough cuts to final delivery, we ensure your story is told perfectly.",
    image: "/post-production/editing.jpg",
    category: "Editing",
    software: ["Adobe Premiere Pro", "DaVinci Resolve", "Final Cut Pro"],
    features: ["4K Support", "Multi-cam Editing", "Motion Graphics"],
    rate: "Starting at $75/hour",
    turnaround: "3-5 business days",
    portfolio: ["Feature Films", "Commercials", "Music Videos"]
  },
  {
    id: 2,
    title: "Color Grading & Correction",
    description: "Professional color grading to enhance your footage and create the perfect mood. HDR and SDR deliverables available.",
    image: "/post-production/color.jpg",
    category: "Color",
    software: ["DaVinci Resolve", "Adobe SpeedGrade"],
    features: ["HDR Support", "LUT Creation", "Remote Sessions"],
    rate: "Starting at $100/hour",
    turnaround: "2-4 business days",
    portfolio: ["Feature Films", "TV Series", "Corporate"]
  },
  {
    id: 3,
    title: "Visual Effects & Animation",
    description: "High-end VFX and animation services. From simple clean-up to complex 3D integration, we bring your vision to life.",
    image: "/post-production/vfx.jpg",
    category: "VFX",
    software: ["Adobe After Effects", "Nuke", "Cinema 4D"],
    features: ["3D Integration", "Particle Effects", "Rotoscoping"],
    rate: "Starting at $150/hour",
    turnaround: "5-10 business days",
    portfolio: ["Film VFX", "TV Series", "Commercials"]
  }
];

const CATEGORIES = ["All", "Editing", "Color", "VFX", "Sound", "Motion Graphics", "Animation"];
const TURNAROUND = ["All", "1-2 Days", "3-5 Days", "5-10 Days", "Custom"];

export default function PostProductionContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTurnaround, setSelectedTurnaround] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesTurnaround = selectedTurnaround === "All" || service.turnaround.includes(selectedTurnaround.replace(" Days", ""));
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.software.some(sw => sw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTurnaround && matchesSearch;
  });

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
              Post Production
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional editing, color grading, VFX, and more to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 shadow-md sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
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

              <div className="relative">
                <select
                  value={selectedTurnaround}
                  onChange={(e) => setSelectedTurnaround(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {TURNAROUND.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                        {service.turnaround}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Software & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.software.map(sw => (
                        <span key={sw} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map(feature => (
                        <span key={feature} className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Portfolio</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.portfolio.map(item => (
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
                    <Link 
                      href="/contact" 
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Get Quote
                    </Link>
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
    </div>
  );
} 