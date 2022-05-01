import React from 'react';
import TextImageRecord from './Sections/TextImageRecord';
import HeaderRecord from './Sections/HeaderRecord';
import ImageRecord from './Sections/ImageRecord';
import PricingSectionRecord from './Sections/PricingSectionRecord';
import TextRecord from './Sections/TextRecord';
import YoutubeVideoRecord from './Sections/YoutubeVideoRecord';
import GridRecord from './Sections/GridRecord';

export default function PageSection({ details }) {
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
  } else if (details.__typename === 'YoutubeVideoRecord') {
    return <YoutubeVideoRecord details={details} />;
  } else if (details.__typename === 'GridRecord') {
    return <GridRecord details={details} />;
  }
  return <></>;
}
