import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LetsTalk from "../SharedPage/letsTalk";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((item) => item.id === Number(id)); // Ensure `id` is a number
        setBlog(foundBlog);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blog) {
    return (
      <p className="text-center text-red-500 text-lg font-semibold mt-10">
        Blog not found
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <p className="border border-blue-500 text-blue-500 my-4 w-48 mx-auto text-center rounded-full px-4 py-2 text-sm font-semibold">
        {blog.title}
      </p>
      <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-800">
        {blog.subTitle}
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm md:text-lg">
          <p className="font-semibold text-blue-900">
            Post By: <span className="text-gray-500 font-normal">{blog.name}</span>
          </p>
          <p className="font-semibold text-blue-900">
            Published: <span className="text-gray-500 font-normal">{blog.date}</span>
          </p>
        </div>

        <div className="mt-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed text-lg">{blog.description}</p>
        </div>

        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Benefits</h2>
          <p className="text-gray-700">{blog.benifit}</p>

          <h3 className="text-lg font-semibold text-gray-800">Keyword Rankings</h3>
          <p className="text-gray-700">{blog.Keyword_rankings}</p>

          <h3 className="text-lg font-semibold text-gray-800">Better User Experience</h3>
          <p className="text-gray-700">{blog.Better_User_Experience}</p>

          <h3 className="text-lg font-semibold text-gray-800">Increased Organic Traffic</h3>
          <p className="text-gray-700">{blog.Increased_Organic_Traffic}</p>

          <h3 className="text-lg font-semibold text-gray-800">Approach Content</h3>
          <p className="text-gray-700">{blog.Approach_Content}</p>

          <h3 className="text-lg font-semibold text-gray-800">Basic Information</h3>
          <p className="text-gray-700">{blog.basic_information}</p>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 text-sm mt-4">
          <span className="text-lg">{blog.dateIcon}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md">{blog.date}</span>
        </div>
      </div>

      <div className="mt-10">
        <LetsTalk />
      </div>
    </div>
  );
};

export default BlogDetails;
