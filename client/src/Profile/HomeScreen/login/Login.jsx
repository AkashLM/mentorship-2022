import { useState } from "react";
import FieldsLogin from "./SlidingLogin";
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
      <div className="flex flex-col lg:flex-row items-center justify-center Login-Container">
        {fPsss ? (
          <>
            {" "}
            <div >
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
            {logType ? (
              <>
                {" "}
                <div >
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
                <div >
                  <FieldsLogin
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

       
      </div>
    </div>
  );
}

export default Login;
