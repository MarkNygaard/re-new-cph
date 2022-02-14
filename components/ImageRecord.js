import React from 'react';
import Image from 'next/image';

export default function ImageRecord({ details }) {
  return (
    <div className="bg-gray-800 py-20 px-10">
      <div className="flex justify-center">
        <Image
          width={details.image.width}
          height={details.image.height}
          src={details.image.url}
          alt={details.imageTitle}
        />
      </div>
    </div>
  );
}
