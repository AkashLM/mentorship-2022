import React, { useState } from "react";
import "./ProfilePage.css";
import profileImg from "./profile.png";
import PersonalDeatils from "../PersonalDeatils/PersonalDeatils";
import FamilyDeatils from "../FamilyDeatils/FamilyDeatils";
import AcadmicDetails from "../AcadmicDetails/AcadmicDetails";

function ProfilePage({ viewStudentProfile }) {
  const [personalDeatils, setPersonalDeatils] = useState(false);
  const [familyDeatils, setFamilyDeatils] = useState(false);
  const [acadmicDetails, setAcadmicDeatils] = useState(false);

  const personalDetailsHandler = () => {
    setPersonalDeatils(true);
    setFamilyDeatils(false);
    setAcadmicDeatils(false);
  };

  const familyDetailsHandler = () => {
    setPersonalDeatils(false);
    setFamilyDeatils(true);
    setAcadmicDeatils(false);
  };

  const acadmicDeatilsHandler = () => {
    setPersonalDeatils(false);
    setFamilyDeatils(false);
    setAcadmicDeatils(true);
  };

  return (
    <>
      <div className="section">
        <div className="container section4">
          <div class="counterCard">
            <div class="header">
              <div class="img-box img-box2">
                <span></span>
              </div>
              <h1 class="title">Personal Details</h1>
            </div>
            <div class="content">
              <button className="btn-link" onClick={personalDetailsHandler}>
                Read More...
              </button>
            </div>
          </div>

          <div class="counterCard">
            <div class="header">
              <div class="img-box img-box2">
                <span></span>
              </div>
              <h1 class="title">Family Details</h1>
            </div>
            <div class="content">
              <button className="btn-link" onClick={familyDetailsHandler}>
                Read More...
              </button>
            </div>
          </div>

          <div class="counterCard">
            <div class="header">
              <div class="img-box img-box2">
                <span></span>
              </div>
              <h1 class="title">Academic Details</h1>
            </div>
            <div class="content">
              <button className="btn-link" onClick={acadmicDeatilsHandler}>
                Read More...
              </button>
            </div>
          </div>
        </div>

        <div className="container section4">
          <div className="row">
            {personalDeatils && <PersonalDeatils viewStudentProfile={viewStudentProfile} />}
            {familyDeatils && <FamilyDeatils viewStudentProfile={viewStudentProfile} />}
            {acadmicDetails && <AcadmicDetails viewStudentProfile={viewStudentProfile} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
