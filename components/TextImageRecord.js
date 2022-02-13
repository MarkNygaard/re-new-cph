import React from 'react';
import Image from 'next/image';

export default function TextImageRecord({ details }) {
  if (details.imageLocation == 'RIGHT') {
    return (
      <div className="bg-gray-800 py-20 px-10">
        <div className="flex flex-col max-w-6xl md:flex-row md:items-center mx-auto">
          <div className="md:w-[60%] grow p-4">
            <h2 className="text-4xl text-gray-200 font-bold">
              {details.smallTitle}
              <span className="block text-yellow-200 text-6xl font-bold mb-10">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-gray-200 text-l max-w-lg">
              {details.description}
            </p>
          </div>
          <div className="grow p-4 object-center">
            <Image
              width={details.image.width}
              height={details.image.height}
              src={details.image.url}
              alt={details.littleTitle + details.bigTitle}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-800 py-20 px-10">
        <div className="flex flex-col max-w-6xl md:flex-row md:items-center mx-auto">
          <div className="grow p-4 object-center">
            <Image
              width={details.image.width}
              height={details.image.height}
              src={details.image.url}
              alt={details.littleTitle + details.bigTitle}
            />
          </div>
          <div className="md:w-[60%] grow p-4">
            <h2 className="text-4xl text-gray-200 font-bold">
              {details.smallTitle}
              <span className="block text-yellow-200 text-6xl font-bold mb-10">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-gray-200 text-l max-w-lg">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
