import React from "react";
import "./FamilyDeatils.css";

function FamilyDeatils({ viewStudentProfile }) {
  const data = viewStudentProfile;
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className=" ">Parent's Details</h2>
          <div className="row mt-5">
            <div className="col-md-3 deatils text-center">
              <h4>Father's Details</h4>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 deatils text-center">
              <h4>Mother's Details</h4>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 deatils text-center">
              <h4>Legal Guardian's Details</h4>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Name:<span> {data.Student_Father_Name}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Name:<span> {data.Student_Mother_Name}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Name:<span> {data.Student_Guardian_Name}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Occupation:<span> {data.Student_Father_Occupation}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Occupation:<span> {data.Student_Mother_Occupation}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Occupation:<span> {data.Student_Guardian_Occupation}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Work Details:<span> {data.Student_Father_Work_Deatils}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Work Details:<span> {data.Student_Mother_Work_Details}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Work Details:<span> {data.Student_Guardian_Work_Details}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Office Contact:
                <span> {data.Student_Father_Office_Contact}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Office Contact:
                <span> {data.Student_Mother_Office_Contact}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Office Contact:
                <span> {data.Student_Guardian_Office_Contact}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                E-mail:<span> {data.Student_Father_Email}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                E-mail:<span> {data.Student_Mother_Email}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                E-mail:<span> {data.Student_Guardian_Email}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Annual Income:<span> {data.Student_Father_Annual_Income}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Annual Income:<span> {data.Student_Mother_Annual_Income}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Annual Income:
                <span> {data.Student_Guardian_Annual_Income}</span>
              </p>
            </div>
          </div>

          <h2 className="deatils mt-5">Hobbies & Interests</h2>
          <div className="deatils">
            <p>
              {/* Hobbies And Future Intrests: */}
              <span> {data.Student_Hobbies_And_Intrests}</span>
            </p>
          </div>

          <h2 className="deatils mt-5">Sibling Details</h2>

          <div className="col-md-3 deatils text-center">
            <h4>Sibbling 1</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 deatils text-center">
            <h4>Sibbling 2</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 deatils text-center">
            <h4>Sibbling 3</h4>
          </div>

          <div className="col-md-4 deatils">
            <p>
              Name:<span> {data.Student_Sibbling_One_Name}</span>
            </p>
          </div>
          <div className="col-md-4 deatils">
            <p>
              Name:<span> {data.Student_Sibbling_Two_Name}</span>
            </p>
          </div>
          <div className="col-md-4 deatils">
            <p>
              Name:<span> {data.Student_Sibbling_Three_Name}</span>
            </p>
          </div>

          <div className="col-md-4 deatils">
            <p>
              Qualification:
              <span> {data.Student_Sibbling_One_Qualification}</span>
            </p>
          </div>
          <div className="col-md-4 deatils">
            <p>
              Qualification:
              <span> {data.Student_Sibbling_Two_Qualification}</span>
            </p>
          </div>
            <div className="col-md-4 deatils">
              <p>
                Qualification:
                <span> {data.Student_Sibbling_Three_Qualification}</span>
              </p>
            </div>

            <div className="col-md-4 deatils">
              <p>
                Contact:<span> {data.Student_Sibbling_One_Contact}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Contact:<span> {data.Student_Sibbling_Two_Contact}</span>
              </p>
            </div>
            <div className="col-md-4 deatils">
              <p>
                Contact:<span> {data.Student_Sibbling_Three_Contact}</span>
              </p>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default FamilyDeatils;
