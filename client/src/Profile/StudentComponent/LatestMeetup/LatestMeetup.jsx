import React, { useEffect, useState } from "react";
import "./LatestMeetup.css";
import randomImage from "./random-imgjpeg";
import PreviousMeetup from "./PreviousMeetup/PreviousMeetup";
import axios from "axios";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";
import Meetingimg from "./meetingimg.png";
import DateConverter from "../../../HelpingFunctions/DateConverter"
import LogoutLoader from "../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../HelpingFunctions/Loader";


const LatestMeetup = (Props) => {
  const { refresher, setRefresher } = Props;
  const { studentData } = Props;
  const [allMeeting, setAllMeeting] = useState([]);
  const [currentMeetings, setCurrentMeetings] = useState([]);
  let PastMeetings = new Array();
  const [loading, setLoading] = useState(true);
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [previousMeetings, setPreviousMeetings] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const MeetingsDataFunction = async () => {
    const MeetingData = await axios.post(
      `${BASEURL}/ViewMeetings`,
      {
        Res_Group_Name: studentData.data.data.Student_Group,
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
        <>
        
          {" "}
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
                                  Title: {" "}
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
            
          </div>
          {/* <div className="container">
            <div className="child-container">
              <h3 className="text-center pageHeading">Latest Meetup</h3>
              {scheduledMeetings?.map((ArrayObj, index) => {
                // console.log("jjjjjj", ArrayObj);

                return (
                  <div className="card-whole" key={index}>
                    <div className="card-one">
                      <div className="card-left">
                        <div className="card-topic">
                          {ArrayObj.TopicName ? ArrayObj.TopicName : <>Not Mentioned</>}
                        </div>
                        <div className="card-venue" style={{marginTop:"-5rem", }}>
                            {ArrayObj.Description ? (
                              ArrayObj.Description
                            ) : (
                              <></>
                            )}
                          </div>
                        <div className="card-mentor">
                          <span className="card-highlight">Group-Name:- </span>
                          <div className="card-venue">
                            {ArrayObj.GroupName ? (
                              ArrayObj.GroupName
                            ) : (
                              <>Not Mentioned</>
                            )}
                          </div>
                        </div>
                        <div className="card-mentor">
                          <span className="card-highlight">Mentor-Name:- </span>
                          <div className="card-venue">
                            {ArrayObj.MentorName ? (
                              ArrayObj.MentorName
                            ) : (
                              <>Not Mentioned</>
                            )}
                          </div>
                        </div>
                        <div className="card-mentor">
                          <span className="card-highlight">
                            Venue of Meet :-{" "}
                          </span>
                          <div className="card-venue">
                            {ArrayObj.Venue ? (
                              ArrayObj.Venue
                            ) : (
                              <>Not Mentioned</>
                            )}
                          </div>
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
                           {ArrayObj.Time} 
                          
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
            </div>
          </div> */}
          {/*  */}
          {/* <div className="card-whole" key={index}>
            <div className="card-one">
              <div className="card-index">
                {index + 1}
                {")"}
              </div>
              <div className="card-left">
                <div className="card-topic">
                  {ArrayObj.TopicName ? ArrayObj.TopicName : <>No-Response</>}
                </div>
                <div className="card-mentor">
                  <span className="card-highlight">Group-Name:- </span>
                </div>
                <div className="card-mentor">
                  <span className="card-highlight">Mentor-Name:- </span>
                </div>
                <div className="card-venue">ArrayObj.Venue</div>
                <div className="card-button">
                  <Button variant="contained" size="large">
                    View Location
                  </Button>
                  <div className="card-date">
                    <div>
                      <span className="card-highlight">Date:- </span>
                      ArrayObj.Date
                    </div>
                    <div>
                      {" "}
                      <span className="card-highlight">Time:- </span>
                      ArrayObj.Time
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <img src={Meetingimg} alt="img" height="300" width="400" />
              </div>
            </div>
          </div> */}
          <div>
            <PreviousMeetup previousMeetings={previousMeetings} />
          </div>
        </>
      )}
    </>
  );
};

export default LatestMeetup;
