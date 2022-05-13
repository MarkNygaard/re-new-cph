import React from 'react';
import { Image, StructuredText } from 'react-datocms';
import classNames from 'classnames';

export default function TextImageRecord({ details }) {
  return (
    <div
      className={classNames('py-20 px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <div
        className={classNames('flex flex-col md:flex-row max-w-6xl mx-auto', {
          'flex-col-reverse md:flex-row-reverse':
            details.imageLocation === 'LEFT',
        })}
      >
        <article
          className={classNames('grow prose p-4 max-w-none', {
            'prose-invert text-gray-200': details.backgroundColor === true,
          })}
        >
          <StructuredText
            data={details.content}
            renderBlock={({ record }) => {
              if (
                record.__typename === 'RtImageRecord' &&
                (record as any).image &&
                (record as any).image?.responsiveImage
              ) {
                return (
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image
                      data={(record.image as any).responsiveImage as any}
                    />
                  </div>
                );
              }
            }}
          />
        </article>
        {details.image?.responsiveImage ? (
          <div className="mx-auto md:mb-auto">
            <div
              className={classNames('relative aspect-square h-96 grow p-4', {
                'rounded-full': details.imageStyle === 'Round',
                'rounded-xl': details.imageStyle === 'Rounded Corners',
              })}
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image data={details.image?.responsiveImage} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
