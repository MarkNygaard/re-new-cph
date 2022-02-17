import React from 'react';
import TextImageRecord from './TextImageRecord';
import HeaderRecord from './HeaderRecord';
import ImageRecord from './ImageRecord';
import PricingSectionRecord from './PricingSectionRecord';
import TextRecord from './TextRecord';

export default function CousesSection({ details }) {
  if (details.__typename === 'HeaderRecord') {
    return <HeaderRecord details={details} />;
  } else if (details.__typename === 'TextImageRecord') {
    return <TextImageRecord details={details} />;
  } else if (details.__typename === 'ImageRecord') {
    return <ImageRecord details={details} />;
  } else if (details.__typename === 'PricingSectionRecord') {
    return <PricingSectionRecord details={details} />;
  } else if (details.__typename === 'TextRecord') {
    return <TextRecord details={details} />;
  }
  return <></>;
}
