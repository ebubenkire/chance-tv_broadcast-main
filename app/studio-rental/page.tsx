'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';

// Sample studio data - in a real app, this would come from an API or database
const STUDIOS = [
  {
    id: 1,
    title: "Main Sound Stage",
    description: "A massive 10,000 sq ft sound stage with 40ft ceilings, perfect for large-scale productions and set builds.",
    image: "/studios/main-stage.jpg",
    size: "10,000 sq ft",
    type: "Sound Stage",
    features: ["Sound Proofing", "Green Screen", "Loading Dock"],
    rate: "$5,000/day",
    availability: "Available"
  },
  {
    id: 2,
    title: "Recording Studio A",
    description: "State-of-the-art recording studio with isolation booth and premium acoustic treatment.",
    image: "/studios/studio-a.jpg",
    size: "800 sq ft",
    type: "Recording Studio",
    features: ["Pro Tools HD", "Mixing Console", "Vocal Booth"],
    rate: "$1,200/day",
    availability: "Booked"
  },
  {
    id: 3,
    title: "Green Screen Studio",
    description: "Purpose-built green screen facility with lighting grid and cyclorama wall.",
    image: "/studios/green-screen.jpg",
    size: "2,500 sq ft",
    type: "Green Screen",
    features: ["Lighting Grid", "Cyclorama", "Makeup Room"],
    rate: "$2,500/day",
    availability: "Available"
  }
];

const STUDIO_TYPES = ["All", "Sound Stage", "Recording Studio", "Green Screen", "Photography Studio", "Rehearsal Space"];
const AVAILABILITY = ["All", "Available", "Booked", "Maintenance"];

const StudioRental: NextPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudios = STUDIOS.filter(studio => {
    const matchesType = selectedType === "All" || studio.type === selectedType;
    const matchesAvailability = selectedAvailability === "All" || studio.availability === selectedAvailability;
    const matchesSearch = studio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         studio.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesAvailability && matchesSearch;
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
              Studio Rental
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional studios and stages equipped for your next production, from intimate recordings to large-scale shoots.
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
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {STUDIO_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
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
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {AVAILABILITY.map(status => (
                    <option key={status} value={status}>{status}</option>
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
                placeholder="Search studios..."
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

      {/* Studios Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudios.map(studio => (
              <div
                key={studio.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={studio.image}
                    alt={studio.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{studio.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                        {studio.type}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full">
                        {studio.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{studio.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {studio.features.map(feature => (
                      <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="font-semibold text-lg text-gray-900">
                      {studio.rate}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full ${
                        studio.availability === "Available" ? "bg-green-100 text-green-800" :
                        studio.availability === "Booked" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {studio.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStudios.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No studios found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default StudioRental; 