import React from "react";

const technologies = [
  { name: "PHP", img: "https://i.ibb.co/2Y6QqV94/php-f965d48b.png" },
  { name: "React", img: "https://i.ibb.co.com/wrsfWksm/react-removebg-preview.webp" },
  { name: "Javascript", img: "https://i.ibb.co.com/DD3jTxgP/Java-Script-logo.png" },
  { name: "MongoDB", img: "https://i.ibb.co.com/C52qYG5q/mongo-DB-removebg-preview.webp" },
  { name: "Tailwind CSS", img: "https://i.ibb.co.com/Tqhbndh4/tailwind-removebg-preview.png" },
  { name: "Bootstrap", img: "https://i.ibb.co.com/8D7B1f8p/800px-Bootstrap-logo.png" },
  { name: "Next.js", img: "https://i.ibb.co.com/9kcdk5C2/nsxt2-removebg-preview.webp" },
  { name: "GitHub", img: "https://i.ibb.co.com/jd6Yn6Q/github.webp" },
];

const TechnologyUses = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Technologies We Use</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:bg-gray-200 transition-all duration-300"
          >
            <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain" />
            <h2 className="text-lg font-semibold mt-4">{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyUses;
