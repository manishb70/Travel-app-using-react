import React from "react";
import Navbar from "../navbar/SecondNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout=()=>{
    return(
        <>
        <Navbar />

        
        <Outlet />
        
        <Footer />

        </>
    )

}


export default Layout;