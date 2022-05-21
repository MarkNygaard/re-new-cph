import React, { useEffect } from 'react';
import { Image } from 'react-datocms';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ImageRecord({ details }) {
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
      className={classNames('py-20 px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className="flex justify-center"
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={details.image.responsiveImage} />
      </motion.div>
    </div>
  );
}
