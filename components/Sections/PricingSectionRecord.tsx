import React, { useEffect } from 'react';
import PricingCard from './PricingCard';
import { Table } from './Table';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PricingSectionRecord({ details }) {
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
      className={classNames('py-20 px-2 md:px-10 justify-center flex', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className={classNames('max-w-6xl w-full', {
          'bg-gray-800': details.backgroundColor === true,
        })}
      >
        <h1
          className={classNames('mb-20 text-center text-6xl font-bold', {
            'text-white': details.backgroundColor === true,
          })}
        >
          {details.title}
        </h1>
        <div className="wrap mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div className="grid grid-cols-1 gap-4 p-2">
            {details.pricingModules.map((record, index) =>
              record.__typename === 'PricingCardRecord' ? (
                <PricingCard details={record} key={index} />
              ) : null
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 p-2">
            {details.pricingModules.map((record, index) =>
              record.__typename === 'TableRecord' ? (
                <Table record={record} details={details} key={index} />
              ) : null
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
