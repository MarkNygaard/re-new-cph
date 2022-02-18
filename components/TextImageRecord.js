import React from "react";
import Image from "next/image";

export default function TextImageRecord({ details }) {
  if (details.imageLocation == "RIGHT") {
    return (
      <div id={details.navigationId} className="bg-gray-800 py-20 px-10">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center">
          <div className="grow p-4 md:w-[60%]">
            <h2 className="text-4xl font-bold text-gray-200">
              {details.smallTitle}
              <span className="mb-10 block text-6xl font-bold text-yellow-200">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-l max-w-lg whitespace-pre-wrap text-gray-200">
              {details.description}
            </p>
          </div>
          <div className="grow object-center p-4">
            <Image
              width={details.image.width}
              height={details.image.height}
              src={details.image.url}
              alt={details.littleTitle + details.bigTitle}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id={details.navigationId} className="bg-gray-800 py-20 px-10">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center">
          <div className="grow object-center p-4">
            <Image
              width={details.image.width}
              height={details.image.height}
              src={details.image.url}
              alt={details.littleTitle + details.bigTitle}
            />
          </div>
          <div className="grow p-4 md:w-[60%]">
            <h2 className="text-4xl font-bold text-gray-200">
              {details.smallTitle}
              <span className="mb-10 block text-6xl font-bold text-yellow-200">
                {details.bigTitle}
              </span>
            </h2>
            <p className="text-l max-w-lg whitespace-pre-wrap text-gray-200">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
