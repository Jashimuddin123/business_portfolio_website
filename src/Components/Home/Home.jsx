import React from "react";
import Banner from "../Banner/Banner";
import Testimonial from "../../Testimonial/Testimonial";
// import Services from "../Services/Services";
import LetsTalk from "../SharedPage/letsTalk";
import Blog from "../Blog/Blog";

import HomeSectionsService from "../Services/HomeSectionsService";
import OurProject from "../SharedPage/OurProject";
import OurCustomer from "../SharedPage/OurCustomer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-4xl font-bold text-blue-900 mt-16 mb-2   text-center">
          Our Services
        </h1>
        {/* <Services></Services> */}
        <HomeSectionsService></HomeSectionsService>
      </div>
      <OurProject></OurProject>
      <Blog></Blog>
      <OurCustomer></OurCustomer>
      <Testimonial></Testimonial>
      <LetsTalk></LetsTalk>
    
    </div>
  );
};

export default Home;
