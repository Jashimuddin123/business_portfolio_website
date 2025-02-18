import { FaAddressCard, FaCity, FaSpeakap } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";

const AccountFinnace = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-18 rounded-xl shadow-lg">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Master Business <br /> Strategies with <br /> Accounting and Finance
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Accounting and finance, which include keeping financial records,
            analyzing records, and budgeting for the future, are essential parts
            of running a company. They help in decision-making and give light on
            the financial health of a business.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co.com/mCVP6ZWt/accounting-finance-1383fbfe.png"
            alt="Accounting & Finance"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Benefits of Accounting Section */}
      <div className="my-20 text-center bg-blue-100 p-16 lg:mx-16 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Benefits of Accounting & <br /> Finance Software
        </h1>
        <div className=" gap-10 grid  lg:grid-cols-3 mt-10 px-4 py-8 rounded-xl ">
          {/* Benefit Cards */}
          <div className="text-start p-6   rounded-lg shadow-sx">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Financial Reports
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Integrity is our cornerstone. Our practices are built on a
              foundation of ethical conduct, ensuring trust and reliability in
              every interaction.
            </p>
          </div>
          <div className="text-center p-6  rounded-lg shadow-sx">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Real-Time Insights
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Empower your business decisions with real-time insights into your
              financials. Stay ahead of the curve with accurate data at your
              fingertips.
            </p>
          </div>
          <div className="text-center p-6  rounded-lg shadow-sx">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Budgeting
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Keep your financial planning on track. Easily manage budgets and
              forecast future financial trends with our intuitive tools.
            </p>
          </div>
          <div className="text-center p-6  rounded-lg shadow-sx">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Tax Management
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Simplify tax reporting and ensure your business complies with
              regulations. Our software ensures you never miss a tax deadline.
            </p>
          </div>
          <div className="text-center p-6  rounded-lg shadow-xs">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Cash Flow Tracking
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Stay on top of your cash flow. Our platform helps you monitor
              inflows and outflows to maintain financial stability.
            </p>
          </div>
          <div className="text-center p-6  rounded-lg shadow-xs">
            <div className="flex gap-4 items-center mb-4">
              <LuNotebookPen className="text-blue-600 text-4xl" />
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                Financial Forecasting
              </h3>
            </div>

            <p className="text-gray-700 text-start">
              Plan for the future with advanced forecasting tools that help you
              predict your financial path based on trends and insights.
            </p>
          </div>
        </div>
      </div>
      {/* Why Should You Use */}
      <div>
        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-12 rounded-xl shadow-lg mt-10">
          {/* Text Section */}
          <div className="text-center md:text-left md:ml-8 flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Why Should You Use Our <br /> Accounting & Finance <br /> Software
            </h2>
            <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
              Projects Management: Track financial progress and expenses across
              various projects with ease. Monitor budget allocation, resource
              utilization, and project profitability effortlessly. Milestones
              Tracking: Break down projects into achievable milestones, and
              monitor financial progress at each stage. Expenses Management:
              Simplify expense tracking and approval processes. Categorize
              expenses, attach receipts, and gain insights into expenditure
              patterns. Invoices Generation: Create professional invoices
              quickly and accurately. Customize invoice templates, set payment
              terms, and automate invoice reminders for timely payments.
        
            </p>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="https://i.ibb.co.com/tp2pyLZz/why-Accounting-95b3a01e.png"
              alt="Mobile App"
              className="w-full sm:w-72 md:w-96 lg:w-[500px] object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/*  */}
            {/* HRMS Software Services */}
            <div className="mt-16 text-center mb-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        HRMS Software Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-6 px-4">
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
            <div className="text-4xl sm:text-5xl text-blue-900">{item.icon}</div>
            <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AccountFinnace;
