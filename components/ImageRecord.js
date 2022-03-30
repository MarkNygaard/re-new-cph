import React, { useState } from 'react';
import Image from 'next/image';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ImageRecord({ details }) {
  return (
    <div className="bg-gray-800 py-20 px-10">
      <div className="flex justify-center">
        <BlurImage details={details} />
      </div>
    </div>
  );
}

function BlurImage({ details }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group">
      <div className="relative aspect-square h-[32rem] w-full overflow-hidden rounded-lg">
        <Image
          alt=""
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
