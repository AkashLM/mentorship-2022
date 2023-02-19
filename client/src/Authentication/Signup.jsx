import React from "react";
import Fields from "../login/Fields";
import Navbar from "../login/Navbar";
import Conference from "../images/conference.png";

function Login(props) {
  const { adminLog, mentorLog, studentLog, setSignup } = props;
  return (
    <div>
      <div className="">
        <Navbar
          studentLog={studentLog}
          adminLog={adminLog}
          mentorLog={mentorLog}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-{100%} lg:w-2/5 ">
          <Fields
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
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
