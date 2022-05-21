import React, { useEffect } from 'react';
import { Image, StructuredText } from 'react-datocms';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TextImageRecord({ details }) {
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
      className={classNames('py-20 px-2 md:px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className={classNames('flex flex-col md:flex-row max-w-6xl mx-auto', {
          'flex-col-reverse md:flex-row-reverse':
            details.imageLocation === 'LEFT',
        })}
      >
        <article
          className={classNames('grow prose py-4 px-3 md:px-4 max-w-none', {
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
              className={classNames(
                'relative aspect-square md:h-96 grow md:p-4',
                {
                  'rounded-full': details.imageStyle === 'Round',
                  'rounded-xl': details.imageStyle === 'Rounded Corners',
                }
              )}
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image data={details.image?.responsiveImage} />
            </div>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
