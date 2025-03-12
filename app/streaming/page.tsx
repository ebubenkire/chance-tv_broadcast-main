'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const videos = [
  {
    id: 1,
    title: 'The Last Chapter',
    thumbnail: '/images/last-chapter.jpg',
    duration: '2h 15m',
    genre: 'Drama',
    description: 'A compelling story about family, redemption, and second chances.',
    url: 'https://example.com/videos/last-chapter',
  },
  {
    id: 2,
    title: 'City Lights',
    thumbnail: '/images/city-lights.jpg',
    duration: '45m',
    genre: 'Drama Series',
    description: 'Follow the intertwining lives of urban professionals in this gripping series.',
    url: 'https://example.com/videos/city-lights',
  },
  {
    id: 3,
    title: 'Behind the Scenes: The Last Chapter',
    thumbnail: '/images/bts-last-chapter.jpg',
    duration: '30m',
    genre: 'Documentary',
    description: 'Get an exclusive look at the making of our latest feature film.',
    url: 'https://example.com/videos/bts-last-chapter',
  },
  {
    id: 4,
    title: 'Short Film Collection: Volume 1',
    thumbnail: '/images/short-films.jpg',
    duration: '1h 30m',
    genre: 'Various',
    description: 'A curated collection of our best short films from emerging directors.',
    url: 'https://example.com/videos/short-films-vol1',
  },
];

export default function Streaming() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    // TODO: Implement actual authentication check
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const handleVideoSelect = (videoId: number) => {
    if (!isAuthenticated) {
      return;
    }
    setSelectedVideo(videoId);
    setShowPlayer(true);
  };

  const selectedVideoDetails = videos.find(video => video.id === selectedVideo);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to access our streaming content.
          </p>
          <Link
            href="/auth"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {showPlayer && selectedVideoDetails ? (
        <div className="fixed inset-0 bg-black z-50">
          <div className="h-full flex flex-col">
            {/* Video Player */}
            <div className="flex-1 bg-black">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white">
                  {/* Placeholder for actual video player */}
                  <p className="text-xl">Playing: {selectedVideoDetails.title}</p>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="bg-gray-900 text-white p-4">
              <div className="container mx-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">{selectedVideoDetails.title}</h2>
                    <p className="text-gray-400">{selectedVideoDetails.duration}</p>
                  </div>
                  <button
                    onClick={() => setShowPlayer(false)}
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Streaming Library</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleVideoSelect(video.id)}
              >
                <div className="h-48 bg-gray-200">
                  {/* Video thumbnail placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <span className="text-gray-600">Video Thumbnail</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{video.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{video.genre}</span>
                  </div>
                  <p className="text-gray-700">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 