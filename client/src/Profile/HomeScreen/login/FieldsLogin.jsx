import { useEffect, useState } from "react";
import "./Login.css";
import Arrow from "../images/arrow.png";
// import round from "../images/round.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import Snackbar from "@mui/material/Snackbar";

import { Input } from "antd";
import { fontSize } from "@mui/system";

function FieldsLogin(props) {
  const [emailIdLogin, setEmailIdLogin] = useState("");
  const [password, setPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [Error, setError] = useState("");
  const [data, setData] = useState();

  console.log(emailIdLogin, "......", password);
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
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="12pt"
        height="12pt"
        viewBox="0 0 512.000000 512.000000"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            d="M1095 4461 c-25 -11 -116 -95 -242 -223 -166 -169 -203 -211 -208
-240 -16 -84 -39 -57 678 -770 l672 -666 -671 -674 c-546 -548 -673 -679 -677
-705 -14 -74 -5 -87 212 -306 113 -115 218 -215 233 -223 32 -17 91 -18 121
-3 12 6 320 309 685 673 l662 661 663 -661 c364 -364 672 -667 684 -673 30
-15 89 -14 121 3 15 8 120 108 233 223 217 219 229 235 214 305 -6 26 -142
168 -677 704 -369 370 -669 676 -667 682 2 5 299 301 659 656 360 356 663 661
673 679 25 45 21 87 -12 138 -15 24 -116 130 -222 236 -211 208 -228 218 -304
193 -28 -9 -195 -169 -697 -666 -363 -360 -663 -654 -668 -654 -4 0 -302 291
-661 646 -360 355 -663 652 -674 659 -36 24 -87 27 -130 6z"
          />
        </g>
      </svg>
    </button>
  );

  const BASEURL = process.env.REACT_APP_SAMPLE;
  //Login Api
  const OnClickLogin = async () => {
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
        setOpen(true);
        setError(ErrorR?.response?.data?.message);
      });
  };
  console.log("....", Error);

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
  });
  return (
    <>
      {" "}
      <Formik initialValues={initialValues}>
        {(props) => (
          <Form>
            <div className="mt-14">
              <img src={Arrow} alt="img" height="100" width="100"></img>
            </div>
            <div className="pl-10">
              <div>
                <div className="flex p-2 login font-bold text-4xl ml-24">
                  Log
                  <div className=" pl-2">
                    <div className="p-0">in</div>

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
              <div className="p-2 pb-4 pl-0">
                <Field
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="Registered Email Address"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
                  value={emailIdLogin}
                  onChange={(Event) => {
                    setEmailIdLogin(Event.target.value);
                  }}
                />
              </div>
              <div className="p-2 pb-4 pl-0">
                <Field
                  type="password"
                  label="password"
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow-sm"
                  onChange={(Event) => {
                    setPassword(Event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="pl-12 ml-16 flex">
              <div
                className="login text-sm font-semibold mr-4 text-slate-500 cursor-pointer"
                onClick={() => {
                  setFPass(true);
                }}
              >
                Forgot password?
              </div>
              <div
                className="login text-sm font-semibold ml-4 text-slate-500 cursor-pointer"
                onClick={() => {
                  setLogType(false);
                }}
              >
                Do not have account ?
              </div>
            </div>
            <div className="ml-16 pl-12 pt-3 ">
              <button
                className="w-fit pl-4 rounded-lg text-white font-semibold button flex bg-blue-500"
                onClick={() => {
                  OnClickLogin();
                }}
              >
                <div className="p-0.5 flex w-24">
                  Log In
                  <span className="p-1 ml-3">
                    <FaArrowRight />
                  </span>
                </div>
              </button>
            </div>
            <Snackbar
              className="invalid"
              sx={{ width: "310px" }}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              action={action}
              message={Error}
              anchorOrigin={{
                vertical: "Bottom",
                horizontal: "Left",
              }}
            />

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
      <div
        class="modal fade"
        id="staticBackdropErrorBox"
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

export default FieldsLogin;
