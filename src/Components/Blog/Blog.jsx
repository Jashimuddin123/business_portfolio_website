import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (indexOfLastBlog < blogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-900 mt-16 mb-12  text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-400"
          >
            <figure>
              <img className="w-full h-56 object-cover" src={blog.image} alt={blog.title} />
            </figure>
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm mb-2">
                <span className="bg-white rounded-md px-2 py-2">{blog.dateIcon}</span>
                <span>{blog.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description.substring(0, 100)}...</p>
              <div className="mt-4">
                <Link to={`/blog/${blog.id}`} className="text-blue-600 font-medium hover:underline">
                  See More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastBlog >= blogs.length}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
