import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

const VirtualModel = () => {
  const [customizing, setCustomizing] = useState(false);

  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Virtual Model</h3>
        <button
          onClick={() => setCustomizing(!customizing)}
          className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
        >
          <Sliders className="h-4 w-4 mr-1" />
          Customize
        </button>
      </div>

      <div className="aspect-[3/4] bg-white rounded-lg shadow-inner mb-4">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600"
            alt="Virtual Model"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {customizing && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height
            </label>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Build
            </label>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualModel;