import React from 'react';
import { Image } from 'react-datocms';
import classNames from 'classnames';

export default function ImageRecord({ details }) {
  return (
    <div
      className={classNames('py-20 px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <div className="flex justify-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={details.image.responsiveImage} />
      </div>
    </div>
  );
}
