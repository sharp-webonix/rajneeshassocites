import  { createContext,useContext , useReducer} from "react";
import reducer from "./reducer";
import hero1 from "./images/heroimg.jpeg"
import about2 from "./images/aboutimg.jpg"

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer);
  const updateHomePage = () =>{
    return dispatch({
        type:"HOME_UPDATE",
        payload:{
            name:"Rajneesh Associates",
            image:hero1,
        },
    });
  };
  const updateAboutPage = () =>{
    return dispatch({
        type:"ABOUT_UPDATE",
        payload:{
            name:"Rajesh Chauhan",
            image:about2,
        },
    });
  };
  

    return <AppContext.Provider value={{...state , updateHomePage ,updateAboutPage }}>{children}</AppContext.Provider>
};
const useGlobalContext = () => {
return useContext(AppContext);
};
export {AppContext,AppProvider,useGlobalContext}; 