import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(details) {
  const [isOpen, setIsOpen] = useState('false');
  return (
    <div>
      <nav className="fixed  w-full z-10">
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
          <div className="bg-gray-100 px-3 pt-12 pb-3 space-y-1 w-48 h-screen shadow-2xl">
            {details.details.pageDetail.map((navigation) => {
              return navigation.navigationId ? (
                <a
                  href={'#' + navigation.navigationId}
                  className="text-gray-800 block py-2 px-2 text-sm hover:text-gray-600 font-bold"
                  details={navigation}
                  key={navigation.id}
                >
                  {navigation.navigationId}
                </a>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
