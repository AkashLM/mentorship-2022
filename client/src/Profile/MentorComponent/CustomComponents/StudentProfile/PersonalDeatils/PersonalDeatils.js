import React, { useEffect } from "react";
import "./PersonalDeatils.css";

function PersonalDeatils({ viewStudentProfile }) {
  const data = viewStudentProfile;
  // console.log("viewStudentProfile", viewStudentProfile);

  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="">
          <div className="row">
            <h2 className="">Personal Details</h2>

            <div className=" deatils">
              <p>
                Name:
                <span>
                  {" "}
                  {data.Student_First_Name} {data.Student_Middle_Name}{" "}
                  {data.Student_Last_Name}
                </span>{" "}
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 deatils">
                <p>
                  E-mail:<span> {data.Student_EmailId}</span>{" "}
                </p>
              </div>
              <div className="col-md-5 deatils">
                <p>
                  Contact Number:<span> {data.Student_Contact_Number}</span>{" "}
                </p>
              </div>

              <div className="col-md-6 deatils ">
                <p>
                  Medication:<span> {data.Student_Medication}</span>{" "}
                </p>
              </div>
              <div className="col-md-5 deatils ">
                <p>
                  Yoga:<span> {data.Student_Yoga}</span>{" "}
                </p>
              </div>

              <div className="col-md-6 deatils ">
                <p>
                  Driving Licence:<span> {data.Student_Driving_Licence}</span>{" "}
                </p>
              </div>
              <div className="col-md-5 deatils ">
                <p>
                  Adhaar Number:<span> {data.Student_Adhaar_Number}</span>{" "}
                </p>
              </div>

              <div className="col-md-6 deatils ">
                <p>
                  Date of Birth:<span> {data.Student_DoB}</span>{" "}
                </p>
              </div>
              <div className="col-md-5 deatils ">
                <p>
                  Place of Birth:<span> {data.Student_PoB}</span>{" "}
                </p>
              </div>

              <div className="col-md-6 deatils ">
                <p>
                  Permanent Address:
                  <span> {data.Student_Permanent_Address}</span>{" "}
                </p>
              </div>

              <div className="col-md-5 deatils ">
                <p>
                  Local Address:<span> {data.Student_Local_Address}</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <h2 className=" mt-5">Physical Data</h2>

          <div className="row">
            <div className="col-md-6 deatils ">
              <p>
                Blood Group:<span> {data.Student_Blood_Group}</span>{" "}
              </p>
            </div>
            <div className="col-md-5 deatils ">
              <p>
                Height:<span> {data.Student_Height}</span>{" "}
              </p>
            </div>

            <div className="col-md-6 deatils ">
              <p>
                Gender:<span> {data.Student_Gender}</span>{" "}
              </p>
            </div>
            <div className="col-md-5 deatils ">
              <p>
                Weight:<span> {data.Student_Weight}</span>{" "}
              </p>
            </div>

            <div className="col-md-6 deatils ">
              <p>
                BMI:<span> {data.Student_BMI}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDeatils;
