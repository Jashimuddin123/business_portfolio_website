const OurProject = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mt-1   text-center mb-12">Our Latest Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/KcxvxtWQ/Whats-App-Image-2025-02-12-at-16-41-07-6093f7f8.jpg"
              alt="Modern Website Design"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Modern Website Design Landing Pages</h2>
              <p className="text-gray-600">
                A card component has a figure, a body part, and inside the body, there are title and actions parts.
              </p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/pvvpDF0M/Whats-App-Image-2025-02-12-at-16-41-22-4a49573f.jpg"
              alt="Digital Marketing SEO"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Digital Marketing SEO Web Optimizations</h2>
              <p className="text-gray-600">
                A card component has a figure, a body part, and inside the body, there are title and actions parts.
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/qMVy7Gh0/Whats-App-Image-2025-02-12-at-16-40-43-be8f73fb.jpg"
              alt="SEO Techniques"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">SEO Techniques That Ranked Regina Divorce Lawyer #1</h2>
              <p className="text-gray-600">
                A card component has a figure, a body part, and inside the body, there are title and actions parts.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurProject;
  