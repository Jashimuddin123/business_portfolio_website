import LetsTalk from "../SharedPage/letsTalk";

const Career = () => {
    return (
      <div>
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/k2SJfG3n/2147689172.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-bold">Commence Your Journey with Haque Digital</h1>
          </div>
        </div>

        {/* Our Current Openings Section */}
        <div className="py-16 px-6 md:px-20">
          <h1 className="text-blue-900 text-3xl md:text-4xl text-center font-semibold mb-8">Our Current Openings</h1>
          
          {/* Job Cards */}
          <div className="space-y-6">
            {/* Business Development Internship */}
            <div className="bg-[#F4F5FA] w-full p-6 md:p-10 rounded-lg shadow-md">
              <h2 className="text-center text-blue-950 font-bold text-2xl md:text-3xl">Business Development Internship</h2>
              <div className="grid grid-cols-1 md:ml-40 md:grid-cols-3 gap-6 text-center md:text-left mt-4">
                <div>
                  <p className="text-gray-600">Address</p>
                  <h3 className="font-semibold">Dhaka</h3>
                </div>
                <div>
                  <p className="text-gray-600">Job Type</p>
                  <h3 className="font-semibold">Internship</h3>
                </div>
                <div>
                  <p className="text-gray-600">Deadline</p>
                  <h3 className="font-semibold">20 Feb 2025</h3>
                </div>
              </div>
            </div>

            {/* Creative Content Writer (English) */}
            <div className="bg-[#F4F5FA] w-full p-6 md:p-10 rounded-lg shadow-md">
              <h2 className="text-center text-blue-950 font-bold text-2xl md:text-3xl">Creative Content Writer (English)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 md:ml-40 gap-6 text-center md:text-left mt-4">
                <div>
                  <p className="text-gray-600">Address</p>
                  <h3 className="font-semibold">Dhaka</h3>
                </div>
                <div>
                  <p className="text-gray-600">Job Type</p>
                  <h3 className="font-semibold">Full-Time</h3>
                </div>
                <div>
                  <p className="text-gray-600">Deadline</p>
                  <h3 className="font-semibold">20 Feb 2025</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LetsTalk></LetsTalk>
      </div>
    );
  };
  
  export default Career;
