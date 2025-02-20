import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/ContactUs/Contact";
// import CaseStudies from "./Components/CaseStudies/CaseStudies";
// import CaseStudyDetails from "./Components/CaseStudies/CaseStudyDetails";
import CreativeDesign from "./Components/Services/CreativeDesign/CreativeDesign";
import Software from "./Components/Services/Software/Software";
import Website from "./Components/Services/Website/Website";
import DigitalMarketing from "./Components/Services/DigitalMarketing/DigitalMarketing";
// import CaseStudyDetails from "./Components/Services/CaseStudiesDetails/CasesStudiesDetails";
import BlogDetails from "./Components/Blog/BlogDetails";
import Services from "./Components/Services/Services";
import CaseDetailsOne from "./Components/CaseStudies/CaseDetails/CaseDetailsOne";
import CaseDetailsTwo from "./Components/CaseStudies/CaseDetails/CaseDetailsTwo";
import CaseDetailsThree from "./Components/CaseStudies/CaseDetails/CaseDetailsThree";
import Ecomerce from "./Components/Services/Software/Ecomerce";
import HrManagement from "./Components/Services/Software/HrManagement";
import MobileApp from "./Components/Services/Software/MobileApp";
import AccountFinnace from "./Components/Services/Software/AccountFinnace";
import UxDesign from "./Components/Services/CreativeDesign/UxDesign";
import GrapichDesign from "./Components/Services/CreativeDesign/GrapichDesign";
import MotionGrapic from "./Components/Services/CreativeDesign/MotionGrapic";
import WebDevelopment from "./Components/Services/Website/WebDevelopment";
import WebsiteMaintenece from "./Components/Services/Website/WebsiteMaintenece";
import WebsiteOptimizations from "./Components/Services/Website/WebsiteOptimizations";
import Seo from "./Components/Services/DigitalMarketing/Seo";
import MediaMarketing from "./Components/Services/DigitalMarketing/MediaMarketing";
import AboutUs from "./Components/About/AboutUs";
import SearchEngine from "./Components/Services/DigitalMarketing/SearchEngine";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import WebDesign from "./Components/Services/Website/WebDesign";
import Carrer from "./Components/About/Carrer";
import LifeAtHaqueDiital from "./Components/About/LifeAtHaqueDiital";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/eCommerce" element={<Ecomerce/>} /> 
        <Route path="/hrManagement" element={<HrManagement/>} /> 
        <Route path="/mobileApp" element={<MobileApp/>} /> 
        <Route path="/accountFinnace" element={<AccountFinnace/>} /> 
        <Route path="/uxDesign" element={<UxDesign/>} /> 
        <Route path="/grapicDesign" element={<GrapichDesign/>} /> 
        <Route path="motionGrapic" element={<MotionGrapic/>} /> 
        <Route path="/webDevelopment" element={<WebDevelopment/>} /> 
        <Route path="/webDesign" element={<WebDesign/>} /> 
        <Route path="/websiteMaintenece" element={<WebsiteMaintenece/>} /> 
        <Route path="/websiteOptimizations" element={<WebsiteOptimizations/>} /> 
        <Route path="/seo" element={<Seo/>} /> 
        <Route path="/mediaMarketing" element={<MediaMarketing/>} /> 
        <Route path="/searchEngine" element={<SearchEngine/>} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/caseStudies" element={<CaseStudies />} />
        <Route path="/caseDetailsOne" element={<CaseDetailsOne />} />
        <Route path="/caseDetailTwo" element={<CaseDetailsTwo />} />
        <Route path="/caseDetailThree" element={<CaseDetailsThree />} />
        {/* <Route path="/caseStudies/:id" element={<CaseStudyDetails />} /> */}
        <Route path="/creativeDesign" element={<CreativeDesign />} /> 
        <Route path="/software" element={<Software />} /> 
        <Route path="/website" element={<Website />} /> 
        <Route path="/digitalMarketing" element={<DigitalMarketing />} /> 
        <Route path="/aboutUs" element={<AboutUs />} />  
        <Route path="/carrer" element={<Carrer />} />  
        <Route path="/lifeAtHaqueDigital" element={<LifeAtHaqueDiital />} />  
       
      </Route>
    </Routes>
  );
}

export default App;
