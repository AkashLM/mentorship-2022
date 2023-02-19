import React, { useEffect, useState } from "react";
import "./Notification.css";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../../../HelpingFunctions/DateConverter"

function Notification(Props) {
  const { mentorData } = Props;
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh]=useState(false);
  const [message, setMessage] = useState("");
  const [Messagedata, setPMessagedata] = useState([]);
  //
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  //
  const CreateMessageDataFunction = async () => {
    const MessageData = await axios.post(
      `${BASEURL}/AddMessage`,
      {
        Res_Heading_Name: "Important Notice ",
        Res_Topic_Name: "Quick Message",
        Res_Date: new Date(),
        Res_Mentor_Name: mentorData.Mentor_Name,
        Res_Description: message,
        Res_Group_Name: mentorData.Mentor_Group_Name,
        Res_Message_Type: "Grouped",
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (MessageData) {
      setMessage("");
      setRefresh(!refresh);
    }
  };

  const handelViewMessage = async () => {
    const MsgData = await axios.post(
      `${BASEURL}/ViewMessage`,
      {
        Res_Group_Name: mentorData.Mentor_Group_Name,
        Res_Student_Name: "None",
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );

    if (MsgData) {
      let TempObj = {};
      setPMessagedata(MsgData.data.data1);
      setLoading(false);
    }
  };
  const CustomFunction =(Item)=>{
    if (Item.Type ==="Feedback") {
      return (
        <>
          {" "}
          <p class="p">{`From ${Item.Student_Name} -> Feedback :${Item.Description}`}</p>
        </>
      );
    } else {
      return <p class="p">{Item.Description}</p>;
    }
  };
  useEffect(() => {
    handelViewMessage();
  }, [loading,refresh]);
  return (
    <div className="notificationP">
      <div className="notificationWrapper">
        <h2>Updates</h2>
        {Messagedata.map((Item) => {
          return (
            <div class="notificationContainer">
              <div class="img"></div>
              <div class="notificationTextBox">
                <div class="notificationTextContent">
                  <p class="h1">{`${Item.Type==="Feedback" ? Item.Type : ""} ${Item.Topic} `}</p>
                </div>
                <span class="span">{DateConverter(Item.Date, "Date" )}</span>
                {CustomFunction(Item)}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Quick Message</h2>
        <div className="msgContainer">
          <input
            type="text"
            className="msgInput"
            placeholder="Enter Message"
            value={message}
            onChange={(E) => {
              setMessage(E.target.value);
            }}
          />
          <button
            className="msgSend"
            onClick={() => {
              CreateMessageDataFunction();
            }}
          >
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
