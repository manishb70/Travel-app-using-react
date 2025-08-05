import Header from "../header/Header";
import MostAttractive from "../mostattractive/MostAttractive";






const Tours = () =>{


    
  useEffect(() => {
    // Scroll to top when component loads (reload/refresh)
    window.scrollTo(0, 0);
  }, []);

    return(

        < div className="font-montserrat ">
        <Header />
        <MostAttractive />
        </div>
    )

}


export default Tours;