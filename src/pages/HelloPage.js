import React from 'react';
import '../css/pages.css';

function HelloPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-5xl tracking-wider italic font-bold text-gray-700 my-6 colorful-text">hello!</div>
      <div className="my-4 tracking-wide font-semibold text-blue-700 text-xl italic">Build Website a bit day by day.</div>
    </div>
  );
}

export default HelloPage
