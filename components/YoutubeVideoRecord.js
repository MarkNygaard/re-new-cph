import React from 'react';

export default function YoutubeVideoRecord({ details }) {
  return (
    <div className="flex justify-center bg-gray-200 py-10">
      <div className="mx-auto w-full max-w-4xl p-8">
        <div className="shadow-x1 rounded-lg bg-white p-2 sm:p-4">
          <iframe
            className="aspect-video w-full"
            src={'https://www.youtube.com/embed/' + details.link.providerUid}
            title="Youtube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard; encrypted-media; gyroscope; picture in picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
