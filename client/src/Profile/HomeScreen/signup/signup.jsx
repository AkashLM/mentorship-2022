import React from "react";
import Fields from "./FieldsSignUp";
import Navbar from "./Navbar";
import "./Login.css";
import Conference from "../images/conference.png";

function Login(props) {
  const { adminLog, mentorLog, studentLog, setSignup,setIsLoggedIn } = props;
  return (
    <div className="">
      <div  >
        <Navbar
          studentLog={studentLog}
          adminLog={adminLog}
          mentorLog={mentorLog}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-{100%} lg:w-2/5 Login-Container">
          <Fields
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
        <div className="flex justify-center items-center">
          <img src={Conference} alt="img" className=" w-{100%} lg:mt-12"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
