import React from "react";
import "./AcadmicDetails.css";

function AcadmicDetails({ viewStudentProfile }) {
  const data = viewStudentProfile;
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="">Academic Details</h2>

          <div className="deatils"><h4 className="mt-2">SSC Details:</h4> </div>

          <div className="row mt-2">
            <div className="col-md-3 deatils">
              <p>
              English Marks:<span> {data.Student_Ten_English}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Science Marks:<span> {data.Student_Ten_Science}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Math Marks:<span> {data.Student_Ten_Maths}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Total Marks:<span> {data.Student_Ten_Total}</span>
              </p>
            </div>
          </div>

          <div className=" mt-3 deatils">
            <p>SSC School Name :<span> {data.Student_Ten_School_Name}</span></p>
          </div>

          {/* <div className=" mt-3 deatils">
            <b>SSC Coaching Class :</b> None.
          </div> */}
        </div>

        <div className="deatils"><h4 className="mt-5">HSC / Diploma Details:</h4> </div>
        <div className="row mt-2">
        <div className="col-md-3 deatils">
              <p>
              Physics Marks:<span> {data.Student_Twelve_Physics}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Chemistry Marks:<span> {data.Student_Twelve_Chemistry}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Math Marks:<span> {data.Student_Twelve_Maths}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Total Marks:<span> {data.Student_Twelve_Total}</span>
              </p>
            </div>

            <div className=" mt-3 deatils">
            <p>College Name :<span> {data.Student_Twelve_School_Name}</span></p>
          </div>
        </div>



<div className="deatils"><h4 className="mt-5">Competetive Exam Details:</h4> </div>
        <div className="row mt-2">

        <div className="col-md-3 deatils">
              <p>
              Physics Marks:<span> {data.Student_Cet_Physics}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Chemistry Marks:<span> {data.Student_Cet_Chemistry}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Math Marks:<span> {data.Student_Cet_Maths}</span>
              </p>
            </div>
            <div className="col-md-3 deatils">
              <p>
              Total Marks:<span> {data.Student_Cet_Total}</span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AcadmicDetails;