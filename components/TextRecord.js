import React from 'react';
import { StructuredText } from 'react-datocms';

export default function TextRecord({ details }) {
  return (
    <div id={details.navigationId} className="py-20 px-10 flex justify-center">
      <div className="prose prose-gray w-screen">
        <StructuredText data={details.content} />
      </div>
    </div>
  );
}
