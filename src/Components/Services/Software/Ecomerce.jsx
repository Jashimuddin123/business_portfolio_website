import { HiArrowLongRight } from "react-icons/hi2";
import TechnologyUses from "../../SharedPage/TechnologyUses";

const Ecommerce = () => {
  return (
    <div className="bg-gray-50 py-16  px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col  md:flex-row items-center bg-blue-100 p-16 rounded-xl shadow-lg max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-900">
            Our E-commerce Solutions
          </h2>
          <p className="text-gray-700 mt-3 text-lg leading-relaxed">
            Elevate your brand with high-quality motion graphics, animations,
            and interactive visuals. Enhance engagement and captivate audiences
            with seamless visuals.
          </p>
          <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-700 transition-all">
            Whatsapp <HiArrowLongRight size={20} />
          </button>
        </div>
        <img
          src="https://i.ibb.co/m3VCmK8/Ecommerce-campaign-amico-1.png"
          alt="Motion Graphic Design"
          className="w-full md:w-96 h-80 object-cover rounded-lg "
        />
      </div>

      {/* E-commerce Overview */}
      <div className="flex flex-col md:flex-row items-center mt-16 max-w-6xl mx-auto ">
        <div className="md:w-1/2 flex flex-col justify-between space-y-4">
          <h1 className="text-3xl font-bold ml-8 text-gray-900">
            Get the Best E-commerce
          </h1>
          <p className="text-gray-700 p-12 leading-relaxed">
            Boost your online presence with a fully optimized e-commerce
            solution. Our platform ensures seamless transactions, secure
            payments, and a user-friendly experience. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laboriosam minus eaque quo neque.
            Tenetur ipsa nostrum, eius totam libero recusandae, expedita,
            provident ipsam veritatis natus dolorum deleniti qui ex vitae.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://i.ibb.co/m3VCmK8/Ecommerce-campaign-amico-1.png"
            alt="E-commerce"
            className="w-full h-96  object-contain rounded-lg "
          />
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mt-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">
          Compare to Other E-Commerce Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Haque Digital */}
          <div className="bg-blue-50  rounded-lg shadow-lg  py-12">
            <h2 className="text-2xl font-semibold text-blue-900">
              Haque Digital
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                ✅ Fully customizable e-commerce websites tailored to business
                needs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Secure payment gateway integration for hassle-free
                transactions.
              </li>
              <li className="flex items-start gap-2">
                ✅ Seamless brand identity showcasing with unique designs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Mobile-friendly and optimized for all devices.
              </li>
              <li className="flex items-start gap-2">
                ✅ 24/7 customer support for smooth business operations.
              </li>
              <li className="flex items-start gap-2">
                ✅ Seamless brand identity showcasing with unique designs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Mobile-friendly and optimized for all devices.
              </li>
              <li className="flex items-start gap-2">
                ✅ 24/7 customer support for smooth business operations.
              </li>
            </ul>
          </div>

          {/* Other Agencies */}
          <div className="bg-red-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-red-900">
              Other Agencies
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                ❌ Non-customizable templates with limited flexibility.
              </li>
              <li className="flex items-start gap-2">
                ❌ Lack of advanced security measures for payments.
              </li>
              <li className="flex items-start gap-2">
                ❌ Generic designs that fail to showcase unique brand identity.
              </li>
              <li className="flex items-start gap-2">
                ❌ Poor mobile optimization affecting user experience.
              </li>
              <li className="flex items-start gap-2">
                ❌ Limited or no dedicated customer support.
              </li>
              <li className="flex items-start gap-2">
                ❌ Lack of advanced security measures for payments.
              </li>
              <li className="flex items-start gap-2">
                ❌ Generic designs that fail to showcase unique brand identity.
              </li>
              <li className="flex items-start gap-2">
                ❌ Poor mobile optimization affecting user experience.
              </li>
              <li className="flex items-start gap-2">
                ❌ Limited or no dedicated customer support.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TechnologyUses></TechnologyUses>
      {/* E-commerce Module sections */}
      <div className="container mx-auto px-4">
  <h1 className="text-center font-bold text-4xl my-6">E-commerce Module</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    
    {/* card 1 */}
    <div className="flex justify-center">
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/tpRH9PcL/4262886-2260674.jpg"
            alt="Product Management"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Product Management Module</h2>
          <p className="text-gray-500 text-[16px]">
            This module helps manage all your product listings efficiently. It includes features for adding, editing, and organizing products for your e-commerce platform, streamlining inventory management.
          </p>
        </div>
      </div>
    </div>

    {/* card 2 */}
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/cSsDff8N/21726902-6509982.jpg"
            alt="Shopping Cart"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Shopping Cart Module</h2>
          <p className="text-gray-500 text-[16px]">
            This module manages the shopping cart, ensuring users can add, view, and update their cart items seamlessly. It integrates with payment gateways for easy checkout and order tracking.
          </p>
        </div>
      </div>
    </div>

    {/* card 3 */}
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/XxnJyL1r/8448976-3919927.jpg"
            alt="Marketing and Promotions"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Marketing and Promotions Module</h2>
          <p className="text-gray-500 text-[16px]">
            The marketing and promotions module allows you to create and manage discounts, promotions, and special offers to boost sales and engage customers, enhancing the overall shopping experience.
          </p>
        </div>
      </div>
    </div>

    {/* card 4 */}
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full  shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/fzLr52Qp/Software-integration-bro.png"
            alt="Analytics and Reporting"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Analytics and Reporting Module</h2>
          <p className="text-gray-500 text-[16px]">
            This module provides detailed insights and analytics on your sales, customer behavior, and product performance. Use the data to optimize your strategy and improve decision-making.
          </p>
        </div>
      </div>
    </div>

    {/* card 5 */}
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full  shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/yB4qK77s/2148625666.jpg"
            alt="Payment Gateway Integration"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Payment Gateway Integration Module</h2>
          <p className="text-gray-500 text-[16px]">
            This module integrates multiple payment gateways, ensuring secure and flexible payment options for your customers. It simplifies the checkout process and supports various payment methods.
          </p>
        </div>
      </div>
    </div>

    {/* card 6 */}
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src="https://i.ibb.co/B2MtrYyG/4602242-2454033.jpg"
            alt="Customer Management"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Customer Management Module</h2>
          <p className="text-gray-500 text-[16px]">
            The customer management module allows you to manage customer data, track order history, and enhance customer service. It also supports customer segmentation for targeted marketing campaigns.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  );
};

export default Ecommerce;
