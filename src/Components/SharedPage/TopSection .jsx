// TopSection.jsx
import React from 'react';

export const TopSection = ({title}) => {
  return (
    <section className="w-full h-60 bg-[#002A64] flex items-center justify-center text-center text-white">
      <div className="p-6">
        <h1 className="text-5xl md:text-5xl font-bold">
        {title}
        </h1>
        
       
      </div>
    </section>
  );
};

export default TopSection;
