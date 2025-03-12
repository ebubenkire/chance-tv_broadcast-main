'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample production data - in a real app, this would come from an API or database
const PRODUCTIONS = [
  {
    id: 1,
    title: "The Last Symphony",
    description: "A gripping drama about a renowned conductor's final performance and the secrets that threaten to destroy everything.",
    image: "/productions/symphony.jpg",
    genre: "Drama",
    duration: "2h 15m",
    releaseYear: 2024,
    director: "Sarah Johnson",
    status: "In Production"
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    description: "An epic sci-fi adventure that explores humanity's first interstellar journey to save Earth.",
    image: "/productions/horizon.jpg",
    genre: "Sci-Fi",
    duration: "2h 30m",
    releaseYear: 2024,
    director: "Michael Chen",
    status: "Post-Production"
  },
  {
    id: 3,
    title: "Urban Legends",
    description: "A documentary series unveiling the truth behind the most infamous urban myths and legends.",
    image: "/productions/legends.jpg",
    genre: "Documentary",
    duration: "Series",
    releaseYear: 2023,
    director: "Emma Rodriguez",
    status: "Released"
  }
];

const GENRES = ["All", "Drama", "Sci-Fi", "Documentary", "Comedy", "Action"];
const STATUSES = ["All", "In Development", "In Production", "Post-Production", "Released"];

export default function Productions() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProductions = PRODUCTIONS.filter(production => {
    const matchesGenre = selectedGenre === "All" || production.genre === selectedGenre;
    const matchesStatus = selectedStatus === "All" || production.status === selectedStatus;
    const matchesSearch = production.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         production.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesStatus && matchesSearch;
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
              Our Productions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our latest and upcoming productions, from gripping dramas to groundbreaking documentaries.
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
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {GENRES.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
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
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {STATUSES.map(status => (
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
                placeholder="Search productions..."
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

      {/* Productions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProductions.map(production => (
              <Link
                key={production.id}
                href={`/productions/${production.id}`}
                className="block group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={production.image}
                    alt={production.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{production.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full group-hover:bg-red-600 transition-colors duration-300">
                        {production.genre}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full group-hover:bg-black/60 transition-colors duration-300">
                        {production.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">{production.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>
                      <span className="font-semibold">Director:</span> {production.director}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full ${
                        production.status === "Released" ? "bg-green-100 text-green-800 group-hover:bg-green-200" :
                        production.status === "In Production" ? "bg-blue-100 text-blue-800 group-hover:bg-blue-200" :
                        production.status === "Post-Production" ? "bg-purple-100 text-purple-800 group-hover:bg-purple-200" :
                        "bg-gray-100 text-gray-800 group-hover:bg-gray-200"
                      } transition-colors duration-300`}>
                        {production.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProductions.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No productions found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 