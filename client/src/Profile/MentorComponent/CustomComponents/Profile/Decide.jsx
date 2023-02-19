import React, { useState } from "react";
import ConfirmForm from "./ConfirmForm";
import Profile from "./Profile";

function Decide() {
  const [edit, setEdit] = useState(false);
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

  return (
    <div>
      <div>
        {edit ? (
          <ConfirmForm
            initialValues={initialValues}
            setInitialvalues={setInitialvalues}
            setEdit={setEdit}
          />
        ) : (
          <div>
            'hrhfrhfhfhfh'
            <Profile setEdit={setEdit} initialValues={initialValues} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Decide;
