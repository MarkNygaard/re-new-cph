import React from 'react';
import classNames from 'classnames';
import type { FileField } from 'lib/graphql';
import { Image } from 'react-datocms';
import TextRecord from './TextRecord';

export default function GridRecord({ details }) {
  return (
    <div
      className={classNames('flex justify-center py-20 px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <div
        className={classNames('grid', {
          [`grid-cols-${details.mobileColumns as String}`]:
            details.mobileColumns,
          [`md:grid-cols-${details.tabletColumns as String}`]:
            details.tabletColumns,
          [`xl:grid-cols-${details.desktopColumns as String}`]:
            details.desktopColumns,
          [`gap-${details.gap as String}`]: details.gap,
          'w-10/12': details.fullWidth === false,
        })}
      >
        {details.sections.map((section) => {
          return (
            <div
              key={section.id}
              className={classNames('relative', {
                [`order-${section.mobilePosition as String}`]:
                  section.mobilePosition,
                [`md:order-${section.tabletPosition as String}`]:
                  section.tabletPosition,
                [`xl:order-${section.desktopPosition as String}`]:
                  section.desktopPosition,
              })}
            >
              {section.__typename === 'GridImageRecord' ? (
                <div
                  key={section.id}
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
              ) : section.__typename === 'GridTextRecord' ? (
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
