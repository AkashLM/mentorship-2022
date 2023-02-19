import React from "react";
import addmeeting from "../../../assets/addmeeting.svg";
import meetings from "../../../assets/meetings.svg";
import profile from "../../../assets/profile.svg";
import notes from "../../../assets/notes.png";
import assignments from "../../../assets/assignment.svg";
import studentslist from "../../../assets/user.png";
import message from "../../../assets/message.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const StudentSideNav = (props) => {
  const { refresher, setRefresher } = props;
  const cookies = new Cookies();
  const handleLogoutFunction = () => {
    cookies.remove("KeyToken");
    setRefresher(!refresher);
    window.location.reload();
  };
  return (
    <div className="sidenav" style={{ width: props.width }}>
      <div className="elementblock">
        <Link to="/">
          <img src={profile} alt="profileIcon" />
        </Link>
        <Link to="/" className="navElements">
          Student Profile
        </Link>
      </div>
      <div className="elementblock">
        <Link to="/latestmeetup">
          <img src={meetings} alt="meetingIcon" />
        </Link>
        <Link to="/latestmeetup" className="navElements">
          {" "}
          Latest Meetings
        </Link>
      </div>

      <div className="elementblock">
        <Link to="/assignmentsstudents">
          <img src={assignments} alt="assignmentsIcon" />
        </Link>
        <Link to="/assignmentsstudents" className="navElements">
          {" "}
          Assignments
        </Link>
      </div>

      <div className="elementblock">
        <Link to="/notes">
          <img src={notes} alt="notesIcon" />
        </Link>
        <Link to="/notes" className="navElements">
          My Notes
        </Link>
      </div>

      <div className="elementblock">
        <Link to="/groupdetails">
          <img src={studentslist} alt="studentslistIcon" />
        </Link>
        <Link to="/groupdetails" className="navElements">
          {" "}
          Group Details
        </Link>
      </div>

      <div className="elementblock">
        <Link to="/quickmessage">
          <img src={message} alt="mentormessageIcon" />
        </Link>
        <Link to="/quickmessage" className="navElements">
          {" "}
          Notification
        </Link>
      </div>

      <div
        className="elementblock"
        onClick={() => {
          handleLogoutFunction();
        }}
      >
        <img src={message} alt="mentormessageIcon" />

        <div className="navElements"> Logout</div>
      </div>
    </div>
  );
};
export default StudentSideNav;
