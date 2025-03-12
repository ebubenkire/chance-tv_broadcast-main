'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';

// Sample equipment data - in a real app, this would come from an API or database
const EQUIPMENT = [
  {
    id: 1,
    title: "ARRI ALEXA Mini LF",
    description: "Professional digital cinema camera with a large-format sensor, perfect for feature films and high-end productions.",
    image: "/equipment/alexa-mini.jpg",
    category: "Cameras",
    brand: "ARRI",
    features: ["4.5K Resolution", "Large Format Sensor", "ARRIRAW"],
    rate: "$850/day",
    availability: "Available",
    condition: "Excellent"
  },
  {
    id: 2,
    title: "Aputure 600D Pro",
    description: "Powerful daylight LED fixture with precise color accuracy and weather resistance for both studio and location shoots.",
    image: "/equipment/aputure-600d.jpg",
    category: "Lighting",
    brand: "Aputure",
    features: ["600W Output", "Bowens Mount", "DMX Control"],
    rate: "$150/day",
    availability: "Available",
    condition: "New"
  },
  {
    id: 3,
    title: "Sennheiser MKH 416",
    description: "Industry-standard short shotgun microphone for film, TV, and outdoor broadcasting with superior directional pickup.",
    image: "/equipment/mkh-416.jpg",
    category: "Audio",
    brand: "Sennheiser",
    features: ["Supercardioid/Lobe", "Low Noise", "Weather Resistant"],
    rate: "$75/day",
    availability: "Booked",
    condition: "Good"
  }
];

const CATEGORIES = ["All", "Cameras", "Lenses", "Lighting", "Audio", "Grip", "Electric"];
const AVAILABILITY = ["All", "Available", "Booked", "Maintenance"];

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipment = EQUIPMENT.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesAvailability = selectedAvailability === "All" || item.availability === selectedAvailability;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAvailability && matchesSearch;
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
              Equipment Rental
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional cameras, lighting, and audio equipment for any production need.
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
                placeholder="Search equipment..."
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

      {/* Equipment Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map(item => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full">
                        {item.brand}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map(feature => (
                      <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>
                      <span className="font-semibold text-lg text-gray-900">{item.rate}</span>
                      <span className="ml-2 text-gray-500">• {item.condition}</span>
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full ${
                        item.availability === "Available" ? "bg-green-100 text-green-800" :
                        item.availability === "Booked" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No equipment found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 