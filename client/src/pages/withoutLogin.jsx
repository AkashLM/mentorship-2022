import Decide from "../Profile/HomeScreen/impcomponents/Decide";
import { useState } from "react";
import Login from "../Profile/HomeScreen/login/Login";
import "./withoutLogin.css";
const WithoutLogin =(Props)=>{
    const [studentLog, setStudentLog] = useState(false);
    const [adminLog, setAdminLog] = useState(false);
    const [mentorLog, setmentorLog] = useState(false);
    const {isLogged,setIsLoggedIn}=Props;
    
    return(<div className="Login-Parent-Comp">
        {studentLog ? (
          // signup ? (
          //   <Signup />
          // ) :
          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : adminLog ? (

          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : mentorLog ? (
          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <Decide
            setStudentLog={setStudentLog}
            setAdminLog={setAdminLog}
            setmentorLog={setmentorLog}
          />
        )}
      </div>);
}

export default WithoutLogin;