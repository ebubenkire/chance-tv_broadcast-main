'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample contestants data
const CONTESTANTS = [
  {
    id: 1,
    name: "Sarah Johnson",
    project: "The Last Symphony",
    category: "Drama",
    description: "A heartfelt story about a musician's final performance.",
    image: "/voting/contestant1.jpg",
    votes: 1234
  },
  {
    id: 2,
    name: "Michael Chen",
    project: "Beyond the Horizon",
    category: "Sci-Fi",
    description: "An epic journey through space and time.",
    image: "/voting/contestant2.jpg",
    votes: 982
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    project: "Urban Legends",
    category: "Documentary",
    description: "Uncovering the truth behind city myths.",
    image: "/voting/contestant3.jpg",
    votes: 1567
  }
];

const CATEGORIES = ["All", "Drama", "Sci-Fi", "Documentary", "Comedy", "Action"];
const VOTE_PACKAGES = [
  { votes: 1, price: 1.99 },
  { votes: 5, price: 8.99 },
  { votes: 10, price: 15.99 },
  { votes: 25, price: 35.99 },
  { votes: 50, price: 65.99 }
];

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
  email: string;
}

export default function VotingContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContestant, setSelectedContestant] = useState<typeof CONTESTANTS[0] | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<typeof VOTE_PACKAGES[0] | null>(null);
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const filteredContestants = CONTESTANTS.filter(contestant => {
    const matchesCategory = selectedCategory === "All" || contestant.category === selectedCategory;
    const matchesSearch = contestant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contestant.project.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Validate the payment information
    // 2. Process the payment through your payment gateway
    // 3. Record the votes in your database
    // 4. Update the UI
    console.log('Payment submitted:', {
      contestant: selectedContestant?.name,
      package: selectedPackage,
      ...formData
    });
    // Show success message
    alert('Thank you for your vote! Your payment has been processed successfully.');
    setSelectedContestant(null);
    setSelectedPackage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
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
              Vote for Your Favorite
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Support talented filmmakers and help them bring their vision to life.
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
                placeholder="Search contestants..."
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

      {/* Contestants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContestants.map(contestant => (
              <div
                key={contestant.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={contestant.image}
                    alt={contestant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{contestant.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                        {contestant.category}
                      </span>
                      <span className="px-2 py-1 bg-black/50 text-white text-sm rounded-full">
                        {contestant.votes.toLocaleString()} votes
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{contestant.project}</h4>
                  <p className="text-gray-600 mb-4">{contestant.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Current Position: #{contestant.id}
                    </div>
                    <button 
                      onClick={() => setSelectedContestant(contestant)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Vote Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredContestants.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600">No contestants found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Voting Modal */}
      {selectedContestant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Vote for Contestant</h2>
                <button
                  onClick={() => {
                    setSelectedContestant(null);
                    setSelectedPackage(null);
                  }}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{selectedContestant.name}</h3>
                <p className="text-gray-600">{selectedContestant.project}</p>
                <p className="text-gray-600">Current Votes: {selectedContestant.votes.toLocaleString()}</p>
              </div>
            </div>

            {!selectedPackage ? (
              <div className="p-6 space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Vote Package</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {VOTE_PACKAGES.map(pkg => (
                    <button
                      key={pkg.votes}
                      onClick={() => setSelectedPackage(pkg)}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 transition-colors text-left"
                    >
                      <div className="text-xl font-bold text-gray-900">{pkg.votes} Votes</div>
                      <div className="text-red-500 font-semibold">${pkg.price}</div>
                      <div className="text-gray-500 text-sm">${(pkg.price / pkg.votes).toFixed(2)} per vote</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter cardholder name"
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
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      maxLength={19}
                      value={formData.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setFormData(prev => ({ ...prev, cardNumber: formatted }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        required
                        maxLength={5}
                        value={formData.expiryDate}
                        onChange={(e) => {
                          const formatted = formatExpiryDate(e.target.value);
                          setFormData(prev => ({ ...prev, expiryDate: formatted }));
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        required
                        maxLength={4}
                        value={formData.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          setFormData(prev => ({ ...prev, cvv: value }));
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Selected Package:</div>
                      <div className="font-semibold">{selectedPackage.votes} Votes</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Total Amount:</div>
                      <div className="text-xl font-bold text-gray-900">${selectedPackage.price}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(null)}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Pay & Vote Now
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 