import React, { useState } from 'react';
import Image from 'next/image';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TextImageRecord({ details }) {
  if (details.imageLocation == 'RIGHT') {
    return (
      <div id={details.navigationId} className="bg-gray-800 py-20 px-10">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center">
          <div className="grow p-4 md:w-[60%]">
            <h2 className="text-4xl font-bold text-gray-200">
              {details.smallTitle}
              <span className="mb-10 block text-6xl font-bold text-yellow-200">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-l max-w-lg whitespace-pre-wrap text-gray-200">
              {details.description}
            </p>
          </div>
          <div className="grow object-center p-4">
            <BlurImage details={details} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id={details.navigationId} className="bg-gray-800 py-20 px-10">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center">
          <div className="grow object-center p-4">
            <BlurImage details={details} />
          </div>
          <div className="grow p-4 md:w-[60%]">
            <h2 className="text-4xl font-bold text-gray-200">
              {details.smallTitle}
              <span className="mb-10 block text-6xl font-bold text-yellow-200">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-l max-w-lg whitespace-pre-wrap text-gray-200">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function BlurImage({ details }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group">
      <div className="relative aspect-square h-80 w-full overflow-hidden rounded-lg">
        <Image
          alt={details.littleTitle + details.bigTitle}
          src={details.image.url}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
