import React from 'react';
import { Image } from 'react-datocms';

export default function ImageRecord({ details }) {
  return (
    <div className="bg-gray-800 py-20 px-10">
      <div className="flex justify-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={details.image.responsiveImage} />
      </div>
    </div>
  );
}
