import { FaAddressCard, FaCity, FaSpeakap } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

const HrManagement = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* HR Management Section */}
      <div className="flex flex-col md:flex-row items-center md:mx-10 bg-blue-100 p-6 md:p-12 rounded-xl shadow-lg">
        <img
          src="https://i.ibb.co/YxdNFWb/Business-ethics-amico-1.png"
          alt="HR Management"
          className="w-full md:w-1/2 h-auto object-contain rounded-lg"
        />
        <div className="text-center md:text-left md:ml-8">
          <h2 className="text-2xl md:text-3xl md:ml-8 font-bold text-blue-900">
            Comprehensive HR Management Solutions
          </h2>
          <p className="text-gray-700 mt-3 text-lg md:text-base leading-relaxed">
            Our HR Management module streamlines workforce operations, from
            recruitment and payroll to performance tracking and employee
            engagement.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li>
              ✔ <strong>Recruitment & Onboarding</strong> – Simplifies hiring
              with job postings and automated tracking.
            </li>
            <li>
              ✔ <strong>Employee Management</strong> – Secure and centralized
              employee database.
            </li>
            <li>
              ✔ <strong>Payroll & Benefits</strong> – Automated salary
              processing and benefits tracking.
            </li>
            <li>
              ✔ <strong>Performance Tracking</strong> – Set goals, track
              progress, and manage reviews.
            </li>
            <li>
              ✔ <strong>HR Analytics</strong> – Gain insights with custom
              reports and workforce analytics.
            </li>
          </ul>
          <button className="mt-5 bg-blue-600 text-white px-6 py-3 text-base font-semibold rounded-lg hover:bg-blue-700 transition-all w-full md:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Why Use Our HR Management Software? */}
      <div className="mt-16 text-start px-4">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 my-10 text-center md:text-left">
    Why Should You Use Our HR Management Software?
  </h1>
  
  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
    {/* Text Section */}
    <div className="flex-1 w-full md:w-1/2">
      <ul className="space-y-3 text-base md:text-lg my-4 text-gray-700">
        <li>✔ Intuitive Interface: Simplifies project management tasks.</li>
        <li>✔ Project Dashboard: Real-time updates on project progress.</li>
        <li>✔ Task Management: Assign and prioritize tasks effortlessly.</li>
        <li>✔ Team Collaboration: Built-in communication tools.</li>
        <li>✔ Progress Tracking: Monitor project progress in real-time.</li>
        <li>✔ Intuitive Interface: Simplifies project management tasks.</li>
        <li>✔ Project Dashboard: Real-time updates on project progress.</li>
        <li>✔ Task Management: Assign and prioritize tasks effortlessly.</li>
        <li>✔ Team Collaboration: Built-in communication tools.</li>
        <li>✔ Progress Tracking: Monitor project progress in real-time.</li>
      </ul>
    </div>
    
    {/* Image Section */}
    <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end">
      <img className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-lg" 
        src="https://i.ibb.co/twQxCd35/8665303-7415.jpg" alt="HR Management" />
    </div>
  </div>
</div>

      {/* Comparison Section */}
      <div className="mt-16 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Compare to Other Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 py-16 px-20 text-lg rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900">
              Haque Digital
            </h2>
            <ul className="mt-4 space-y-3 text-left text-gray-700">
              <li>✔ Robust attendance tracking with real-time .</li>
              <li>✔ Comprehensive leave management system.</li>
              <li>✔ Advanced progress tracking tools.</li>
              <li>✔ Powerful reporting and analytics.</li>
              <li>✔ Robust employee management tools.</li>
              <li>✔ Integrated notice management system.</li>
            </ul>
          </div>
          <div className="bg-red-50 py-16 px-20 text-lg rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-red-900">
              Other Agencies
            </h2>
            <ul className="mt-4 space-y-3 text-left text-gray-700">
              <li>❌ Basic attendance tracking with delayed .</li>
              <li>❌ Manual leave tracking with limited capabilities.</li>
              <li>❌ Limited progress tracking features.</li>
              <li>❌ Basic reporting functionality.</li>
              <li>❌ Basic employee database with limited.</li>
              <li>
                ❌ Manual notice dissemination without centralized management.
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      {/* HRMS Software Services */}
      <div className="mt-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          HRMS Software Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaAddressCard />, title: "Employee Management" },
            { icon: <IoPersonAddSharp />, title: "Performance Management" },
            { icon: <FaCity />, title: "Asset & Equipment Management" },
            { icon: <FaSpeakap />, title: "Time and Attendance Tracking" },
            { icon: <FaAddressCard />, title: "Employee Management" },
            { icon: <IoPersonAddSharp />, title: "Performance Management" },
            { icon: <FaCity />, title: "Asset & Equipment Management" },
            { icon: <FaSpeakap />, title: "Time and Attendance Tracking" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-4xl text-blue-900">{item.icon}</div>
              <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
  <div className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-md">
    <p className="text-center pt-10 text-lg text-white">Find Answer</p>
    <h1 className="text-center text-3xl font-bold text-white">Frequently Asked Question</h1>
  <div className="mt-16 max-w-4xl mx-auto">
  <div className="space-y-2 bg-blue-900 text-white p-4 rounded-lg">
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How do I create an account?</div>
      <div className="collapse-content text-white  text-sm ">
        Answer to "How do I create an account?" goes here.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
      <div className="collapse-content text-sm text-white ">
        Answer to "I forgot my password. What should I do?" goes here.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How do I update my profile information?</div>
      <div className="collapse-content text-sm text-white ">
        Answer to "How do I update my profile information?" goes here.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
      <div className="collapse-content text-sm text-white ">
        Answer to "I forgot my password. What should I do?" goes here.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How do I update my profile information?</div>
      <div className="collapse-content text-sm text-white ">
        Answer to "How do I update my profile information?" goes here.
      </div>
    </div>
  </div>
</div>
  </div>

    </div>
  );
};

export default HrManagement;
