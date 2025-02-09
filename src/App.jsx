import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";  // Ensure Blog is imported
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} /> {/* Ensure this route is defined */}
        <Route path="/contact" element={<Contact/>} /> {/* Ensure this route is defined */}
      </Route>
    </Routes>
  );
}

export default App;
