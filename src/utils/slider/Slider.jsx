import { React, useRef, useContext, useEffect } from "react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MyContext } from "../../context/AppContext";
// import img1 from "../../assets/images/indonessia/indonessia.jpeg"
// import img2 from "../../assets/images/thailand/thailand.jpg"
// import img3 from "../../assets/images/himalaya/himalaya.jpg";
import img1 from "../../assets/images/thailand/thailand.jpg";
import img2 from "../../assets/images/thailand/thailand.jpg";
import img3 from "../../assets/images/thailand/thailand.jpg";




const Slider = () => {

    const swiperRef = useRef(null);
    const { activeSlideIndex, setActiveSlideIndex } = useContext(MyContext);


    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setActiveSlideIndex(swiper.activeIndex);
    }

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.on("slideChange", () => handleSlideChange(swiper));
        }
    });

    const places = [
        { name: "Ponot waterfall", img: img1 },
        { name: "Brown Cliff", img: img2 },
        { name: "Himalaya", img: img3 }
    ]


    return (
        <div  className="mr-14 shadow-xl ">


            <Swiper

                slidesPerView={1}
                keyboard={true}
                spaceBetween={-250}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                ref={swiperRef}
                initialSlide={activeSlideIndex}
                className="pl-[90px] pt-6 "

            >

                {
                    places.map((item, i) => {
                        console.log(item);
                        return (
                            <SwiperSlide key={i}>
                                <div className="relative">
                                    <img src={item.img} alt="" />
                                    <div>sample text</div>
                                </div>
                            </SwiperSlide>
                        );
                    } )
                }
            </Swiper>


        </div>
    )
}





export default Slider;