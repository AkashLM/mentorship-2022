import React, { useEffect, useState } from "react";
import "./ScheduledMeetings.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Meetingimg from "./meetingimg.png";
import Button from "@mui/material/Button";
import "./CustomTable.css";
import DateConverter from "../../../../HelpingFunctions/DateConverter"
import LogoutLoader from "../../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../../HelpingFunctions/Loader";

function ScheduledMeetings(Props) {
  const { refresher, setRefresher } = Props;
  const { mentorData, setMentorData } = Props;
  const [allMeeting, setAllMeeting] = useState([]);
  const [currentMeetings, setCurrentMeetings] = useState([]);
  let PastMeetings = new Array();
  const [loading, setLoading] = useState(true);
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [previousMeetings, setPreviousMeetings] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  // console.log("MentorData", mentorData);
  const MeetingsDataFunction = async () => {
    const MeetingData = await axios.post(
      `${BASEURL}/ViewMeetings`,
      {
        Res_Group_Name: mentorData.Mentor_Group_Name,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (MeetingData) {
      setAllMeeting(MeetingData.data.data);
      // console.log("da", allMeeting);
      const arr1 = [];
      const arr2 = [];
      allMeeting.map((obj) => {
        if (obj.MeetingStatus === "Pending") {
          arr1.push(obj);
          setScheduledMeetings(arr1);
        } else if (obj.MeetingStatus === "Approved") {
          arr2.push(obj);
          setPreviousMeetings(arr2);
        }
      });
      if (scheduledMeetings && previousMeetings) {
        // console.log("da3", scheduledMeetings);
        // console.log("da4", previousMeetings);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    MeetingsDataFunction();
    // console.log("previousMeetings", previousMeetings);
  }, [loading]);

  return (
    <>
      {loading ? (
        <>
            
        <div><CircularColor/><LogoutLoader refresher={refresher}
        setRefresher={setRefresher}/></div>
     
    </>
      ) : (
        <div>
          <div className="scheduled-center">
            <div className="xx">
              <h2 className="pageHeading text-center ">Upcoming Meetings</h2>
            </div>
            <div class="customTable-container">
              <div class="customTable-content">
                <div class="customTables-section ">
                  {scheduledMeetings?.map((ArrayObj, index) =>{
                    // console.log("jjjjjj",ArrayObj);
                    return (
                      <>
                        <div class="customTables" key={index}>
                          <div class="customTable-box">
                            <div class="customTable-content">
                              <div class="customTable-header">
                                <div class="name">
                                  Title:{" "}
                                  {ArrayObj.TopicName ? (
                                    ArrayObj.TopicName
                                  ) : (
                                    <>Error Extracting Value</>
                                  )}
                                </div>

                                <p>{ArrayObj.GroupName}&nbsp;~&nbsp;{ArrayObj.MentorName}</p>
                              </div>
                              <p class="customTable-line">
                                <b>Description:</b> {ArrayObj.Description}
                              </p>
                              <p class="customTable-line">
                                <b>Venue:</b> {ArrayObj.Venue}
                              </p>

                              <p class="customTable-line time">
                                <b>Date & Time:</b> {DateConverter(ArrayObj.Date, "Date" )} | {ArrayObj.Time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="table-wrapper">
              {scheduledMeetings?.map((ArrayObj, index) => {
                return (
                  <div className="card-whole" key={index}>
                    <div className="card-one">
                      <div className="card-left">
                        <div className="card-topic">
                          {ArrayObj.TopicName ? (
                            ArrayObj.TopicName
                          ) : (
                            <>No-Response</>
                          )}
                        </div>
                        <div className="card-mentor">
                          <span className="card-highlight">Group-Name:- </span>
                          {ArrayObj.GroupName}
                        </div>
                        <div className="card-mentor">
                          <span className="card-highlight">Mentor-Name:- </span>
                          {ArrayObj.MentorName}
                        </div>
                        <div className="card-mentor">
                          <span className="card-highlight">
                            Venue of Meet:-{" "}
                          </span>
                          {ArrayObj.Venue}
                        </div>
                        <div className="card-button">
                          <Button variant="contained" size="large">
                            {ArrayObj.Location}
                          </Button>
                          <div className="card-date">
                            <div>
                              <span className="card-highlight">Date:- </span>
                              {DateConverter(ArrayObj.Date, "Date" )}
                            </div>
                            <div>
                              {" "}
                              <span className="card-highlight">Time:- </span>
                              {ArrayObj.Time }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right">
                        <img
                          src={Meetingimg}
                          alt="img"
                          height="300"
                          width="400"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className="scheduled-center">
            <div className="xx">
              <h2 className="pageHeading text-center ">Past Meetings</h2>
            </div>
            <div class="customTable-container">
              <div class="customTable-content">
                <div class="customTables-section ">
                  {previousMeetings?.map((ArrayObj, index) => {
                    // console.log("jjjjjj",ArrayObj);
                    return (
                      <>
                        <div class="customTables" key={index}>
                          <div class="customTable-box">
                            <div class="customTable-content">
                              <div class="customTable-header">
                                <div class="name">
                                  Title:{" "}
                                  {ArrayObj.TopicName ? (
                                    ArrayObj.TopicName
                                  ) : (
                                    <>Error Extracting Value</>
                                  )}
                                </div>

                                <p>{ArrayObj.GroupName}&nbsp;~&nbsp;{ArrayObj.MentorName}</p>
                              </div>
                              <p class="customTable-line">
                                <b>Description:</b> {ArrayObj.Description}
                              </p>
                              <p class="customTable-line">
                                <b>Venue:</b> {ArrayObj.Venue}
                              </p>

                              <p class="customTable-line time">
                                <b>Date & Time:</b> {DateConverter(ArrayObj.Date, "Date" )} |  {ArrayObj.Time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ScheduledMeetings;
