import React, { useEffect, useState } from "react";
import imge1 from "../../assets/images/indonessia/indonessia.jpeg";
import imge2 from "../../assets/images/thailand/thailand.jpg";
import imge3 from "../../assets/images/himalaya/himalaya.jpg";
import imge4 from "../../assets/images/himalaya/himalaya.jpg";
import imge5 from "../../assets/arroreal.png";
import "./ViewPoints.css";
import { BiSolidCalendar } from "react-icons/bi";
import BookTour from "../../utils/slider/BookTour";





const ViewPoints = () => {

    const [state, setState] = useState(2)

    const [imgVisible, setImgVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setImgVisible(true);
        }, 500);
        return () => clearTimeout(timeout);
    }, [state]);



    const handleSelected = (index) => {
        setState(index);
        setImgVisible(false);
    };


    const handleImages = () => {
        switch (state) {
            case 0:
                return imge1;
            case 1:
                return imge2;
            case 2:
                return imge3;
            case 3:
                return imge4;

        }
    }


    const imgSrc = handleImages(state);


    return (

        // <div className="mt-[-100px] " id="viewpoint">

        //     <div className="text-center">

        //         <h1 className="text-[#42a8bb] text-[76px] font-dancing ">View Point</h1>
        //         <h2 className="text-[54px] text-white font-montserrat font-[500] leading-[50px]">Discover Our Tourists <br />Viewpoint</h2>

        //     </div>


        //     <div className="flex justify-between items-center mt-[50px]">

        //         <div className="w-[40%] flex flex-col gap-2 pl-[100px]">

        //             {
        //                 [1, 2, 3, 4].map((item, i) => (

        //                     <div key={i}
        //                         onClick={() => handleSelected(i)}
        //                         className={`${state === i ? "border-[#00A1B9]" : "border-transparent"} border-[6px] ml-[-100px] pl-[100px] py-2 mr-[-50px] z-[99]  relative`}
        //                     >



        //                         <div className="text-white flex gap-10 ">

        //                             <p
        //                                 className=" text-[25px] font-semibold"
        //                             > 2/07</p>

        //                             <div>
        //                                 <h3
        //                                     className="text-[17px] font-[600] "
        //                                 >lorem lorerji fioefneio</h3>
        //                                 <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. s</p>
        //                                 <div className="flex items-center gap-5">

        //                                     {/* <svg viewBox="0 0 20 20" className=""  xmlns="http://www.w3.org/2000/svg"><path width={230} height={30}className="d-inline" d="m15 8 2 2H0v1h17l-2 2h1.5l2.5-2.5L16.5 8H15z" fill="#ffffff" fill-opacity="1" stroke="none" stroke-width="0" class="fill-222222"></path></svg> */}

        //                                     <img src={imge5} alt="" className="h-[100px]" width={280} />

        //                                     <button className="font-[600] hover:text-[#00A1B9]">View Route </button>


        //                                 </div>

        //                             </div>

        //                         </div>






        //                         {state === i &&
        //                             <p className="absolute right-0 top-[10%] text-[25px] font-semibold text-white flex items-center gap-1 justify-center verticalText">

        //                                 <BiSolidCalendar />
        //                                 2/07
        //                             </p>}


        //                     </div>
        //                 ))}



        //           <BookTour className={`justify-start mt-8 `} />
        //         </div>
        //         <div className="w-[60%] viewPointingImg" >



        //             <img src={imgSrc} className={`h-[650px] w-full ${imgVisible ? " " : "fade-out"}`} alt="" />
        //         </div>

        //     </div>



        // </div>

        <div className="mt-[-100px] px-4 md:px-8 lg:px-[100px]" id="viewpoint">
    <div className="text-center">
        <h1 className="text-[#42a8bb] text-[42px] md:text-[60px] lg:text-[76px] font-dancing">
            View Point
        </h1>
        <h2 className="text-[24px] md:text-[36px] lg:text-[54px] text-white font-montserrat font-[500] leading-tight md:leading-[50px]">
            Discover Our Tourists <br className="hidden md:block" />
            Viewpoint
        </h2>
    </div>

    <div className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-[50px] gap-6">
        {/* Left side */}
        <div className="w-full lg:w-[40%] flex flex-col gap-4">
            {[1, 2, 3, 4].map((item, i) => (
                <div
                    key={i}
                    onClick={() => handleSelected(i)}
                    className={`${
                        state === i ? "border-[#00A1B9]" : "border-transparent"
                    } border-[4px] px-6 py-4 relative bg-[#ffffff12] rounded-md cursor-pointer`}
                >
                    <div className="text-white flex flex-col sm:flex-row sm:gap-6">
                        <p className="text-[20px] font-semibold">2/07</p>
                        <div>
                            <h3 className="text-[16px] font-[600]">
                                lorem lorerji fioefneio
                            </h3>
                            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center gap-4 mt-3">
                                <img src={imge5} alt="" className="h-[80px] sm:h-[100px]" />
                                <button className="font-[600] hover:text-[#00A1B9]">View Route</button>
                            </div>
                        </div>
                    </div>

                    {state === i && (
                        <p className="absolute right-3 top-3 text-[16px] sm:text-[20px] font-semibold text-white flex items-center gap-1">
                            <BiSolidCalendar />
                            2/07
                        </p>
                    )}
                </div>
            ))}

            <BookTour className={`justify-start mt-8`} />
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[60%]">
            <img
                src={imgSrc}
                className={`h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full object-cover rounded-md transition-opacity duration-300 ${
                    imgVisible ? "opacity-100" : "opacity-0"
                }`}
                alt=""
            />
        </div>
    </div>
</div>

    );
}

export default ViewPoints;