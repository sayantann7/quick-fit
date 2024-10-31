import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Casual White Blouse',
    price: 399,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400',
    store: 'Fashion Avenue Store',
    distance: '1.2 km',
    deliveryTime: '15 mins',
  },
  {
    id: 2,
    name: 'Black Leather Jacket',
    price: 899,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400',
    store: 'Downtown Fashion',
    distance: '2.5 km',
    deliveryTime: '20 mins',
  },
  {
    id: 3,
    name: 'Denim High-Rise Jeans',
    price: 499,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400',
    store: 'Urban Outfitters',
    distance: '0.8 km',
    deliveryTime: '10 mins',
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="text-xl font-semibold text-indigo-600">₹{product.price}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>{product.store}</span>
              <span className="mx-2">•</span>
              <span>{product.distance}</span>
            </div>
            <div className="mt-4">
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Add to Cart • {product.deliveryTime} delivery
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;