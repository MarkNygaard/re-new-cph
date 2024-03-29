import React, { useEffect } from 'react';
import classNames from 'classnames';
import type { FileField } from 'lib/graphql';
import { Image } from 'react-datocms';
import TextRecord from './TextRecord';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GridRecord({ details }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView, animation]);

  return (
    <div
      ref={ref}
      id={details.navigationId}
      className={classNames('flex justify-center py-20 px-0 md:px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className={classNames('grid', {
          [`grid-cols-${details.mobileColumns as String}`]:
            details.mobileColumns,
          [`md:grid-cols-${details.tabletColumns as String}`]:
            details.tabletColumns,
          [`xl:grid-cols-${details.desktopColumns as String}`]:
            details.desktopColumns,
          [`gap-${details.gap as String}`]: details.gap,
          'md:w-10/12': details.fullWidth === false,
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
                    'relative flex shrink-0 self-center overflow-hidden object-fill',
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
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
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
      </motion.div>
    </div>
  );
}
