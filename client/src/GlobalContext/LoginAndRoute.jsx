import { createContext, useState } from "react";

export const  RouteContext =createContext();

export const RouteContextWrapper =(Props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [StudentLogin, setStudentLogin]=useState(false);
    const [MentorLogin, setMentorLogin]=useState(false);
    const [AdminLogin, setAdminLogin]=useState(false);
    return(    
    <RouteContext.Provider 
        value={{ isLoggedIn,setIsLoggedIn,StudentLogin, setStudentLogin,MentorLogin, setMentorLogin,AdminLogin, setAdminLogin }}>
    
            {Props.children}
        </RouteContext.Provider>);

};

//EXPORT ==> //RouteContext->Files Import & RouteContextWrapper -> App.js

import { createContext, useState } from "react";

export const MovieDetailPop = createContext();

export const MovieDetailsWrapper = (Props) => {
  const [MoviePopUpStatus, setMoviePopUpStatus] = useState(false);
  const [MovieDetails, setMovieDetails] = useState({});
  return (
    <MovieDetailPop.Provider
      value={{ MoviePopUpStatus, setMoviePopUpStatus, MovieDetails, setMovieDetails }}
    >
      {Props.children}
    </MovieDetailPop.Provider>
  );
};
