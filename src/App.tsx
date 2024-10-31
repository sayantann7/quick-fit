import React from 'react';
import { Search, ShoppingCart, User, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import VirtualModel from './components/VirtualModel';
import RecommendedItems from './components/RecommendedItems';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Virtual Model Section */}
          <div className="col-span-12 lg:col-span-4">
            <VirtualModel />
          </div>

          {/* Product Grid Section */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Trending Near You</h2>
              <p className="text-gray-600">Discover fashion available for instant delivery</p>
            </div>
            <ProductGrid />
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Look</h2>
          <RecommendedItems />
        </div>
      </main>
    </div>
  );
}

export default App;