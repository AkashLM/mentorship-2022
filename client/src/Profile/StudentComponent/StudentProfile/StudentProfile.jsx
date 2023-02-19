import React, { useState } from "react";
import { useEffect } from "react";
import ConfirmForm from "./ConfirmForm";
import Profile from "./Profile";

function StudentProfile({ studentData }) {
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialvalues] = useState({
    name: " Rahat Sayyed",
    position: "web developer",
    organizationname: "Keystone School of Engineering",
    qualification: "B.Tech",
    groupname: "Group Firve",
    email: "rahat@gmail.x",
    mobile: "1234567897",
    linkedin: "www.linkedin.com/in/youreachedrahat/",
    experience: "10",
    about:
      " started my journey for WEB3.0 after relajadks blah blah blah blah bleh bleh and it worked",
  });
  let ValueSetterFunction;
  console.log("studentData------------>",studentData);
  if(studentData){
    ValueSetterFunction = () => {
      let TempObj = {
        name: studentData.data.data.Student_Name,
        position: "Student",
        organizationname: "Keystone School of Engineering",
        qualification: "BE",
        groupname: studentData.data.data.Student_Group,
        email: studentData.data.data.Student_EmailId,
        mobile: studentData.data.data.Student_Contact_Number,
        linkedin: studentData.data.data.Student_LinkedIn,
        about: studentData.data.data.Student_About,
      };
      setInitialvalues(TempObj);
    };
  }else{
    setLoading(!loading);
  }

  useEffect(() => {
    ValueSetterFunction();
  }, [loading]);

  return (
    <>
          <div>
            <div>
              {edit ? (
                <ConfirmForm
                  initialValues={initialValues}
                  setInitialvalues={setInitialvalues}
                  setEdit={setEdit}
                />
              ) : (
                <Profile
                  setEdit={setEdit}
                  initialValues={initialValues}
                  studentData={studentData}
                />
              )}
            </div>
          </div>
    </>
  );
}

export default StudentProfile;
