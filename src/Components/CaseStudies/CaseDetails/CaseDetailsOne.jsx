import React from "react";

const CaseDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Clothing Manufacturing Website Design</h1>
        <p className="text-lg text-gray-600 mt-4">E-commerce Website Development for Tentree</p>
      </div>

      {/* Image & Project Info Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src="https://i.ibb.co.com/qMVy7Gh0/Whats-App-Image-2025-02-12-at-16-40-43-be8f73fb.jpg"
          alt="Project Preview"
          className="w-full h-auto rounded-lg shadow-xl"
        />
        <div>
          <div className="mb-4">
            <strong className="text-xl font-semibold text-gray-800">Category:</strong>
            <p className="text-lg text-gray-600">Sustainable Clothing and Apparel</p>
          </div>
          <div className="mb-4">
            <strong className="text-xl font-semibold text-gray-800">Client:</strong>
            <p className="text-lg text-gray-600">Tentree</p>
          </div>
          <div className="mb-4">
            <strong className="text-xl font-semibold text-gray-800">Project Type:</strong>
            <p className="text-lg text-gray-600">E-commerce Website Redesign</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
        <p className="text-lg text-gray-700">
          Tentree, a global leader in eco-conscious clothing, partnered with us to revamp their e-commerce website. Our goal was to enhance user experience, amplify their sustainability message, and optimize for conversions and scalability. The redesigned website boasts a mobile-first design, improved product filtering, a dynamic impact tracker, and a dedicated sustainability storytelling section.
        </p>
      </div>

      {/* Challenges Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Challenges</h2>
          <p className="text-lg text-gray-700">
            Tentree's existing website lacked intuitive navigation, clear sustainability messaging, and mobile responsiveness. Additionally, it wasn't scalable for their growing product line and international presence.
          </p>
        </div>
        <img
          src="https://i.ibb.co.com/pvvpDF0M/Whats-App-Image-2025-02-12-at-16-41-22-4a49573f.jpg"
          alt="Challenges"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Solutions Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Solutions</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
          <li>User-Centric Design: Streamlined navigation and improved product discovery.</li>
          <li>Mobile-First Focus: Optimized responsiveness for seamless mobile browsing.</li>
          <li>Enhanced Product Filtering: Advanced filtering and personalized recommendations.</li>
          <li>Sustainability Storytelling: Integrated impact tracker and dedicated sustainability section.</li>
          <li>Performance Optimization: Caching, CDNs, and image optimization for faster load times.</li>
          <li>SEO Integration: Implemented SEO best practices to boost organic search rankings.</li>
        </ul>
      </div>

      {/* Results Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Results</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
          <li>Conversion rates increased by <strong>83%</strong> within three months.</li>
          <li>Mobile traffic rose by <strong>189%</strong> with an <strong>11%</strong> increase in browsing time.</li>
          <li>Bounce rate decreased by <strong>36%</strong> due to performance optimizations.</li>
          <li>SEO rankings improved, leading to a <strong>76%</strong> boost in organic traffic.</li>
          <li>Stronger brand positioning with integrated sustainability messaging.</li>
        </ul>
      </div>

      {/* Final Delivery & Software Used Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Final Delivery</h2>
          <p className="text-lg text-gray-700">UI Design, Web Development</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Software Used</h2>
          <p className="text-lg text-gray-700">WordPress CMS, WooCommerce</p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
