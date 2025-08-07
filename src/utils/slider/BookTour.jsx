import { Link } from "react-router-dom"

const BookTour = ({ className }) => {
    return (
        <div className={`flex ${className}`}>
            

                <Link to={"/contact"} className="text-[33px] text-red-500 cursor-pointer  border-2 border-red-500 uppercase px-16 py-1 font-bebas  ">
                    Book Tour




                </Link>


        </div>
    )
}

export default BookTour
