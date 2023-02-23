import React, { useEffect, useState } from "react";
import defaultMentor from "../../../../assets/defaultmentorlogo.png";
import background from "./2.jpg";
import { Link } from "react-router-dom";
import Notification from "./Notification";

// Mentor Profiles
import AjayKavade from "../../../../assets/MentorProfileImages/AjayKavade.jpg";
import AmodPanchhapurkar from "../../../../assets/MentorProfileImages/AmodPanchhapurkar.jpg";
import AshfakShaikh from "../../../../assets/MentorProfileImages/AshfakShaikh.jpg";
import HrishikeshDhande from "../../../../assets/MentorProfileImages/HrishikeshDhande.jpg";
import JitendraSardesai from "../../../../assets/MentorProfileImages/JitendraSardesai.jpg";
import KaustubhKulkarni from "../../../../assets/MentorProfileImages/KaustubhKulkarni.jpg";
import KishoreKunjeer from "../../../../assets/MentorProfileImages/KishoreKunjeer.jpg";
import KrishnatMolawade from "../../../../assets/MentorProfileImages/KrishnatMolawade.jpg";
import NileshHonrao from "../../../../assets/MentorProfileImages/NileshHonrao.jpg";
import NileshVartak from "../../../../assets/MentorProfileImages/NileshVartak.jpg";
import PrashantDahibhate from "../../../../assets/MentorProfileImages/PrashantDahibhate.jpg";
import RahulLale from "../../../../assets/MentorProfileImages/RahulLale.jpg";
import SudhirPatil from "../../../../assets/MentorProfileImages/SudhirPatil.jpg";
import axios from "axios";
import Cookies from "universal-cookie";


function Profile(props) {
  const { setEdit, mentorData, submissionStatus, setSubmissionStatus } = props;
  const [tNotes, setTNotes] = useState(0);
  const [pendingNotes, setpendingNotes] = useState(0);
  const [assignmentApproved, setassignmentApproved] = useState(0);
  const [assignmentsPending, setassignmentsPending] = useState(0);
  const [customMentorPic, setCustomeMentorPic]= useState("");
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();

  //Mentor Profile Conditionals
  const DefaultImage = process.env.REACT_APP_DEFAULT_IMAGE;
  const CounterAssignmentStatus = async() => {
    if (mentorData.Mentor_Name==="Ajay Arun Kavade"){
      setCustomeMentorPic(AjayKavade);
    }else   if (mentorData.Mentor_Name==="Amod Pradeep Panchhapurkar"){
      setCustomeMentorPic(AmodPanchhapurkar)
    }else   if (mentorData.Mentor_Name==="Ashfak Shaikh"){
      setCustomeMentorPic(AshfakShaikh)
    } else   if (mentorData.Mentor_Name==="Hrishikesh Jayant Dhande"){
      setCustomeMentorPic(HrishikeshDhande)
    } else   if (mentorData.Mentor_Name==="Krishnat Narayan Molawade"){
      setCustomeMentorPic(KrishnatMolawade);
    }else   if (mentorData.Mentor_Name==="Kishore Kunjeer"){
      setCustomeMentorPic(KishoreKunjeer)
    }else   if (mentorData.Mentor_Name==="Sudhir Patil"){
      setCustomeMentorPic(SudhirPatil)
    }else   if (mentorData.Mentor_Name==="Kaustubh Kulkarni"){
      setCustomeMentorPic(KaustubhKulkarni)
    }else   if (mentorData.Mentor_Name==="Jitendra Sardesai"){
      setCustomeMentorPic(JitendraSardesai)
    }else   if (mentorData.Mentor_Name==="Prashant V Dahibhate"){
      setCustomeMentorPic(PrashantDahibhate)
    }else   if (mentorData.Mentor_Name==="Nilesh Vartak"){
      setCustomeMentorPic(NileshVartak)
    }else   if (mentorData.Mentor_Name==="Rahul D Lale"){
      setCustomeMentorPic(RahulLale)
    }else   if (mentorData.Mentor_Name==="Nilesh Guruling Honrao"){
      setCustomeMentorPic(NileshHonrao);
    }else{
      setCustomeMentorPic(defaultMentor);
    }
    //Calculate the notes counter
    let CountArray1 = submissionStatus.filter((obj) => obj.Approved === false);
    setpendingNotes(CountArray1.length);
    let CountArray2 = submissionStatus.filter((obj) => obj.Approved === true);
    setTNotes(CountArray2.length);

    //Calculate assignments counter
    const AssignmentData = await axios.post(
      `${BASEURL}/ViewPendingAssignmentByMentor`,
      {
        Res_Group_Name: mentorData.Mentor_Group_Name,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (AssignmentData) {
      // console.log("AssignmentData", AssignmentData);
      setassignmentsPending(AssignmentData.data.data1.length);
      setassignmentApproved(AssignmentData.data.data2.length);
    }
  };
  // console.log("88888", mentorData);
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
                    src={customMentorPic|| DefaultImage}
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
