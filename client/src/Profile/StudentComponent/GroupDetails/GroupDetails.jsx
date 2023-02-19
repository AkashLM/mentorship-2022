import React, { useEffect, useState } from "react";
import "./GroupDetails.css";
import mentorpic from "./mentor.png";
import axios from "axios";
import Cookies from "universal-cookie";

function createData(name, organization, mobile, email) {
  return { name, organization, mobile, email };
}

const rows = [
  createData(
    "Hrushikesh Ambike",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Akash Malekar",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Hrushikesh Ambike",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Rahat Sayyed",
    "Keystone grp of association",
    9359482672,
    "x@x.x"
  ),
  createData(
    "Hrushikesh Ambike",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Akash Malekar",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Hrushikesh Ambike",
    "Keystone grp of association",
    9359402672,
    "x@x.x"
  ),
  createData(
    "Rahat Sayyed",
    "Keystone grp of association",
    9359482672,
    "x@x.x"
  ),
];

export default function BasicTable({ studentData }) {
  const [GroupDataStudent, setGroupDataStudent] = useState([]);
  const [GroupDataMentor, setGroupDataMentor] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");
  const [emailId, setEmailId] = useState("");

  const [loading, setLoading] = useState(true);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const DetailedFunction = async () => {
    const ListData = await axios.post(
      `${BASEURL}/ViewGroupList`,
      {
        Res_Group_Name: studentData.data.data.Student_Group,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );

    if (ListData) {
      console.log("-------------->",ListData);
      setGroupDataStudent(ListData?.data?.StudentData);
      setGroupDataMentor(ListData?.data?.MentorData);
      console.log("ListDataGroupDataStudent", GroupDataStudent);
      console.log("ListDataGroupDataMentor", GroupDataMentor);
      setLinkedIn(ListData?.data.MentorData[0]?.Mentor_LinkedIn);
      setEmailId(ListData?.data.MentorData[0]?.Mentor_EmailId);
      setLoading(false);
    }
  };

  useEffect(() => {
    DetailedFunction();
  }, [loading]);
  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <div className="detailsContainer">
            <div class="cardStudentMentor" data-state="#about">
              <div class="cardStudentMentor-header">
                <div
                  class="cardStudentMentor-cover"
                  style={{ backgroundImage: `url(${mentorpic})` }}
                ></div>
                <img
                  class="cardStudentMentor-avatar"
                  src={mentorpic}
                  alt="avatar"
                />
                <h1 class="cardStudentMentor-fullname">
                  {GroupDataMentor[0]?.Mentor_Name}
                </h1>
                <h2 class="cardStudentMentor-jobtitle">
                  {GroupDataMentor[0]?.Mentor_Position}
                </h2>
                <h2 class="cardStudentMentor-organization">
                  {GroupDataMentor[0]?.Mentor_Organization}
                </h2>
              </div>
              {/* <div class="cardStudentMentor-main"> */}
              <div class="cardStudentMentor-section" id="about">
                <div class="cardStudentMentor-content">
                  <div class="cardStudentMentor-subtitle">ABOUT</div>
                  <p class="cardStudentMentor-desc">
                    {GroupDataMentor[0]?.Mentor_About}
                  </p>
                  <div className="studentMentorFooter">
                    <div className="GroupName">
                      Group Name:{" "}
                      <span>&nbsp; {GroupDataMentor[0]?.Mentor_Group_Name}</span>
                    </div>
                    <div className="mentorSocial">
                      <div class="card-social">
                        {/* <a href="" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                          </svg>
                        </a> */}

                        <a href={`mailto:${emailId}`} target="_blank">
                          <svg
                            viewBox="-20 0 135 95"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M 90.929 94.818 L 3.877 94.818 C -9.246 96.046 -21.665 84.577 -20.393 72.475 L -19.924 24.529 C -21.412 13.275 -11.164 -0.103 3.528 0.697 L 90.7 0.179 C 106.366 -0.659 117.929 12.625 116.254 23.826 L 115.785 71.772 C 117.11 85.018 103.901 97.235 90.929 94.818 Z M 3.87 11.44 C -4.887 10.759 -9.494 15.445 -9.211 23.675 L -9.068 71.19 C -9.464 80.009 -4.529 84.237 4.106 83.542 L 90.7 83.55 C 99.92 84.353 104.736 80.559 104.315 72.475 C 104.244 72.231 105.658 23.075 104.689 24.529 C 104.689 16.582 99.23 10.789 90.814 11.129 L 3.87 11.44 Z" />
                            <path d="M 51.547 64.642 C 65.665 51.176 81.092 36.865 95.208 23.398 C 97.842 20.884 87.124 11.303 84.491 13.815 C 70.376 27.28 56.915 40.751 42.799 54.218 C 40.164 56.731 48.916 67.153 51.547 64.642 Z" />
                            <path d="M 98.689 66.818 C 89.295 58.096 79.804 50.115 70.412 41.393 C 67.747 38.92 57.81 49.012 60.481 51.493 C 69.873 60.215 80.016 68.559 89.408 77.281 C 92.072 79.754 101.358 69.296 98.689 66.818 Z" />
                            <path d="M 8.797 76.241 C 18.191 67.519 28.059 58.922 37.452 50.201 C 40.122 47.722 30.069 38.088 27.404 40.56 C 18.011 49.282 8.869 57.614 -0.524 66.334 C -3.195 68.814 6.134 78.715 8.797 76.241 Z" />
                            <path d="M 12.532 15.036 C 26.596 28.502 41.964 42.813 56.026 56.28 C 58.65 58.794 47.973 68.375 45.35 65.863 C 31.289 52.398 17.879 38.927 3.817 25.46 C 1.192 22.947 9.911 12.525 12.532 15.036 Z" />
                          </svg>
                        </a>

                        <a href={`${linkedIn}`} target="_blank">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>

            <div>
              <div className="containerStudentList">
                <h2 className='pageHeading text-center '>Group<span style={{color: "blue"}}> {GroupDataMentor[0]?.Mentor_Group_Name}</span> Details</h2>
                <div className="card mt-4 p-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Residentail Address</th>

                        <th scope="col">Email ID</th>
                        <th scope="col">Contact Number</th>
                      </tr>
                    </thead>

                    <tbody>
                      {GroupDataStudent.map((item, index) => {
                        return (
                          <tr>
                            <td scope="row">{index + 1}.</td>
                            <td>{item.Student_Name}</td>
                            <td>{item.Student_Local_Address}</td>
                            <td>{item.Student_EmailId}</td>
                            <td>{item.Student_Contact_Number}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
