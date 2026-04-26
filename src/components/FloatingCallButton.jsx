// components/FloatingCallButton.jsx
"use client";

import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = ({ phoneNumber = "tel:+18052588937" }) => {
  return (
    <div className="fixed right-0 top-1/3 z-50 block lg:hidden">
      <a 
        href={phoneNumber}
        className="flex items-center justify-center bg-blue-600 text-white px-2 py-10 rounded-l-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Call us"
      >
        <div className="relative flex flex-col items-center">
          <Phone size={20} className="mb-2" />
          <div className="text-sm font-medium [writing-mode:vertical-lr] [transform:rotate-180] tracking-wide">
              +1(805)258-8937
          </div>
        </div>
      </a>
    </div>
  );
};

export default FloatingCallButton;