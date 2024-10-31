import React from 'react';
import { ArrowRight } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    name: 'Matching Accessories Set',
    price: 349,
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=300',
  },
  {
    id: 2,
    name: 'Classic White Sneakers',
    price: 599,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300',
  },
  {
    id: 3,
    name: 'Gold Chain Necklace',
    price: 799,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300',
  },
];

const RecommendedItems = () => {
  return (
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {recommendations.map((item) => (
          <div key={item.id} className="flex-none w-64">
            <div className="group relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm font-semibold text-indigo-600">₹{item.price}</p>
              </div>
              <button className="mt-2 flex items-center text-sm text-indigo-600 hover:text-indigo-700">
                View Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;