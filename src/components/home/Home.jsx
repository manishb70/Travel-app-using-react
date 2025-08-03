import { MyContext } from "../../context/AppContext";
import ChooseUs from "../../utils/ChooseUs";
import FeaturesTestimonialSection from "../../utils/FeaturesTestimonialSection";
import NewsLater from "../../utils/NewsLater";
import Destination from "../destinations/Destination";
import GroupTours from "../destinations/GroupTours";
import PopularPlaces from "../destinations/PopularPlaces";
import Header from "../header/Header";
import HeroSlider from "../landing/HeroSlider";
import Navbar from "../navbar/SecondNavbar";
import "./Home.css";
import React from "react";

const Home = () => {
    const { activeSlideIndex } = React.useContext(MyContext);


    const handleClass = (activeSlideIndex) => {
        switch (activeSlideIndex) {
            case 0:
                return "bgContainer1";
            case 1:
                return "bgContainer2";
            case 2:
                return "bgContainer3";
            default:
                return "bgContainer1";
        }
    }


    const classChange = handleClass(activeSlideIndex);



    return (
        <div className={` ${classChange}     `}  id="home">
         

            <HeroSlider />

            <GroupTours />


            <Destination />


            <NewsLater />

            <PopularPlaces />

            <FeaturesTestimonialSection />

            <ChooseUs />







            {/* // <Header /> */}
        </div>
    );
};

export default Home;