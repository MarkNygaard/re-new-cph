import React from 'react';

export default function PricingCard({ details }) {
  return (
    <div className="w-full max-w-sm rounded-lg bg-gray-500 p-6">
      <div className="mb-4 text-xl font-semibold uppercase text-white">
        {details.title}
      </div>
      <p className="text-gray-100">
        <span>{details.price}</span>
      </p>
      <ul>
        {details.description.split('*').map((bullet, index) => (
          <li key={index} className="my-2 text-sm text-gray-100">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
