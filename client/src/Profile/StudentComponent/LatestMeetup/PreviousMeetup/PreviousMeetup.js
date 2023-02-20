import React from "react";
import "./PreviousMeetup.css";
import randomImage from "./images.png";
import DateConverter from "../../../../HelpingFunctions/DateConverter"

function PreviousMeetup(Props) {
  const { previousMeetings } = Props;

  return (
    <>
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
      {/* <div className="container">
        <div className="main-container">
          <h4 className="text-center pageHeading">Previous Meetups</h4>
          <div className="row">
            {previousMeetings?.map((ArrayObj, index) => {
              console.log("jjjjjj", ArrayObj);
              return (
                <div className="col-md-6">
                  <div className="child-card">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="random-img" src={randomImage} />
                      </div>
                      <div className="col-md-6 mt-5">
                        <div className="Topic-class"><b>{ArrayObj.TopicName} </b> <br /></div>
                        <b>Description :</b> {ArrayObj.Description} <br />
                        <br />
                        <b>Date :</b>
                        {DateConverter(ArrayObj.Date, "Date" )} <br />
                        <b>Venue :</b> {ArrayObj.Location}
                        <br />
                        <button className="mt-5 text-center btn-completed">
                        ✅ <sapn className="Topic-class-Comp">Completed </sapn>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default PreviousMeetup;
