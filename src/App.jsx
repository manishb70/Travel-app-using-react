import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MostAttractive from "./components/mostattractive/MostAttractive";
import ViewPoints from "./components/viewpoints/ViewPoints";
import "./index.css";
import React from "react";
import BookingForm from "./utils/slider/BookingForm";
// import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Tours from "./components/tours/Tours";
import Upcoming from "./components/upcoming/Upcoming";
import January from "./components/upcoming/january";
import Feburary from "./components/upcoming/feburary";
import March from "./components/upcoming/march";
import April from "./components/upcoming/april";
import May from "./components/upcoming/may";
import June from "./components/upcoming/june";
import July from "./components/upcoming/july";
import August from "./components/upcoming/august";
import September from "./components/upcoming/september";
import October from "./components/upcoming/october";
import November from "./components/upcoming/november";
import December from "./components/upcoming/december";

const App = () => {

  // return (
  //   <div className="font-montserrat bg-[#001E23]">


  //     <Home />







  //     {/* <MostAttractive />
  //     <ViewPoints />
  //     <BookingForm />    */}
  //     {/* <Footer /> */}
  //   </div>
  // );


  



  return (
   
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default child */}
          <Route path="/tours" element={<Tours />} /> Default child
          <Route path="/upcoming" element={<Upcoming   />} /> Default child
           <Route path="/book" element={< BookingForm  />} /> Default child
           <Route path="/January" element={<January   />} /> Default child
           <Route path="/February" element={<Feburary   />} /> Default child
           <Route path="/March" element={<March   />} /> Default child
           <Route path="/April" element={<April   />} /> Default child
           <Route path="/May" element={<May   />} /> Default child
           <Route path="/June" element={<June   />} /> Default child
           <Route path="/July" element={<July   />} /> Default child
           <Route path="/August" element={<August   />} /> Default child
           <Route path="/September" element={<September   />} /> Default child
           <Route path="/October" element={<October   />} /> Default child
           <Route path="/November" element={<November   />} /> Default child
           <Route path="/December" element={<December   />} /> Default child
      

        </Route>
      </Routes>
    
  );

}



export default App;