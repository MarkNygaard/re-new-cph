import React from 'react';

export default function MainHeading({ record }) {
  return (
    <div>
      <p className="text-4xl font-bold text-gray-200 m-0">{record.title}</p>
      <p className="mb-10 mt-0 block text-6xl font-medium text-yellow-200">
        {record.subtitle}
      </p>
    </div>
  );
}
