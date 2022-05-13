import React, { useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import classNames from 'classnames';

export default function YoutubeVideoRecord({ details }) {
  return (
    <div
      className={classNames('flex justify-center py-10', {
        'bg-gray-800': details.backgroundColor === true,
        'bg-gray-200': details.backgroundColor === false,
      })}
    >
      <div className="mx-auto w-full max-w-4xl p-8">
        <div
          className={classNames('shadow-x1 rounded-lg  p-2 sm:p-4', {
            'bg-gray-200': details.backgroundColor === true,
            'bg-white': details.backgroundColor === false,
          })}
        >
          <LiteYouTubeEmbed id={details.link.providerUid} title="Play" />
        </div>
      </div>
    </div>
  );
}
