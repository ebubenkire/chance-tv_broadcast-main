'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WorkshopRegistrationForm from './WorkshopRegistrationForm';

// Sample workshops data - in a real app, this would come from an API or database
const WORKSHOPS = [
  {
    id: 1,
    title: "Advanced Camera Operation",
    description: "Master professional camera techniques, from composition to advanced movement. Hands-on training with industry-standard equipment.",
    image: "/workshops/camera.jpg",
    category: "Technical",
    level: "Advanced",
    duration: "2 Days",
    instructor: "David Miller",
    equipment: ["ARRI Alexa", "RED Gemini", "Sony Venice"],
    topics: ["Camera Movement", "Lens Selection", "Lighting Setup"],
    nextDate: "2024-04-15",
    price: "$799",
    spots: 8
  },
  {
    id: 2,
    title: "Directing Masterclass",
    description: "Learn the art of directing from pre-production to final cut. Focus on storytelling, actor direction, and visual language.",
    image: "/workshops/directing.jpg",
    category: "Creative",
    level: "Intermediate",
    duration: "3 Days",
    instructor: "Maria Garcia",
    equipment: ["Production Set", "Monitoring Equipment"],
    topics: ["Script Analysis", "Actor Direction", "Shot Planning"],
    nextDate: "2024-05-01",
    price: "$1,199",
    spots: 12
  },
  {
    id: 3,
    title: "Sound Design Essentials",
    description: "Comprehensive workshop on audio production, from field recording to post-production sound design.",
    image: "/workshops/sound.jpg",
    category: "Technical",
    level: "Beginner",
    duration: "2 Days",
    instructor: "James Wilson",
    equipment: ["Pro Tools Setup", "Field Recorders", "Microphones"],
    topics: ["Field Recording", "Sound Mixing", "Audio Post"],
    nextDate: "2024-04-20",
    price: "$599",
    spots: 10
  }
];

const CATEGORIES = ["All", "Technical", "Creative", "Production", "Post-Production"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

export default function WorkshopsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState<typeof WORKSHOPS[0] | null>(null);

  const filteredWorkshops = WORKSHOPS.filter(workshop => {
    const matchesCategory = selectedCategory === "All" || workshop.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || workshop.level === selectedLevel;
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
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
              Workshops & Training
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn from industry professionals and master the art of filmmaking through hands-on experience.
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
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {LEVELS.map(level => (
                    <option key={level} value={level}>{level}</option>
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
                placeholder="Search workshops..."
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

      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map(workshop => (
              <div
                key={workshop.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{workshop.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                        {workshop.category}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full">
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Equipment Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.equipment.map(item => (
                        <span key={item} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map(topic => (
                        <span key={topic} className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t">
                    <div>
                      <div className="font-semibold text-lg text-gray-900 mb-1">
                        {workshop.price}
                      </div>
                      <div className="text-sm">
                        Next Date: {new Date(workshop.nextDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-green-600">
                        {workshop.spots} spots available
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedWorkshop(workshop)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No workshops found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Form Modal */}
      {selectedWorkshop && (
        <WorkshopRegistrationForm
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
} 