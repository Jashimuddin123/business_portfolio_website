import React from 'react';

const CaseDetails = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="flex flex-wrap items-center justify-between mb-12">
                <div className="flex-3 mr-8">
                    <img
                        src="https://i.ibb.co.com/KcxvxtWQ/Whats-App-Image-2025-02-12-at-16-41-07-6093f7f8.jpg"
                        alt="NOBULL Project Image"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>
                <div className="flex-1">
                    <div className="mb-6">
                        <strong className="text-lg font-semibold text-gray-800">Category:</strong>
                        <p className="text-lg text-gray-600">Fitness Apparel and Equipment</p>
                    </div>
                    <div className="mb-6">
                        <strong className="text-lg font-semibold text-gray-800">Client:</strong>
                        <p className="text-lg text-gray-600">NOBULL</p>
                    </div>
                    <div className="mb-6">
                        <strong className="text-lg font-semibold text-gray-800">Project Type:</strong>
                        <p className="text-lg text-gray-600">E-commerce Website Development</p>
                    </div>
                </div>
            </div>

            {/* Title Section */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">E-commerce Website Development for NOBULL</h1>
            
            {/* Overview */}
            <div className="text-lg text-gray-700 mb-8">
                <strong className="text-xl font-semibold">Overview:</strong>
                <p className="text-gray-600">
                    NOBULL is a performance-driven brand that creates high-quality footwear, apparel, and accessories designed for athletes who demand more from their gear. We developed a modern, high-performing e-commerce website to enhance user experience, increase sales, and strengthen customer loyalty.
                </p>
            </div>

            {/* Challenges Section */}
            <div className="mb-8">
                <strong className="text-xl font-semibold">Challenges:</strong>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Navigation issues making it hard for customers to find products easily.</li>
                    <li>Brand identity was not fully integrated into the website's aesthetics.</li>
                    <li>Lack of mobile optimization leading to poor user experience on smartphones.</li>
                    <li>Product pages did not effectively showcase the premium nature of NOBULL’s offerings.</li>
                    <li>Checkout process had friction points, causing high cart abandonment rates.</li>
                </ul>
            </div>

            {/* Solutions Section */}
            <div className="mb-8">
                <strong className="text-xl font-semibold">Solutions:</strong>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Redesigned website with a minimalist, high-impact aesthetic aligned with NOBULL’s branding.</li>
                    <li>Implemented a mobile-first, responsive design for an optimal user experience on all devices.</li>
                    <li>Enhanced product pages with high-quality images, videos, and detailed descriptions.</li>
                    <li>Optimized checkout process with a single-page flow, multiple payment options, and real-time shipping calculations.</li>
                    <li>Improved site performance with fast load times and scalable infrastructure.</li>
                </ul>
            </div>

            {/* Results Section */}
            <div className="mb-8">
                <strong className="text-xl font-semibold">Results:</strong>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>59% increase in website conversion rates.</li>
                    <li>77% increase in mobile traffic and 55% improvement in mobile conversions.</li>
                    <li>38% reduction in cart abandonment rates.</li>
                    <li>33% increase in organic search traffic due to improved SEO.</li>
                    <li>Enhanced customer satisfaction with a streamlined, fast, and intuitive shopping experience.</li>
                </ul>
            </div>

            {/* Final Delivery and Software Used Section */}
            <div className="mb-8">
                <p className="text-lg text-gray-700 mb-4">
                    <strong className="text-xl font-semibold">Final Delivery:</strong>
                    <span className="text-gray-600"> UI Design, Web Development</span>
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <strong className="text-xl font-semibold">Software Used:</strong>
                    <span className="text-gray-600"> Shopify, React, Tailwind CSS</span>
                </p>
            </div>
        </div>
    );
};

export default CaseDetails;
