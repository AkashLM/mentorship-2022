import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import "./Profile.css";

function ConfirmForm({ mentorData,setMentorData, setEdit }) {
  const [initialValues, setInitialvalues] = useState({
    name: " Hrushikesh Ambike",
    position: "web developer",
    organizationname:
      "SHALAKA FOUNDATIONS KEYSTONE SCHOOL OF ENGINEERING, PUNE",
    qualification: "B.Tech",
    groupname: "Group Firve",
    email: "email@x.x",
    mobile: "1234567897",
    experience: "10",
  });
  const submitDetails=()=>{
    // console.log("tttttttttttttttttttt-",initialValues);
  }

  return (
    <div className="AddMeeting ">
      <Formik
        initialValues={mentorData} onSubmit={submitDetails()}
      >
        {(props) => (
          <Form className="meeting ">
            <div className="flex justify-center text-center font-semibold font-serif mentorFormHeading">
              Mentor Details Change{" "}
            </div>
            <div className="meetingElementBlock">
              <label htmlFor="meetingTopic" className="label">
                Mentor Name:
              </label>
              <Field name="Mentor_Name" type="text" />
            </div>
            <div className="mentorFLex">
              <div className="meetingElementBlock">
                <label htmlFor="Organization" className="label">
                  Organization name:
                </label>
                <Field name="Mentor_Organization" type="text" />
              </div>
              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Position:
                </label>
                <Field name="position" type="text" />
              </div>
            </div>

            <div className="meetingElementBlock">
              <label htmlFor="groupname" className="label">
                Group name:
              </label>
              <Field name="groupname" type="text" />
            </div>

            <div className="mentorFLex">
              <div className="meetingElementBlock">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <Field name="email" type="text" />
              </div>

              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Mobile:
                </label>
                <Field name="mobile" type="text" />
              </div>
            </div>

            <div className="mentorFLex">
              <div className="meetingElementBlock">
                <label htmlFor="qualification" className="label">
                  Qualification:
                </label>
                <Field name="qualification" type="text" />
              </div>
              <div className="meetingElementBlock">
                <label htmlFor="experience" className="label">
                  Experience:
                </label>
                <Field name="experience" type="text" />
              </div>
            </div>

            <div className="meetingElementBlock">
              <label htmlFor="about" className="label">
                About:
              </label>
              <Field name="about" as="textarea" className="text-area" />
            </div>
            <div className="flex justify-center text-center">
              <button type="submit" className="" onClick={()=>{
                
              }}>
                Submit
              </button>
            </div>

            {setInitialvalues(props.values)}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ConfirmForm;