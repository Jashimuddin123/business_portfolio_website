const LetsTalk = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="relative bg-[#DBF0FF] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 py-12 md:py-16 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4  text-center lg:text-left relative z-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#002A64]">
            Let's Have a Discussion
          </h1>
          <p className="text-5xl md:text-7xl font-bold text-[#002A64]">Let's</p>
          <p className="text-5xl md:text-7xl font-bold text-[#002A64]">Talk.</p>
          
          <button className="mt-6 px-6 py-3 md:px-8 md:py-4
           text-lg md:text-xl font-semibold border-2 border-[#002A64] text-[#002A64]
            rounded-md shadow-lg transition-all duration-300 hover:bg-[#0084FF] hover:text-white hover:border-transparent">
            Contact Us
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative z-10">
          <img
            src="https://i.ibb.co.com/G4CRnQpd/Long-distance-relationship-pana.png"
            alt="Let's Talk"
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover mix-blend-soft-light opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-105"
          />
        </div>

        {/* Background Overlay for Blending Effect */}
        <div className="absolute inset-0 bg-indigo-600 opacity-20 mix-blend-multiply z-0"></div>
      </div>
    </div>
  );
};

export default LetsTalk;
