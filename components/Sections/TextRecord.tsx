import React, { useEffect } from 'react';
import { StructuredText, Image } from 'react-datocms';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TextRecord({ details }) {
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
      className={classNames(
        'py-20 px-10 align-center flex items-center justify-center overflow-hidden',
        {
          'bg-gray-800': details.backgroundColor === true,
        }
      )}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
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
      </motion.div>
    </div>
  );
}
