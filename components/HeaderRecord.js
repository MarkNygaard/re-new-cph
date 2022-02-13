import React from 'react';

export default function HeaderRecord({ details }) {
  return (
    <div className="bg-white-200 py-20 px-10 flex flex-col items-center">
      <h1 className="text-7xl text-center text-gray-900 font-bold">
        {details.bigTitle}
        <span className="block text-gray-600 text-5xl mb-10 ">
          {details.smallTitle}
        </span>
      </h1>
      <p className="max-w-lg text-gray-500 text-lg">{details.description}</p>
      <a
        href={details.buttonLink}
        target="_blank"
        rel="noreferrer"
        className="rounded-md bg-gray-300 mt-8 py-3 px-4 text-gray-800 text-xl hover:bg-gray-400"
      >
        {details.buttonText}
      </a>
    </div>
  );
}
