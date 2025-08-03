import { createContext ,useState} from "react";

export const MyContext = createContext({
    activeSlideIndex: 0,
    setActiveSlideIndex: () => {}
});




const AppContext = ({ children }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const infos = {activeSlideIndex, setActiveSlideIndex};


    return (
        <MyContext.Provider value={infos}>
            {children}
        </MyContext.Provider>
    );
}




export default AppContext;






