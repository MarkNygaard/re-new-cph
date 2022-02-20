import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function YoutubeVideoRecord({ details }) {
  return (
    <div className="flex justify-center bg-gray-200 py-10">
      <div className="mx-auto w-full max-w-4xl p-8">
        <div className="shadow-x1 rounded-lg bg-white p-2 sm:p-4">
          <LiteYouTubeEmbed id={details.link.providerUid} title="Play" />
        </div>
      </div>
    </div>
  );
}
