import React, { useEffect, useState } from "react";
// import TopSection from "../SharedPage/TopSection";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* <TopSection title="Our Blog" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {selectedBlogs.map((blog, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-500 text-sm flex items-center">
              {blog.dateIcon} {blog.date}
            </p>
            <p className="mt-2 text-gray-700">{blog.description}</p>
            <button className="text-blue-600 underline">Read more</button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Previous Page
        </button>

        <span className="px-4 py-2 bg-blue-500 text-white rounded">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Blog;
