import { useEffect, useState } from "react";
import Arrow from "../images/arrow.png";
// import round from "../images/round.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { Input } from "antd";


function FieldsForgotPass(props) {
  const [fullName, setFullName] = useState("");
  const [emailIdLogin, setEmailIdLogin]=useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [Error, setError] = useState("");
  const [data, setData] = useState();

  const {
    adminLog,
    // setSignup,
    mentorLog,
    studentLog,
    setIsLoggedIn,
    setLogType,
    setFPass
  } = props;
  const cookies = new Cookies();
useEffect(()=>{
  if(mentorLog===true){
    setTypeOfUser("Mentor")
  }else if(studentLog===true){
    setTypeOfUser("Student")
  }else if(adminLog===true){
    setTypeOfUser("Admin")
  }
},[])
 
  const BASEURL =process.env.REACT_APP_SAMPLE;
  //Login Api
const OnClickLogin=()=>{
// const Temp= axios.post(`${BASEURL}/login`,{
//     Res_EmailId:emailIdLogin,
//     Res_Password:"password",
//     Res_TypeOfUser:typeOfUser
//   }).then((Data)=>{
//     if(Data){
//       setIsLoggedIn(true);
//       setData(Data.data.message);
//       cookies.set('KeyToken', Data.data.data,{maxAge :86400});
//       const KeyToken=cookies.get('KeyToken');
//     }
//   }).catch((ErrorR)=>{
//     console.log("Weeeeeeeeee",ErrorR.response.data.message);
//     setError(ErrorR.response.data.message);

//   });
alert (" 😉 You will get an email from the team soon ! Thank you. 😉");
}
// console.log("....",Error);


  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
  });
  return (<>    
  <Formik initialValues={initialValues}>
    {(props) => (
      <Form>
        <div className="mt-14">
          <img src={Arrow} alt="img" height="100" width="100"></img>
        </div>
        <div className="pl-10">
          <div>
            <div className="flex p-2 pl-1 pt-0login font-bold text-3xl ml-24">
              Forgot
              <div className=" pl-2">
                <div className="p-0"> Password </div>

                <div className="text-xs font-medium p-0">
                  {adminLog ? (
                    <div> Admin</div>
                  ) : mentorLog ? (
                    <div> Mentor</div>
                  ) : studentLog ? (
                    <div> Student</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-24">

          <div className="p-2 pb-2 pl-0">
          <Field
              type="name"
              label="name"
              name="name"
              value={fullName}
              placeholder="Name as per Profile Name "
              className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
              onChange={(Event)=>{
                setFullName(Event.target.value);
              }}
            />
          </div>

          <div className="p-2 pb-2 pl-0">

            <Field
              type="email"
              label="email"
              name="email"
              value={emailIdLogin}
              placeholder="Enter you registered email !"
              className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow-sm"
              onChange={(Event)=>{
                setEmailIdLogin(Event.target.value);
              }}
            />
          </div>
        </div>
        <div className="pl-12 ml-16 flex">
          <div className="login text-sm font-semibold mr-2 text-slate-500 cursor-pointer" onClick={()=>{
            setLogType(false);
            setFPass(false);
          }}>Do not have Account ?</div>
          <div className="login text-sm font-semibold ml-2 text-slate-500 cursor-pointer" onClick={()=>{
            setLogType(true);
            setFPass(false);
          }}>Already have account ?</div>
        </div>
        <div className="ml-16 pl-12 pt-3 ">
        <a href={`mailto:keykundali2022@keystonesoe.in?subject=Forgot password by ${ adminLog ? "Admin" : studentLog ? "Student" : "Admin" }!&body= Hello Team Keystone, This email is password reset email. Kindly revert the the login credentials to following candidate. Registered Name: ${fullName}, Registered Email Address : ${emailIdLogin}. Thank You and Regards.`} target="_blank">
        <button
            className="w-fit pl-4 rounded-lg text-white font-semibold button flex bg-blue-500"
            data-bs-toggle="modal" 
            >

            <div className="p-0.5 flex w-24">Done
            <span className="p-1 ml-3">
              <FaArrowRight />
            </span>
            </div>
          </button>
        </a>

        </div>
        {/* <div className="h-20">
          <div className="login ml-24 text-xs h-12 flex rounded-full border-gray-400  pr-3 pl-3 round">
            <div className="pl-9 pt-4">don’t have an account yet?</div>
            <button
              type="button"
              className="font-semibold  pt-4 pl-2 underline hover:cursor-pointer"
              onClick={() => setSignup(true)}>
              Sign up
            </button>
          </div>
        </div> */}
        {setInitialvalues(props.values)}
      </Form>
    )}
  </Formik>
<div class="modal fade"  id="staticBackdropErrorBox" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-body">
          <h3>{Error? (<>Error: {Error}</>):(<>{data}</>)}</h3><br/>
          <h6>{Error? (<h6>(Warning : Multiple Invalid logins can block your IP address !)</h6>):(<></>)}</h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-blue-500" data-bs-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>

  </>

  );
}

export default FieldsForgotPass;
