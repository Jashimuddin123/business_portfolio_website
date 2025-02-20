const Brand = () => {
    const brands = [
        { img: "https://i.ibb.co/Rkx2w80L/goodfirms-7c2d1fe3.webp" },
        { img: "https://i.ibb.co/wxKL0qw/sortlist-72b74d7b.webp" },
      { img: "https://i.ibb.co.com/Y7sqPz6Y/clutch-c015f268.webp" },
      { img: "https://i.ibb.co/49ZTkCm/trustpilot-a3683ee3.webp" },
      { img: "https://i.ibb.co/TBk1QZDb/yelp-a1a0906c.webp" },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md  flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
            >
              <img
                src={brand.img}
                alt={`Brand ${index + 1}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Brand;
  