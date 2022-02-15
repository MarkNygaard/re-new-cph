import React from 'react';

export default function PricingCard({ details }) {
  return (
    <div className="w-full bg-gray-500 max-w-sm rounded-lg p-6">
      <h3 className="text-white text-xl mb-4 uppercase">{details.title}</h3>
      <p>
        <span>{details.price}</span>
      </p>
      <ul>
        {details.description.split('*').map((bullet, index) => (
          <li key={index} className="text-gray-700 my-2 text-sm">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
