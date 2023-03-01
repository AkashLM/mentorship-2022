import { useEffect, useState } from "react";
import "./FieldsLogin.css";
import Arrow from "../images/arrow.png";
// import round from "../images/round.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

import { Input } from "antd";
import { fontSize } from "@mui/system";

function FieldsLogin(props) {
  const [emailIdLogin, setEmailIdLogin] = useState("");
  const [password, setPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [Error, setError] = useState("");
  const [data, setData] = useState();
  const [forgetPass, setForgetPass] = useState();

  // forgetPass Const's
  const [fullName, setFullName] = useState("");

  // signup const's
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  //
  // console.log(emailIdLogin, "......", password);
  const {
    adminLog,
    // setSignup,
    mentorLog,
    studentLog,
    setIsLoggedIn,
    setLogType,
    setFPass,
  } = props;
  const cookies = new Cookies();
  useEffect(() => {
    if (mentorLog === true) {
      setTypeOfUser("Mentor");
    } else if (studentLog === true) {
      setTypeOfUser("Student");
    } else if (adminLog === true) {
      setTypeOfUser("Admin");
    }
  }, []);

  // for Snackbar
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClass, setSnackbarClass] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );

  // sliding function
  const [loginRightPanel, setLoginRightPanel] = useState();
  const signUpButton = () => {
    setLoginRightPanel(true);
  };
  const signInButton = () => {
    setLoginRightPanel(false);
  };

  const BASEURL = process.env.REACT_APP_SAMPLE;
  //Login Api
  const OnClickLogin = async () => {
    setOpen(true);
    setSnackbarMsg("Please Wait ...")
    setSnackbarClass("default")
    const Temp = await axios
      .post(`${BASEURL}/login`, {
        Res_EmailId: emailIdLogin,
        Res_Password: password,
        Res_TypeOfUser: typeOfUser,
      })
      .then((Data) => {
        if (Data) {
          cookies.set("KeyToken", Data.data.data, { maxAge: 604800 });
          setIsLoggedIn(true);
        }
      })
      .catch((ErrorR) => {
        
        setSnackbarClass("invalid")
        setOpen(true);
        setError(ErrorR?.response?.data?.message);
        setSnackbarMsg(ErrorR?.response?.data?.message)

      });
  };
  // console.log("....", Error);

  // Signup api
  const OnClickSignUp = () => {
    if (password != confirmPassword) {
      setError("Password must be the same!");
      setOpen(true);
      setSnackbarMsg("Password must be same!");
    } else {
      setOpen(true);
      setSnackbarMsg("Please Wait ...")
      setSnackbarClass("default")
      const Temp = axios
        .post(`${BASEURL}/SignUp`, {
          Res_Name: name,
          Res_EmailId: emailIdLogin,
          Res_Password: password,
          Res_TypeofUser: typeOfUser,
        })
        .then((Data) => {
          if (Data) {
            setIsLoggedIn(true);
            setData(Data.data.message);
            cookies.set("KeyToken", Data.data.data, { maxAge: 604800 });
            const KeyToken = cookies.get("KeyToken");
            console.log("Cookie", KeyToken);
            setOpen(true);
            setSignUpMsg("Sign up  successfully !");
          }
        })
        .catch((ErrorR) => {
          // console.log(ErrorR.response.data.message);
          setError(ErrorR.response.data.message);
          setSnackbarClass("invalid")
          setOpen(true);
          setSnackbarMsg(ErrorR.response.data.message);
        });
    }
  };

  // forgot pass
  const OnClickFpass = () => {
    alert(" 😉 You will get an email from the team soon ! Thank you. 😉");
  };

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
  });
  return (
    <>
      <>
        <div
          className={
            loginRightPanel
              ? "SlidingContainer right-panel-active"
              : "SlidingContainer"
          }
          id="SlidingContainer"
        >
          <div className="form-container sign-up-container">
            <Formik initialValues={initialValues} onSubmit={OnClickSignUp}>
              {(props) => (
                <Form>
                  <h1>Create Account</h1>{" "}
                  <span>
                    {adminLog ? (
                      <div> Admin</div>
                    ) : mentorLog ? (
                      <div> Mentor</div>
                    ) : studentLog ? (
                      <div> Student</div>
                    ) : (
                      <></>
                    )}
                  </span>
                  <Field
                    type="text"
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Name "
                    required
                    onChange={(Event) => {
                      setName(Event.target.value);
                    }}
                  />
                  <Field
                    type="email"
                    label="email"
                    name="email"
                    value={emailIdLogin}
                    required
                    placeholder="Registered Email Address "
                    onChange={(Event) => {
                      setEmailIdLogin(Event.target.value);
                    }}
                  />
                  <Field
                    type="password"
                    label="password"
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(Event) => {
                      setPassword(Event.target.value);
                      // console.log("Password", password);
                    }}
                  />
                  <Field
                    type="password"
                    label="password"
                    name="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(Event) => {
                      setConfirmPassword(Event.target.value);
                      // console.log("Confirm Password", confirmPassword);
                    }}
                  />
                  <button type="submit">Sign Up</button>
                  {setInitialvalues(props.values)}
                </Form>
              )}
            </Formik>
          </div>
          <div className={
            forgetPass
              ? "form-container sign-in-container forget-pass-container-notVisible"
              : "form-container sign-in-container forget-pass-container-visible"
          }
          >
            <Formik initialValues={initialValues} onSubmit={OnClickLogin}>
              {(props) => (
                <Form>
                  <h1>Log in </h1>
                  <span>
                    {adminLog ? (
                      <div> Admin</div>
                    ) : mentorLog ? (
                      <div> Mentor</div>
                    ) : studentLog ? (
                      <div> Student</div>
                    ) : (
                      <></>
                    )}
                  </span>

                  <Field
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Email"
                    value={emailIdLogin}
                    onChange={(Event) => {
                      setEmailIdLogin(Event.target.value);
                    }}
                  />
                  <Field
                    type="password"
                    label="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(Event) => {
                      setPassword(Event.target.value);
                    }}
                  />
                  <div
                    className="login text-sm font-semibold mr-4 text-slate-500 cursor-pointer forgetText"
                    onClick={() => {
                      setForgetPass(true);
                    }}
                  >
                    Forgot your password?
                  </div>
                  <button
                  type="submit"
                    // onClick={() => {
                    //   OnClickLogin();
                    // }}
                  >
                    Log In
                  </button>
                  {setInitialvalues(props.values)}
                </Form>
              )}
            </Formik>
          </div>
         
          <div
            className={
              forgetPass
                ? "form-container forget-pass-container forget-pass-container-visible"
                : "form-container forget-pass-container forget-pass-container-notVisible"
            }
          >
            <Formik initialValues={initialValues}>
              {(props) => (
                <Form>
                  <h1>Forgot Password</h1>
                  <span>
                    {adminLog ? (
                      <div> Admin</div>
                    ) : mentorLog ? (
                      <div> Mentor</div>
                    ) : studentLog ? (
                      <div> Student</div>
                    ) : (
                      <></>
                    )}
                  </span>

                  <Field
                    type="name"
                    label="name"
                    name="name"
                    value={fullName}
                    placeholder="Name as per Profile Name "
                    onChange={(Event) => {
                      setFullName(Event.target.value);
                    }}
                  />
                  <Field
                    type="email"
                    label="email"
                    name="email"
                    value={emailIdLogin}
                    placeholder="Enter you registered email !"
                    onChange={(Event) => {
                      setEmailIdLogin(Event.target.value);
                    }}
                  />
                  <div
                    className="login text-sm font-semibold mr-4 text-slate-500 cursor-pointer"
                    onClick={() => {
                      setForgetPass(false);
                    }}
                  >
                    Already Have Account?
                  </div>
                  <a
                    href={`mailto:keykundali2022@keystonesoe.in?subject=Forgot password by ${
                      adminLog ? "Admin" : studentLog ? "Student" : "Admin"
                    }!&body= Hello Team Keystone, This email is password reset email. Kindly revert the the login credentials to following candidate. Registered Name: ${fullName}, Registered Email Address : ${emailIdLogin}. Thank You and Regards.`}
                    target="_blank"
                  >
                    <button onclick={OnClickFpass}>Reset</button>
                  </a>
                  {setInitialvalues(props.values)}
                </Form>
              )}
            </Formik>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn" onClick={signInButton}>
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp" onClick={signUpButton}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          className={snackbarClass}
          sx={{ width: "310px" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          action={action}
          message={snackbarMsg}
          anchorOrigin={{
            vertical: "Bottom",
            horizontal: "Left",
          }}
        />
      </>
    </>
  );
}

export default FieldsLogin;
