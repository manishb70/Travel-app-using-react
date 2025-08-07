import "./MostAttractive.css";
import img1 from "../../assets/images/himalaya/nepal1.jpg";
import img2 from "../../assets/images/himalaya/nepal2.jpg";
import img3 from "../../assets/images/himalaya/nepal3.jpg";
import img4 from "../../assets/images/himalaya/nepal4.jpg";
import img5 from "../../assets/images/himalaya/nepal5.jpg";

import img6 from "../../assets/images/indonessia/indonessia1.jpg";
import img7 from "../../assets/images/indonessia/indonessia2.jpg";
import img9 from "../../assets/images/indonessia/indonessia3.jpg";
import img10 from "../../assets/images/indonessia/indonessia4.jpg";
import img11 from "../../assets/images/indonessia/indonessia5.jpg";

import img12 from "../../assets/images/thailand/thailand1.jpg";
import img13 from "../../assets/images/thailand/thailand2.jpg";
import img14 from "../../assets/images/thailand/thailand3.jpg";
import img15 from "../../assets/images/thailand/thailand3.jpg";
import img16 from "../../assets/images/thailand/thailand3.jpg";
import bgLogo from "../../assets/images/bg.png";

import { BsHexagonFill } from "react-icons/bs";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/AppContext";
import Aos from "aos";
import React from "react";
import { info } from "autoprefixer";
import BookTour from "../../utils/slider/BookTour";

const MostAttractive = () => {
    const { activeSlideIndex } = useContext(MyContext);

    useEffect(() => {
        Aos.init();
        // Handle side effects based on activeSlideIndex
    }, [activeSlideIndex]);

    const datas = [
        {
            name: "Himalaya",
            leftImg1: img1,
            leftImg2: img2,
            leftImg3: img3,
            rightImg1: img4,
            rightImg2: img5
        },
        {
            name: "Indonessia",
            leftImg1: img6,
            leftImg2: img7,
            leftImg3: img9,
            rightImg1: img10,
            rightImg2: img11
        },
        {
            name: "Thailand",
            leftImg1: img12,
            leftImg2: img13,
            leftImg3: img14,
            rightImg1: img15,
            rightImg2: img16
        },
    ];

    const handleChange = (index) => {
        switch (index) {
            case 0:
                return datas[0];
            case 1:
                return datas[1];
            case 2:
                return datas[2];
            default:
                return datas[0];    
        }
    };

    const infos = handleChange(activeSlideIndex);

    const timelineItems = [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nisi aliquid.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nisi aliquid.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nisi aliquid.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nisi aliquid.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nisi aliquid."
    ];

    return (
        <section
            className=" pt-[80px] md:pt-[120px] pb-[150px] md:pb-[250px] w-full overflow-hidden px-4 md:px-0" 
            id="most"
        >
            {/* Header */}
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-red-400 text-[36px] md:text-[76px] font-dancing">
                    Why you visit?
                </h2>
                <h2 className="text-[28px] md:text-[54px] text-black font-montserrat font-[500] leading-[32px] md:leading-[50px] px-4">
                    Most Attractive Place <br className="hidden md:block" />
                    <span className="md:hidden"> </span>in {infos.name}
                </h2>
            </div>

            {/* Desktop Timeline Layout */}
            <section className="hidden lg:flex justify-center mt-10 relative">
                <div className="bg-red-500 w-[2px] h-[750px] flex flex-col justify-around items-center">
                    {/* Timeline items with images positioned absolutely */}
                    <div className="relative flex items-center">
                        <BsHexagonFill className="text-[30px] rotate-[90deg] text-red-500" />
                        <p className="absolute w-[400px] left-[70px] text-black">
                            {timelineItems[0]}
                        </p>
                    </div>
                    
                    <div className="relative flex items-center">
                        <BsHexagonFill  className="text-[30px] text-red-500  rotate-[90deg] text-[#2FA8B9]" />
                        <p className="absolute w-[400px] left-[70px] text-black">
                            {timelineItems[1]}
                        </p>
                    </div>

                    <div className="relative flex items-center">
                        <BsHexagonFill className="text-[30px] text-red-500  rotate-[90deg] text-[#2FA8B9]" />
                        <p className="absolute w-[400px] right-[70px] text-black text-right">
                            {timelineItems[2]}
                        </p>
                    </div>
                    
                    <div className="relative flex items-center">
                        <BsHexagonFill className="text-[30px] text-red-500 rotate-[90deg] text-[#2FA8B9]" />
                        <p className="absolute w-[400px] right-[70px] text-black text-right">
                            {timelineItems[3]}
                        </p>
                    </div>

                    <div className="relative flex items-center">
                        <BsHexagonFill className="text-[30px] text-red-500  rotate-[90deg] text-[#2FA8B9]" />
                        <p className="absolute w-[400px] left-[70px] text-black text-left">
                            {timelineItems[4]}
                        </p>
                    </div>

                    {/* Images positioned absolutely */}
                    <img src={infos.leftImg1} alt=""
                        className="absolute top-[-13%] rotate-[-45deg] left-[-0px] w-70"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                    />
                    <img src={infos.leftImg2} alt=""
                        className="absolute top-[0%] left-[30%] rotate-[-45deg] left-[-100px] w-[200px]"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                    />
                    <img src={infos.rightImg1} alt=""
                        className="absolute top-[260px] rotate-[-45deg] right-[-00px] w-[300px]"
                        data-aos="fade-left"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                    />
                    <img src={infos.rightImg2} alt=""
                        className="absolute top-[43%] rotate-[-45deg] right-[30%] w-[230px]"
                        data-aos="fade-left"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                    />
                    <img src={infos.leftImg3} alt=""
                        className="absolute top-[79%] left-[30%] rotate-[-45deg] left-[-100px] w-[180px]"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                    />

                    <img src={bgLogo} className="absolute top-150 left-[-150px] w-[500px]" alt="" />
                    <img src={bgLogo} className="absolute top-200 right-[-150px] w-[400px]" alt="" />
                </div>
            </section>

            {/* Mobile/Tablet Vertical Layout */}
            <section className="lg:hidden mt-8 px-4 max-w-4xl mx-auto">
                {/* Mobile Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                        <img 
                            src={infos.leftImg1} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                        <img 
                            src={infos.leftImg2} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-square md:block hidden">
                        <img 
                            src={infos.rightImg1} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                        <img 
                            src={infos.rightImg2} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                        <img 
                            src={infos.leftImg3} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-square md:hidden">
                        <img 
                            src={infos.rightImg1} 
                            alt="" 
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        />
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="space-y-6 md:space-y-8">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={index * 200}>
                            <div className="flex-shrink-0 mt-1">
                                <BsHexagonFill className="text-[20px] md:text-[24px] rotate-[90deg] text-[#2FA8B9]" />
                            </div>
                            <p className="text-black text-sm md:text-base leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Background decorative elements for mobile */}
                <div className="relative mt-8">
                    <img 
                        src={bgLogo} 
                        className="absolute -top-10 -left-20 w-[200px] md:w-[300px] opacity-20 -z-10" 
                        alt="" 
                    />
                    <img 
                        src={bgLogo} 
                        className="absolute -top-5 -right-15 w-[150px] md:w-[250px] opacity-20 -z-10" 
                        alt="" 
                    />
                </div>
            </section>

            <BookTour className="justify-center mt-[50px] px-4" />
        </section>
    );
};

export default MostAttractive;