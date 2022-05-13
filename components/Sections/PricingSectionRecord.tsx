import React from 'react';
import PricingCard from './PricingCard';
import { Table } from './Table';
import classNames from 'classnames';

export default function PricingSectionRecord({ details }) {
  return (
    <div
      id={details.navigationId}
      className={classNames('py-20 px-10 justify-center flex', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <div
        className={classNames('max-w-6xl w-full p-6', {
          'bg-gray-800': details.backgroundColor === true,
        })}
      >
        <h1
          className={classNames('mb-20 mt-5 text-center text-6xl font-bold', {
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
      </div>
    </div>
  );
}
