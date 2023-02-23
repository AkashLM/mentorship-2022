import React, { useState, useEffect } from "react";
import "./StudentsList.css";
import StudentData from "./StudentData";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import LogoutLoader from "../../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../../HelpingFunctions/Loader";

function StudentsList(Props) {
  const { refresher, setRefresher } = Props;
  const { mentorData, setViewStudentProfile } = Props;
  const [GroupDataStudent, setGroupDataStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const DetailedFunction = async () => {
    const ListData = await axios.post(
      `${BASEURL}/ViewGroupList`,
      {
        Res_Group_Name: mentorData.Mentor_Group_Name,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (ListData) {
      // console.log("-------------->", ListData);
      setGroupDataStudent(ListData?.data?.StudentData);
      // console.log("ListDataGroupDataStudent", GroupDataStudent);
      setLoading(false);
    }
  };

  useEffect(() => {
    DetailedFunction();
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
          <div className="containerStudentList">
            <h2 className="mt-4 text-center">Student List</h2>
            <div className="card mt-4 p-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr.no</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Profile</th>
                  </tr>
                </thead>

                <tbody>
                  {GroupDataStudent.map((item, index) => {
                    return (
                      <tr>
                        <td scope="row">{index + 1}</td>
                        <td>{item.Student_Name}</td>
                        <td>{item.Student_EmailId}</td>
                        <td>{item.Student_Contact_Number}</td>
                        <td>
                          <Link to="/ViewStudentProfile">
                            {" "}
                            <button
                              className="viewProfile-btn"
                              onClick={() => {
                                setViewStudentProfile(item);
                              }}
                            >
                              VIEW PROFILE
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentsList;
