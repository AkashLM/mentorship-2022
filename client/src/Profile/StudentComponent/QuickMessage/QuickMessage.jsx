import React, { useState, useEffect } from "react";

import Containter from "./Containter";
import "./QuickMessage.css";
import Flower from "./flower.jpeg";
import BestFlower from "./bestflower.jpeg";
import Laptop from "./laptop.webp";
import Keypad from "./keypad.jpeg";
import Lappy from "./lappy.jpeg";
import Plant from "./plant.jpeg";
import noti from "./push-notification.png";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../../HelpingFunctions/DateConverter";
import LogoutLoader from "../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../HelpingFunctions/Loader";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

const QuickMessage = ({ studentData }, Props) => {
  const { refresher, setRefresher } = Props;
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [Messagedata, setPMessagedata] = useState();
  const [msgTitle, setMsgTitle] = useState("");
  const [msgDesc, setMsgDesc] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  // console.log("studentData", studentData);
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClassName, setSnackbarClassName] = useState();
  const handleClose = () => {
   
    setOpen(false);
  };
   
  const action = (
  
      <button onClick={handleClose} >
       <RxCross2/>
      </button>
  );
  const handelMessage = async () => {
    const PendingData = await axios.post(
      `${BASEURL}/ViewMessage`,
      {
        Res_Group_Name: studentData.data.data.Student_Group,
        Res_Student_Name: studentData.data.data.Student_Name,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (PendingData) {
      setPMessagedata(PendingData.data.data1);
      // console.log("Message ", Messagedata);
      setLoading(false);
    }
  };

  const handelSubmitMessage = async (e) => {
    const MsgRes = await axios.post(
      `${BASEURL}/AddMessage`,
      {
        Res_Heading_Name: "Feedback for previous Meetup",
        Res_Topic_Name: msgTitle,
        Res_Date: new Date(),
        Res_Mentor_Name: studentData.data.data.Student_Mentor_Name,
        Res_Description: msgDesc,
        Res_Group_Name: studentData.data.data.Student_Group,
        Res_Student_Name: studentData.data.data.Student_Name,
        Res_Message_Type: "Feedback",
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (MsgRes) {
      // console.log("Message handelSubmitMessage", MsgRes);
      setMsgDesc("");
      setMsgTitle("");
      setRefresh(!refresh);
      setOpen(true);
      setSnackbarMsg("Message Sent")
      setSnackbarClassName("valid")
    }
    setLoading(true);
    setLoading(false);
  };
  useEffect(() => {
    handelMessage();
  }, [loading,refresh]);

  return (
    <>
      {loading ? (
         <>
         <div><CircularColor/><LogoutLoader refresher={refresher}
         setRefresher={setRefresher}/></div>
     </>
      ) : (
        <>
          {" "}
          <Snackbar className={snackbarClassName} 
              sx={{ width: "310px"}}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              action={action}
              message={snackbarMsg}
              anchorOrigin={{
                vertical: "Bottom",
                horizontal: "Left",
              }
    
            }
            />
          <h2 className="pageHeading text-center ">Quick Notifications</h2>
          <div className="notificationparent">
            {Messagedata &&
              Messagedata?.map((item, index) => {
                return (
                  <div className="notificationcontainer ">
                    <div className="card_top">
                      <div className="card_notification " key={index}>
                        <div className="card_load">
                          <img className="image" src={noti} alt="img" />
                        </div>
                          <div className="card_notification_top">
                        <div className="card_load_extreme_title card_load_extreme_title1 ">
                          <b>
                            {item.Topic}{" "}
                            {item.Type === "Feedback" ? "(Feedback)" : ""}
                          </b>
                        </div>
                        <div className="card_load_extreme_title  ">
                          {" "}
                          Date: {DateConverter(item.Date, "Date")} |{" "}
                          {DateConverter(item.Date, "Time")}
                        </div>
                        
                        <div className="card_load_extreme_descripion ">
                          {item.Description}{" "}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <h2 className="pageHeading text-center ">Feedback Form</h2>
          <div className="notificationparent-2">
            <div className="quick_msg">
              <input
                type="text"
                className="quick_text"
                placeholder="Enter Topic Name"
                required
                value={msgTitle}
                onChange={(E) => {
                  setMsgTitle(E.target.value);
                }}
              />
              <textarea
                type="text"
                className="quick_text_1"
                placeholder="Enter your Feedback Message"
                required
                value={msgDesc}
                onChange={(E) => {
                  setMsgDesc(E.target.value);
                }}
              />
              <button
                className="quick_send"
                type="submit"
                onClick={() => {
                  handelSubmitMessage();
                }}
              >
                
                <div class="svg-wrapper-1-sendButton">
                  <div class="svg-wrapper-sendButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default QuickMessage;
