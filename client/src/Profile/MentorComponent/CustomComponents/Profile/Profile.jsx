import React, { useEffect, useState } from "react";
import mentorpic from "./mentor.png";
import defaultMentor from "../../../../assets/defaultmentorlogo.png";
import background from "./2.jpg";
import { Link } from "react-router-dom";
import Notification from "./Notification";

function Profile(props) {
  const { setEdit, mentorData, submissionStatus, setSubmissionStatus } = props;
  const [tNotes, setTNotes] = useState(0);
  const [pendingNotes, setpendingNotes] = useState(0);
  const [assignmentApproved, setassignmentApproved] = useState(0);
  const [assignmentsPending, setassignmentsPending] = useState(0);
  const DefaultImage = process.env.REACT_APP_DEFAULT_IMAGE;
  const CounterAssignmentStatus = () => {
    let CountArray1 = submissionStatus.filter((obj) => obj.Approved === false);
    setpendingNotes(CountArray1.length);
    let CountArray2 = submissionStatus.filter((obj) => obj.Approved === true);
    setTNotes(CountArray2.length);
  };
  console.log("88888", mentorData);
  useEffect(() => {
    CounterAssignmentStatus();
  }, [submissionStatus, mentorData]);
  return (
    <>
      <div className="justify-center p-2 flex ">
        <div className="text-left  mainContainer ">
          <div className="rounded-2xl pb-3 section section1">
            <div className=" empty ">
              <div className=" profilebg ">
                <img src={background} alt="background" />
              </div>
              <div className="profileEdit">
                <div className="profile rounded-full">
                  <img
                    className="rounded-full"
                    src={mentorData.Mentor_ProfileLink || DefaultImage}
                    alt="Mentor-pic"
                  />
                </div>
                <div className=" editProfileButton">
                  {/* <button
                    className="editButton"
                    type="button"
                    onClick={setEdit}
                  >
                    <span class="edit-icon"></span>
                  </button> */}
                </div>
              </div>
              <div className="profile-head ">
                <div className="nameOrg">
                  <div className=" profileName">
                    <div className=" ">
                      {mentorData.Mentor_Name
                        ? mentorData?.Mentor_Name
                        : "Mentor Name Here "}
                    </div>
                  </div>
                  <div className="Organization">
                    {/* Organization: */}
                    <div className="pl-2  ">
                      {mentorData?.Mentor_Organization
                        ? mentorData.Mentor_Organization
                        : "Mentor's Organization Here"}{" "}
                    </div>
                  </div>
                </div>
                <div className="personalProfile">
                  <div className=" ">
                    Position:{" "}
                    {mentorData?.Mentor_Position
                      ? mentorData.Mentor_Position
                      : "Mentor's Position Here"}
                  </div>
                  <div className="personalProfile">
                    {/* Qualification: */}
                    <span className=" ">
                      Qualification:{" "}
                      {mentorData?.Mentor_Qualification
                        ? mentorData.Mentor_Qualification
                        : "Mentor Qualification Here"}
                    </span>
                  </div>
                  <div className="personalProfile">
                    {/* Qualification: */}
                    <span className=" " style={{ color: "red" }}>
                      Group Name :{" "}
                      {mentorData?.Mentor_Group_Name
                        ? mentorData?.Mentor_Group_Name
                        : "Group Name Here"}
                    </span>
                  </div>
                </div>

                {/* <div>
                Experience:
                <span className="pl-2"> {initialValues.experience}</span>
              </div> */}
              </div>
              <div className="personalInfo">
                <p>Contact: &nbsp; </p>
                <span>{mentorData?.Mentor_Contact_Number} || &nbsp;</span>
                <span>
                  <a className="linkA" href="mailto:">
                    {mentorData?.Mentor_EmailId
                      ? mentorData.Mentor_EmailId
                      : " Mentor's Email ID"}
                  </a>{" "}
                  || &nbsp;
                </span>
                <span>
                  <a className="linkA" href="" target="_blank">
                    {mentorData?.Mentor_LinkedIn
                      ? mentorData.Mentor_LinkedIn
                      : "Mentor's LinkedIn"}
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" section section2">
            <div className="sectionHead">
              About
              <div className="aboutText">
                {mentorData?.Mentor_About
                  ? mentorData?.Mentor_About
                  : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}
              </div>
            </div>
          </div>

          <div className="section section4   ">
            <div class="counterCard">
              <div class="header">
                <div class="img-box">
                  <span>{tNotes ? tNotes : 0}</span>
                </div>
                <h1 class="title">Approved Notes</h1>
              </div>
              <div class="content">
                <Link class="btn-link" to="/notes">
                  Read More...
                </Link>
              </div>
            </div>

            <div class="counterCard">
              <div class="header">
                <div class="img-box">
                  <span>{pendingNotes ? pendingNotes : 0}</span>
                </div>
                <h1 class="title">Pending Notes</h1>
              </div>
              <div class="content">
                <Link class="btn-link" to="/notes">
                  Read More...
                </Link>
              </div>
            </div>

            <div class="counterCard">
              <div class="header">
                <div class="img-box">
                  <span>{assignmentApproved ? assignmentApproved : 0}</span>
                </div>
                <h1 class="title assignments">Approved Assignments</h1>
              </div>
              <div class="content">
                <Link class="btn-link" to="/assignments">
                  Read More...
                </Link>
              </div>
            </div>
            <div class="counterCard">
              <div class="header">
                <div class="img-box">
                  <span>{assignmentsPending ? assignmentsPending : 0}</span>
                </div>
                <h1 class="title assignments">Pending Assignments</h1>
              </div>
              <div class="content">
                <Link class="btn-link" to="/assignments">
                  Read More...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center p-2 notificationPanel">
          <Notification mentorData={mentorData} />
        </div>
      </div>
    </>
  );
}

export default Profile;
