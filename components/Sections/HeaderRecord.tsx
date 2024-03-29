import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export default function HeaderRecord({ details }) {
  return (
    <div
      id={details.navigationId}
      className={classNames('flex flex-col items-center py-20 px-2 md:px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <h1 className="text-center text-7xl font-bold text-gray-900">
        {details.bigTitle}
        <span className="mb-10 block text-5xl text-gray-600 ">
          {details.smallTitle}
        </span>
      </h1>
      <p className="max-w-lg text-lg text-gray-500">{details.description}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 rounded-md bg-gray-300 py-3 px-4 text-xl text-gray-800 hover:bg-gray-400"
      >
        <a href={details.buttonLink} target="_blank" rel="noreferrer">
          {details.buttonText}
        </a>
      </motion.button>
    </div>
  );
}
