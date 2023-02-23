import React, { useState } from "react";
import "./Message.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

function Message(Props) {
  const { mentorData } = Props;
  const [msgTitle, setMsgTitle] = useState("");
  const [msgDesc, setMsgDesc] = useState("");
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [msgField, setMsgField] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );
  const handelSubmitMessage = async () => {
    // console.log("mm", msgTitle, msgDesc);
    const MsgRes = await axios.post(
      `${BASEURL}/AddMessage`,
      {
        Res_Heading_Name: "Important notice from Mentor !",
        Res_Topic_Name: msgTitle,
        Res_Date: new Date(),
        Res_Mentor_Name: mentorData.Mentor_Name,
        Res_Description: msgDesc,
        Res_Group_Name: mentorData.Mentor_Group_Name,
        Res_Message_Type: "Grouped",
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
      setOpen(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="message-card">
              <h3 className="quickmessage text-center mb-5">Quick Message</h3>
              <input
                type="text"
                className="form-control mb-2 p-2"
                placeholder="Enter Topic Name"
                required
                value={msgTitle}
                onChange={(E) => {
                  setMsgTitle(E.target.value);
                }}
              />
              <textarea
                className="form-control mb-2 p-2"
                placeholder="Enter Your Message"
                rows="5"
                name="message"
                required
                value={msgDesc}
                onChange={(Event) => {
                  setMsgDesc(Event.target.value);
                }}
              />{" "}
              <br />
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="send-btn"
                        class="send-btn"
                        // data-bs-toggle="modal"
                        // data-bs-target="#staticBackdrop"
                        onClick={() => {
                          handelSubmitMessage();
                        }}
                      >
                        Send
                      </button>
                      <Snackbar
                        className="valid"
                        sx={{ width: "310px" }}
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                        action={action}
                        message={"Message sent successfully!"}
                        anchorOrigin={{
                          vertical: "Bottom",
                          horizontal: "Left",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <h5>
                          {" "}
                          Yehh! Your message has been send to the Mentees
                        </h5>
                        <br />
                        <h6>(Warning : Message cannot be Undone !)</h6>
                      </div>
                      <div class="modal-footer">
                        <Link to="/message">
                          <button
                            type="button"
                            class="send-btn"
                            data-bs-dismiss="modal"
                          >
                            Done
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <Link to="/">
                      <button className="cancel-btn">Cancel</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      {/* <GoogleMaps lat={"213213845"} long={"2313132"} /> */}
    </>
  );
}

export default Message;
