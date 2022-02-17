import React from 'react';
import { StructuredText } from 'react-datocms';

export default function TextRecord({ details }) {
  return (
    <div id={details.navigationId} className="bg-gray-500 py-20 px-10">
      <StructuredText data={details.content} />
    </div>
  );
}
