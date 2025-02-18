// // import { useEffect, useState } from "react";
// import { div } from "framer-motion/client";
// import { useParams, Link } from "react-router-dom";

// const CaseStudyDetails = () => {
//   // const { id } = useParams();
//   // const [caseStudy, setCaseStudy] = useState(null);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   fetch("/caseStudies.json")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       const selectedCaseStudy = data[id];
//   //       if (selectedCaseStudy) {
//   //         setCaseStudy(selectedCaseStudy);
//   //       } else {
//   //         setError("Case study not found");
//   //       }
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       setError(err.message);
//   //       setLoading(false);
//   //     });
//   // }, [id]);

//   if (loading) return <p>Loading case study details...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     // <div className="container mx-auto px-4 py-10">

//     //   <div className="bg-white p-6 shadow-lg rounded-2xl">
//     //     <img className="w-full h-56 object-cover rounded-lg" src={caseStudy.image} alt={caseStudy.title} />
//     //     <h2 className="text-3xl font-semibold mt-4">{caseStudy.title}</h2>
//     //     <p className="text-gray-500 mt-2"><strong>Client:</strong> {caseStudy.Client}</p>
//     //     <p className="text-gray-500 mt-2"><strong>Industry:</strong> {caseStudy.Industry}</p>
//     //     <p className="text-gray-500 mt-2"><strong>Project Type:</strong> {caseStudy.Project_Type}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Executive Summary:</strong> {caseStudy.Executive_Summary}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Challenges:</strong> {caseStudy.Challenges}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Solutions:</strong> {caseStudy.Solutions}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Results:</strong> {caseStudy.Results}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Conclusion:</strong> {caseStudy.Conclusion}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Final Delivery:</strong> {caseStudy.Final_Delivery}</p>
//     //     <p className="text-gray-700 mt-4"><strong>Software Used:</strong> {caseStudy.Software_Used}</p>

//     //     <Link to="/caseStudies" className="mt-6 inline-block text-blue-600 hover:underline">
//     //       Back to Case Studies
//     //     </Link>
//     //   </div>
//     // </div>
//     <div>
      
//     </div>
//   );
// };

// export default CaseStudyDetails;
