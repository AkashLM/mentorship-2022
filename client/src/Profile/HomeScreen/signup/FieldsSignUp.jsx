import { useEffect, useState } from "react";
import Arrow from "../images/arrow.png";
// import round from "../images/round.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { Input } from "antd";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

function FieldsSignUp(props) {
  const [name, setName] = useState("");
  const [emailIdLogin, setEmailIdLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [Error, setError] = useState("");
  const [data, setData] = useState();
  const [signUpMsg, setSignUpMsg] = useState("");

  const {
    adminLog,
    // setSignup,
    mentorLog,
    studentLog,
    setIsLoggedIn,
    setLogType,
  } = props;
  const cookies = new Cookies();

  // for snackBar
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );

  useEffect(() => {
    if (mentorLog === true) {
      setTypeOfUser("Mentor");
    } else if (studentLog === true) {
      setTypeOfUser("Student");
    } else if (adminLog === true) {
      setTypeOfUser("Admin");
    }
  }, []);

  const BASEURL = process.env.REACT_APP_SAMPLE;
  // Signup api
  const OnClickSignUp = () => {
    if (password != confirmPassword) {
      setError("Password must be the same !");
      setOpen(true);
      setSignUpMsg("Password must be the same !");
    } else {
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
            // console.log("Cookie", KeyToken);
            setOpen(true);
            setSignUpMsg("Sign up  successfully !");
          }
        })
        .catch((ErrorR) => {
          // console.log(ErrorR.response.data.message);
          setError(ErrorR.response.data.message);
          setOpen(true);
          setSignUpMsg(ErrorR.response.data.message);
        });
    }
  };

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
  });
  return (
    <>
      {" "}
      <Formik initialValues={initialValues} onSubmit={OnClickSignUp}>
        {(props) => (
          <Form>
            <div className="mt-0">
              <img src={Arrow} alt="img" height="100" width="100"></img>
            </div>
            <div className="pl-10">
              <div>
                <div className="flex p-2 pl-1 pt-0login font-bold text-3xl ml-24">
                  Create
                  <div className=" pl-2">
                    <div className="p-0"> An Account </div>

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
                  type="text"
                  label="Name"
                  name="name"
                  value={name}
                  placeholder="Your full name "
                  required
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
                  onChange={(Event) => {
                    setName(Event.target.value);
                  }}
                />
              </div>

              <div className="p-2 pb-2 pl-0">
                <Field
                  type="email"
                  label="email"
                  name="email"
                  value={emailIdLogin}
                  required
                  placeholder="Registered Email Address "
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow-sm"
                  onChange={(Event) => {
                    setEmailIdLogin(Event.target.value);
                  }}
                />
              </div>

              <div className="p-2 pb-2 pl-0">
                <Field
                  type="password"
                  label="password"
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
                  onChange={(Event) => {
                    setPassword(Event.target.value);
                    // console.log("Password", password);
                  }}
                />
              </div>

              <div className="p-2 pb-2 pl-0">
                <Field
                  type="password"
                  label="password"
                  name="password"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow-sm"
                  onChange={(Event) => {
                    setConfirmPassword(Event.target.value);
                    // console.log("Confirm Password", confirmPassword);
                  }}
                />
              </div>
            </div>
            <div className="pl-12 ml-16">
              <div
                className="login text-sm font-semibold ml-0 text-slate-500 cursor-pointer"
                onClick={() => {
                  setLogType(true);
                }}
              >
                Already have account ?
              </div>
            </div>
            <div className="ml-16 pl-12 pt-3 ">
              <button
                className="w-fit pl-4 rounded-lg text-white font-semibold button flex bg-blue-500"
                type="submit"
              >
                <div className="p-0.5 flex w-24">
                  SignUp
                  <span className="p-1 ml-3">
                    <FaArrowRight />
                  </span>
                </div>
              </button>
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

      {/*  */}
      <Snackbar
                        className="invalid"
                        sx={{ width: "310px" }}
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                        action={action}
                        message={signUpMsg}
                        anchorOrigin={{
                          vertical: "Bottom",
                          horizontal: "Left",
                        }}
                      />

      <div
        class="modal fade"
        id="staticBackdropErrorBox1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h3>{Error ? <>Error: {Error}</> : <>{data}</>}</h3>
              <br />
              <h6>
                {Error ? (
                  <h6>
                    (Warning : Multiple Invalid logins can block your IP address
                    !)
                  </h6>
                ) : (
                  <></>
                )}
              </h6>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-blue-500"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FieldsSignUp;
