import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(details) {
  const [isOpen, setIsOpen] = useState('false');
  return (
    <div>
      <nav className="fixed  z-10 w-full">
        <div className="absolute z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="mobile-menu-button inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-offset-2"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={isOpen ? 'hidden' : 'flex'}>
          <div className="flex h-screen flex-col bg-white shadow-2xl">
            <div className="w-full space-y-1 bg-white px-3 pt-12 pb-3 md:w-48">
              {details.details.pageDetail.map((navigation) => {
                return navigation.navigationId ? (
                  <div className="rounded hover:bg-gray-100">
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href={'#' + navigation.navigationId}
                      className="block py-2 px-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                      details={navigation}
                      key={navigation.id}
                    >
                      {navigation.navigationId}
                    </a>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
            <div className="mt-auto bg-white p-3">
              <div className="w-full rounded-md bg-gray-300 p-2 text-center text-xl text-gray-800 hover:bg-gray-400">
                <a
                  href="https://salonbook.one/?fakeyourbeauty#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BESTIL TID
                </a>
              </div>
            </div>
          </div>
          <div
            className="grow bg-black opacity-10"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      </nav>
    </div>
  );
}
