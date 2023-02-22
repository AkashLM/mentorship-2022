import { useState, useEffect, useContext } from "react";
import Cookies from "universal-cookie";
import WithLogin from "./pages/withLogin";
import WithoutLogin from "./pages/withoutLogin";
import { BrowserRouter } from "react-router-dom";
// import {RouteContextWrapper} from "./GlobalContext/LoginAndRoute";
// import {RouteContext} from"./GlobalContext/LoginAndRoute";
import axios from "axios";
import "./App.css";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [refresher, setRefresher] = useState(true);
  const cookies = new Cookies();
  const BASEURL = process.env.REACT_APP_SAMPLE;
  useEffect(() => {
    const CheckAlreadyLogin = cookies.get("KeyToken");
    if (CheckAlreadyLogin) {
      setIsLoggedIn(true);
    }
  }, [refresher]);
  return (
    // <RouteContextWrapper>
    <BrowserRouter>
      {" "}
      <div className="App">
        <div className="mobileOverlay">
          <div className="overlayLogo"></div>
          <div className="overlayText"> Mobile view in not supported yet, <br/> Please use Desktop.  </div>
        </div>

        <div className="keystoneLogo">
          <div className="backgroundLogo"></div>
        </div>
      
        {isLogged ? (
          <WithLogin refresher={refresher} setRefresher={setRefresher}/>
        ) : (
          <WithoutLogin isLogged={isLogged} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </BrowserRouter>
    // </RouteContextWrapper>
  );
}

export default App;
