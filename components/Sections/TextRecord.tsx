import React from 'react';
import { StructuredText, Image } from 'react-datocms';
import classNames from 'classnames';

export default function TextRecord({ details }) {
  return (
    <div
      id={details.navigationId}
      className={classNames(
        'py-20 px-10 align-center flex items-center justify-center overflow-hidden',
        {
          'bg-gray-800': details.backgroundColor === true,
        }
      )}
    >
      <div
        className={classNames('prose sm:w-full', {
          'prose-invert': details.backgroundColor === true,
          'prose-gray': details.backgroundColor === false,
        })}
      >
        <StructuredText
          data={details.content}
          renderBlock={({ record }) => {
            if (
              record.__typename === 'RtImageRecord' &&
              (record as any).rtImage &&
              (record as any).rtImage?.responsiveImage
            ) {
              return (
                <div className="flex justify-center">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image
                    data={(record.rtImage as any).responsiveImage as any}
                  />
                </div>
              );
            }
          }}
        />
      </div>
    </div>
  );
}
