import { useState } from "react";
import FieldsLogin from "./FieldsLogin";
import FieldsSignUp from "../signup/FieldsSignUp";
import FieldsForgotPass from "../forgotpassword/FieldsForgotPass";
import Navbar from "./Navbar";
import "./Login.css";
import Conference from "../images/conference.png";

function Login(props) {
  const { adminLog, mentorLog, studentLog, setSignup, setIsLoggedIn } = props;
  const [logType, setLogType] = useState(true);
  const [fPsss, setFPass] = useState(false);

  return (
    <div className="">
      <div>
        <Navbar
          studentLog={studentLog}
          adminLog={adminLog}
          mentorLog={mentorLog}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {fPsss ? (
          <>
            {" "}
            <div className="w-{100%} lg:w-2/5 Login-Container">
              <FieldsForgotPass
                studentLog={studentLog}
                adminLog={adminLog}
                mentorLog={mentorLog}
                setSignup={setSignup}
                setIsLoggedIn={setIsLoggedIn}
                setLogType={setLogType}
                setFPass={setFPass}
              />
            </div>
          </>
        ) : (
          <>
            {logType ? (
              <>
                {" "}
                <div className="w-{100%} lg:w-2/5 Login-Container">
                  <FieldsLogin
                    studentLog={studentLog}
                    adminLog={adminLog}
                    mentorLog={mentorLog}
                    setSignup={setSignup}
                    setIsLoggedIn={setIsLoggedIn}
                    setLogType={setLogType}
                    setFPass={setFPass}
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="w-{100%} lg:w-2/5 Login-Container">
                  <FieldsSignUp
                    studentLog={studentLog}
                    adminLog={adminLog}
                    mentorLog={mentorLog}
                    setSignup={setSignup}
                    setIsLoggedIn={setIsLoggedIn}
                    setLogType={setLogType}
                  />
                </div>
              </>
            )}
          </>
        )}

        <div className="flex justify-center items-center">
          <img src={Conference} alt="img" className=" w-{100%} lg:mt-12" />
        </div>
      </div>
    </div>
  );
}

export default Login;
