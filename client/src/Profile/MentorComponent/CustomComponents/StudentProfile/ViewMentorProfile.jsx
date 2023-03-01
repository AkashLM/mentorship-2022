import React, { useState } from "react";
import mentorpic from "./profile.png";
import background from "./2.jpg";
import { Link } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";

function Profile(props) {
  const { setEdit, initialValues, viewStudentProfile } = props;
  const [tNotes, setTNotes] = useState(15);
  const [pendingNotes, setpendingNotes] = useState(45);
  const [assignmentApproved, setassignmentApproved] = useState(52);
  const [assignmentsPending, setassignmentsPending] = useState(65);
  return (
    <div className="justify-center p-5 ">
      <div className="text-left  mainContainer ">
        <div className="rounded-2xl pb-12 section section1">
          <div className=" empty ">
            {/* Image below  */}
            {/* Image below  */}
            {/* Image below  */}
            {/* Image below  */}
            <div className=" profilebg ">
              <img src={background} alt="background" />
            </div>
            <div className="profileEdit">
              <div className="profile">
                <img
                  className="rounded-full"
                  src={mentorpic}
                  alt="Mentor-pic"
                />
              </div>
              <div className=" editProfileButton">
                {/* <button className="editButton" type="button" onClick={setEdit}>
                  <span class="edit-icon"></span>
                </button> */}
              </div>
            </div>
            <div className="profile-head ">
              <div className="nameOrg">
                <div className=" profileName">
                  <div className=" ">
                    {initialValues.name ? initialValues.name : "None"}
                  </div>
                </div>
                <div className="Organization">
                  {/* Organization: */}
                  <div className=" ">
                    {initialValues.organizationname
                      ? initialValues.organizationname
                      : "None"}
                  </div>
                </div>
              </div>
              <div className=" personalProfile">
                <div className=" ">
                  {initialValues.position ? initialValues.position : "None"}
                </div>
                <div className="">
                  {/* Qualification: */}
                  <span className="">
                    {initialValues.qualification
                      ? initialValues.qualification
                      : "None"}
                  </span>
                </div>
              </div>
              <div className="personalProfile">
                {/* Qualification: */}
                <span className=" " style={{ color: "red" }}>
                  Group Name :{" "}
                  {initialValues.groupname ? initialValues.groupname : "None"}
                </span>
              </div>

              {/* <div>
                Experience:
                <span className="pl-2"> {initialValues.experience}</span>
              </div> */}
            </div>
            <div className="personalInfo">
              <p>Contact: &nbsp; </p>
              <span>
                +91{initialValues.mobile ? initialValues.mobile : "None"} ||
                &nbsp;
              </span>
              <span>
                <a className="linkA" href="mailto:">
                  {initialValues.email ? initialValues.email : "None"}
                </a>{" "}
                || &nbsp;
              </span>
              <span>
                <a className="linkA" href="" target="_blank">
                  {initialValues.linkedin ? initialValues.linkedin : "None"}
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className=" section section2">
          <div className="sectionHead">
            About
            <div className="aboutText">
              {initialValues.about
                ? initialValues.about
                : `I am here to learn and grow, both academically and
personally. I am passionate about acquiring new knowledge and expanding my
understanding of the world around me. I believe that education is a key tool for success and
personal fulfillment, and I am eager to make the most of the opportunities I have been given
to learn and grow. Whether through formal classes or independent study, I am committed to
taking advantage of every opportunity to challenge myself and develop new skills.`}
            </div>
          </div>
        </div>
        {/* Contact below  */}
        {/* Contact below  */}
        {/* Contact below  */}
        {/* Contact below  */}
        {/* <div className="  ">
          <div className="section section3">
            <div className="">
              <div className=" ">
                <div className=" sectionHead">Personal Details</div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <li className="">Contact Number:</li>
                    <li>123456789</li>

                    <li className="">Email Id:</li>
                    <li>Hrushi@gmail.com</li>

                    <li>Linkdin Profile:</li>
                    <li>https//:xyzz</li>
                  </div>
                  <div className="">
                  </div>
                </div>
                <div className="list-disc flex  font-serif   p-5">
                  <div className=" text-lg leading-8   text-gray-500">
                    <li>Dummyy :</li>
                    <li>Dummyy :</li>
                    <li>Dummyy :</li>
                  </div>
                  <div className="pl-2 list-none leading-8 text-lg text-gray-500">
                    <li>xyz.xyz</li>
                    <li>xyz.xyz</li>
                    <li>xyz.xyz</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Counter Below  */}
        {/* Counter Below  */}
        {/* Counter Below  */}
        {/* Counter Below  */}

        {/* <div className="section section4   ">
          <div class="counterCard">
            <div class="header">
              <div class="img-box">
                <span>{tNotes}</span>
              </div>
              <h1 class="title">Approved Notes</h1>
            </div>
            <div class="content">
              <Link class="btn-link" to="/approvalnotes">
                Read More...
              </Link>
            </div>
          </div>

          <div class="counterCard">
            <div class="header">
              <div class="img-box">
                <span>{pendingNotes}</span>
              </div>
              <h1 class="title">Pending Notes</h1>
            </div>
            <div class="content">
              <Link class="btn-link" to="/approvalnotes">
                Read More...
              </Link>
            </div>
          </div>

          <div class="counterCard">
            <div class="header">
              <div class="img-box">
                <span>{assignmentApproved}</span>
              </div>
              <h1 class="title assignments">Approved Assignments</h1>
            </div>
            <div class="content">
              <Link class="btn-link" to="/approvalnotes">
                Read More...
              </Link>
            </div>
          </div>
          <div class="counterCard">
            <div class="header">
              <div class="img-box">
                <span>{assignmentsPending}</span>
              </div>
              <h1 class="title assignments">Pending Assignments</h1>
            </div>
            <div class="content">
              <Link class="btn-link" to="/approvalnotes">
                Read More...
              </Link>
            </div>
          </div>
        </div> */}

        <div>
          <ProfilePage viewStudentProfile={viewStudentProfile} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
