import React from 'react';
import TextImageRecord from './TextImageRecord';
import HeaderRecord from './HeaderRecord';
import LearnSectionRecord from './LearnSectionRecord';
import PricingSectionRecord from './PricingSectionRecord';

export default function CousesSection({ details }) {
  console.log(details);
  if (details.__typename === 'HeaderRecord') {
    return <HeaderRecord details={details} />;
  } else if (details.__typename === 'TextImageRecord') {
    return <TextImageRecord details={details} />;
  } else if (details.__typename === 'LearnSectionRecord') {
    return <LearnSectionRecord details={details} />;
  } else if (details.__typename === 'PricingSectionRecord') {
    return <PricingSectionRecord details={details} />;
  }
  return <></>;
}
