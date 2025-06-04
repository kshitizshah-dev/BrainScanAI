import React from 'react';

const DemoStep = ({ stepTitle, description, imageUrl }) => {
  return (
    <div className="max-w-300 mx-auto my-8 p-6 bg-gray-600 shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-2 pl-5 pt-3">{stepTitle}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <img 
        src={imageUrl} 
        alt={stepTitle} 
        className="w-full h-auto rounded-xl border"
      />
    </div>
  );
};

export default DemoStep;
