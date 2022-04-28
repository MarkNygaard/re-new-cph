import React from 'react';
import PricingCard from './PricingCard';

export default function PricingSectionRecord({ details }) {
  return (
    <div id={details.navigationId} className="max-w-100 py-20 px-10">
      <h1 className="mb-20 text-center text-8xl font-bold text-white">
        {details.title}
      </h1>
      <div className="wrap mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-4">
        {details.pricingCard.map((card, index) => (
          <PricingCard details={card} key={index} />
        ))}
      </div>
    </div>
  );
}
