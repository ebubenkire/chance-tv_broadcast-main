'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense, lazy } from 'react';

// Dynamically import heavy components
const ServiceCard = dynamic(() => import('./components/ServiceCard'), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 rounded-xl h-64"></div>
  ),
});

const FEATURED_PRODUCTIONS = [
  {
    id: 1,
    title: "The Last Symphony",
    description: "A gripping drama about a renowned conductor's final performance and the secrets that threaten to destroy everything.",
    image: "/productions/symphony.jpg",
    genre: "Drama",
    duration: "2h 15m"
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    description: "An epic sci-fi adventure that explores humanity's first interstellar journey to save Earth.",
    image: "/productions/horizon.jpg",
    genre: "Sci-Fi",
    duration: "2h 30m"
  },
  {
    id: 3,
    title: "Urban Legends",
    description: "A documentary series unveiling the truth behind the most infamous urban myths and legends.",
    image: "/productions/legends.jpg",
    genre: "Documentary",
    duration: "Series"
  }
].map(prod => ({
  ...prod,
  image: prod.image + '?w=800&q=75' // Optimize image loading with parameters
}));

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Academy Graduate, now Director",
    quote: "ChanceTv Studios' academy transformed my passion for storytelling into a successful career in directing.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Actor, 'The Last Symphony'",
    quote: "The professional environment and world-class production quality at ChanceTv Studios are unmatched.",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Production Manager",
    quote: "Joining the ChanceTv team was the best decision of my career. The opportunities for growth are endless.",
    image: "/testimonials/emma.jpg"
  }
];

const ACHIEVEMENTS = [
  { number: "50+", label: "Productions Completed" },
  { number: "1000+", label: "Academy Graduates" },
  { number: "25", label: "Industry Awards" },
  { number: "100M+", label: "Global Viewers" }
];

// Constants moved outside component to prevent re-creation
const NAVIGATION_ROUTES = ['/about', '/events', '/streaming', '/productions', '/academy', '/auditions', '/careers', '/auth'];

export default function Home() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Simplified navigation handler without loading states
  const handleNavigation = useCallback((path: string) => {
    startTransition(() => {
      router.push(path);
    });
  }, [router, startTransition]);

  // Optimized scroll handler
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Prefetch routes
  useEffect(() => {
    NAVIGATION_ROUTES.forEach(route => {
      router.prefetch(route);
    });
  }, [router]);

  // Memoize handlers with useCallback
  const handleImageLoad = useCallback((e: any) => {
    e.target.classList.remove('opacity-0');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Optimized video loading */}
      <section className="relative min-h-[100vh] sm:h-[92vh] bg-black overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 bg-black animate-pulse"></div>
        }>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
            poster="/showreel-poster.jpg"
          >
            <source src="/showreel.mp4" type="video/mp4" />
          </video>
        </Suspense>

        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
        
        {/* Reduced animation complexity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        </div>

        {/* Content with optimized rendering */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="w-full max-w-5xl relative py-8 sm:py-0">
            {/* Main content with reduced animations */}
            <div className="relative px-4 sm:px-8 py-8 sm:py-12 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
                Where{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Imagination
                </span>
                {" "}Meets{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Reality
                </span>
              </h1>

              {/* Optimized buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button
                  onClick={() => handleNavigation('/about')}
                  className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Explore Our World
                </button>
                <button
                  onClick={() => handleNavigation('/events')}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Upcoming Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Productions - Optimized image loading */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTIONS.map((production) => (
              <Link
                key={production.id}
                href={`/productions/${production.id}`}
                prefetch={true}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative h-64">
                  <Image
                    src={production.image}
                    alt={production.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={production.id === 1}
                    loading={production.id === 1 ? "eager" : "lazy"}
                    className="object-cover opacity-0 transition-opacity duration-200"
                    onLoad={handleImageLoad}
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{production.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{production.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Code split and lazy loaded */}
      <Suspense fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-xl"></div>
          ))}
        </div>
      }>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service cards with reduced props */}
          <ServiceCard
            title="Film Academy"
            description="Learn from industry professionals"
            onClick={() => handleNavigation('/academy')}
          />
          {/* ... other ServiceCards ... */}
        </div>
      </Suspense>

      {/* Testimonials - Optimized image loading */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gray-800/50 p-6 rounded-xl">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    loading="lazy"
                    className="object-cover opacity-0 transition-opacity duration-200"
                    onLoad={handleImageLoad}
                    quality={75}
                  />
                </div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-red-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


