import React from 'react';

export default function PricingCard({ details }) {
  return (
    <div className="w-full rounded-lg bg-gray-600 p-6">
      <div className="mb-4 text-xl font-semibold uppercase text-white">
        {details.title}
      </div>
      <p className="text-white">
        <span>{details.price}</span>
      </p>
      <ul>
        {details.description.split('*').map((bullet, index) => (
          <li key={index} className="my-2 text-sm text-white">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
