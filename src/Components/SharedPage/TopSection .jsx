// TopSection.jsx
import React from 'react';

const TopSection = ({title}) => {
  return (
    <section className="w-full h-72 bg-gradient-to-r from-blue-500 via-purple-00 to-green-500 flex items-center justify-center text-center text-white">
      <div className="p-6">
        <h1 className="text-5xl md:text-5xl font-bold">
        {title}
        </h1>
        
       
      </div>
    </section>
  );
};

export default TopSection;
