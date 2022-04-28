import React from 'react';
import { StructuredText } from 'react-datocms';

export default function TextRecord({ details }) {
  return (
    <div id={details.navigationId} className="flex justify-center py-20 px-10">
      <div className="prose prose-gray w-screen">
        <StructuredText data={details.content} />
      </div>
    </div>
  );
}
