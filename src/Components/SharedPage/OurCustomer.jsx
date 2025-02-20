const OurCustomer = () => {
  const customers = [
    { img: "https://i.ibb.co.com/nM0HBchw/pmaspire-80d8dcc7.webp" },
    { img: "https://i.ibb.co.com/tTY6nrgH/business-Post-56b048b3.webp" },
    { img: "https://i.ibb.co.com/bgNqCCB2/divine-IT-42feccf1.webp" },
    { img: "https://i.ibb.co.com/XrDdY83Z/ghoori-db46a4cd.webp" },
    { img: "https://i.ibb.co.com/xtcBqbzT/olx-61164ecb.webp" },
    { img: "https://i.ibb.co.com/zWzYXhn1/bg-ed4aaa9a.webp" },
    { img: "https://i.ibb.co.com/PZwCHhZy/selise-e1f99520.webp" },
    { img: "https://i.ibb.co.com/DfdzdFw1/coder-Trust-0e3f5dc4.webp" },
    { img: "https://i.ibb.co.com/DfdzdFw1/coder-Trust-0e3f5dc4.webp" },
    { img: "https://i.ibb.co.com/ccWJy1g4/chore-Stop-d9944300.webp" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mt-1   text-center mb-12">
        Our Customers
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md  flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
          >
            <img
              src={customer.img}
              alt={`Brand ${index + 1}`}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomer;
