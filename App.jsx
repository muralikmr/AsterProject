import React from "react";
// import Home1 from "./Crud1/Home1";
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Adding from "./Crud1/Adding";
// import Edit  from "./Crud1/Edit";
// import Add from "./Crud/Add";
// import Edit from "./Crud/Edit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <>
   
    
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>
        <Footer />
       </Router>
       
    </>
  )
}

export default App;
