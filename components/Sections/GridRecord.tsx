import React from 'react';
import classNames from 'classnames';
import type { FileField } from 'lib/graphql';
import { Image } from 'react-datocms';
import TextRecord from './TextRecord';

export default function GridRecord({ details }) {
  return (
    <div className="flex justify-center">
      <div
        className={classNames('grid grid-cols-1', {
          [`lg:grid-cols-${details.columns as String}`]: details.columns,
          [`gap-${details.gap as String}`]: details.gap,
          'w-10/12': details.fullWidth === false,
        })}
      >
        {details.sections.map((section) => {
          return (
            <div key={section.id} className="relative">
              {section.__typename === 'ImageRecord' ? (
                <div
                  className={classNames(
                    'flex shrink-0 self-center overflow-hidden object-fill',
                    {
                      'h-52': details.height === 'Small',
                      'h-96': details.height === 'Medium',
                      'h-132': details.height === 'Large',
                    }
                  )}
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image
                    data={(section.image as FileField).responsiveImage as any}
                    pictureClassName="object-cover"
                  />
                </div>
              ) : section.__typename === 'TextRecord' ? (
                <div
                  className={classNames(
                    'bg-gray-300 overflow-hidden justify-center flex',
                    {
                      'h-52': details.height === 'Small',
                      'h-96': details.height === 'Medium',
                      'h-132': details.height === 'Large',
                    }
                  )}
                >
                  <TextRecord details={section} />
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
