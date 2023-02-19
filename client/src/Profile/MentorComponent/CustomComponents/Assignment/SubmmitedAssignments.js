import React, { useState, useEffect } from "react";
import "./SubmmitedAssignments.css";
import { Link } from "react-router-dom";
import SubmmitedAssignmentsData from "./SubmmitedAssignmentsData";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../../../HelpingFunctions/DateConverter";

function Assignments(Props) {
  const { mentorData } = Props;
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);
  const [pendingAssignment, setPendingAssignment] = useState([]);
  const [approvedAssignment, setApprovedAssignment] = useState([]);
  const [approvedFlag, setApprovedFlag] = useState({});
  const [refresh, setRefresh] = useState(false);

  const AssignmentDataFunction = async () => {
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
      console.log("AssignmentData", AssignmentData);
      setPendingAssignment(AssignmentData.data.data1);
      setApprovedAssignment(AssignmentData.data.data2);
      setLoading(false);
    }
  };

  const ApprovedAssignmentFunction = async () => {
    const ApprovedData = await axios.post(
      `${BASEURL}/AllowedAssignment`,
      {
        Res_Assign_Id: approvedFlag._id,
        PermissionStatus: true,
        Res_ApprovedDate: new Date(),
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (ApprovedData) {
      setRefresh(!refresh);
      //Sending message
      const MsgRes = await axios.post(
        `${BASEURL}/AddMessage`,
        {
          Res_Heading_Name: "Assignment Status ",
          Res_Topic_Name: "Your assignment has been approved !",
          Res_Date: new Date(),
          Res_Mentor_Name: approvedFlag.Mentor_Name,
          Res_Description: `Hello, ${approvedFlag.Student_Name}, You had submitted your assignment on ${DateConverter(approvedFlag.Upload_Date, "Date")}.And your mentor ${approvedFlag.Mentor_Name
          } has been checked and approved your assignment recently. Thank you.`,
          Res_Group_Name: approvedFlag.Group_Name,
          Res_Student_Name: approvedFlag.Student_Name,
          Res_Message_Type: "Assignment_Status",
        },
        {
          headers: {
            Authorization: cookies.get("KeyToken"),
          },
        }
      );
    }
  };

  const RejectAssignmentFunction = async () => {
    console.log("ApprovedAssignmentFunction", approvedFlag);
    const RejectedData = await axios.post(
      `${BASEURL}/AllowedAssignment`,
      {
        Res_Assign_Id: approvedFlag._id,
        PermissionStatus: false,
        Res_ApprovedDate: new Date(),
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (RejectedData) {
      setRefresh(!refresh);
            //Sending message
            const MsgRes = await axios.post(
              `${BASEURL}/AddMessage`,
              {
                Res_Heading_Name: "Assignment Status ",
                Res_Topic_Name: "Your assignment has been rejected !",
                Res_Date: new Date(),
                Res_Mentor_Name: approvedFlag.Mentor_Name,
                Res_Description: `Hello, ${approvedFlag.Student_Name}, You had submitted your assignment on ${DateConverter(approvedFlag.Upload_Date, "Date")}.And your mentor ${approvedFlag.Mentor_Name
                } has been rejected.May mentors want to more improvement in your assignment. Thank you.`,
                Res_Group_Name: approvedFlag.Group_Name,
                Res_Student_Name: approvedFlag.Student_Name,
                Res_Message_Type: "Assignment_Status",
              },
              {
                headers: {
                  Authorization: cookies.get("KeyToken"),
                },
              }
            );
    }
  };
  

  useEffect(() => {
    AssignmentDataFunction();
  }, [loading, refresh]);

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <div>
            <div className="container">
              <h3 className="text-center pageHeading">Pending Assignment</h3>
              <div className="card mt-4 p-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr.no</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Topic</th>
                      <th scope="col"></th>
                      <th scope="col">Submmitted Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pendingAssignment.map((item, index) => {
                      return (
                        <tr>
                          <td scope="row">{index + 1}</td>
                          <td>{item.Student_Name}</td>
                          <td>{item.Topic_Name}</td>
                          <td>{item.PostedDate}</td>
                          <td>{DateConverter(item.Upload_Date, "Date")}</td>
                          <td>
                            <button
                              className="btn btn-primary view-btn"
                              style={{ marginRight: "5px" }}
                              onClick={() => {
                                setApprovedFlag(item);
                                ApprovedAssignmentFunction();
                              }}
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-primary view-btn"
                              onClick={() => {
                                setApprovedFlag(item);
                                RejectAssignmentFunction();
                              }}
                            >
                              Reject
                            </button>
                            <a href={`${item.Link}`} target="_blank">
                              <button className="btn btn-primary profile-btn">
                                View
                              </button>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="container">
              <h3 className="text-center pageHeading">Approved Assignment</h3>
              <div className="card mt-4 p-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr.no</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Topic</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Approved Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {approvedAssignment.map((item, index) => {
                      return (
                        <tr>
                          <td scope="row">{index + 1}</td>
                          <td>{item.Student_Name}</td>
                          <td>{item.Topic_Name}</td>
                          <td>{item.Upload_Date}</td>
                          <td>{DateConverter(item.ApprovedDate, "Date")}</td>
                          <td>
                            <a href={`${item.Link}`} target="_blank">
                              <button
                                className="btn btn-primary profile-btn"
                                style={{ marginRight: "5px" }}
                              >
                                View
                              </button>
                            </a>
                            <button
                              className="btn btn-primary view-btn"
                              onClick={() => {
                                setApprovedFlag(item);
                                RejectAssignmentFunction();
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Assignments;
