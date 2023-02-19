import React from "react";
import Button from "@mui/material/Button";
import "./Decide.css";
import logo from "../images/Keystone_logo.png";
import student from "../images/1.png";
import mentor from "../images/3.png";
import admin from "../images/2.png";

function Decide(props) {
  const {
    adminLog,
    setAdminLog,
    mentorLog,
    setmentorLog,
    studentLog,
    setStudentLog,
  } = props;
  return (
    <div className="decide">
      <img src={logo} alt="kse" className="logo" />
      <h1>Select Account Type</h1>

      <div className="loginButtons">
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setAdminLog(true);
            setmentorLog(false);
            setStudentLog(false);
          }}>
          <img src={admin} alt="admin" className="pic" />
          Admin
        </Button>
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setmentorLog(true);
            setAdminLog(false);
            setStudentLog(false);
          }}>
          <img src={mentor} alt="mentor" className="pic" />
          Mentor
        </Button>
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setStudentLog(true);
            setAdminLog(false);
            setmentorLog(false);
          }}>
          <img src={student} alt="student" className="pic" />
          Student
        </Button>
      </div>

      <div className="info">
        <div className="Heading-Type">Industrial Mentorship Program 2023</div>
        <div className="IMP-Logo"></div>
      </div>
    </div>
  );
}

export default Decide;
