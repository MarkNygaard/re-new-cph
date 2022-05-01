import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar(details) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-10 w-full">
        <div className="absolute z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="mobile-menu-button inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-offset-2"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
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
        <div className={isOpen ? 'flex' : 'hidden'}>
          <div className="flex h-screen w-full flex-col bg-white shadow-2xl md:w-3/12 xl:w-2/12">
            <div className="w-full space-y-1 bg-white px-3 pt-12 pb-3">
              {details.details.pageDetail.map((navigation) => {
                return navigation.navigationId ? (
                  <div
                    key={navigation.id}
                    className="rounded hover:bg-gray-100"
                  >
                    <a
                      href={'#' + navigation.navigationId}
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-md block py-2 px-2 font-medium text-gray-600 hover:text-gray-900"
                    >
                      {navigation.navigationId}
                    </a>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
            <div className="mt-auto bg-white px-3 pb-3">
              <div className="text-semibold w-full rounded-md bg-slate-500 p-2 text-center text-xl text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-600 focus-visible:ring active:bg-slate-700">
                <Link href="https://salonbook.one/?fakeyourbeauty#/">
                  <a target="_blank" rel="noreferrer">
                    BOOK TID
                  </a>
                </Link>
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
