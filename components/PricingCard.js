import React from "react";

export default function PricingCard({ details }) {
  return (
    <div className="w-full max-w-sm rounded-lg bg-gray-500 p-6">
      <h3 className="mb-4 text-xl uppercase text-white">{details.title}</h3>
      <p>
        <span>{details.price}</span>
      </p>
      <ul>
        {details.description.split("*").map((bullet, index) => (
          <li key={index} className="my-2 text-sm text-gray-700">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
