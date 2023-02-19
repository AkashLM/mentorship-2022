import React, { useEffect, useState } from "react";
import ConfirmForm from "./ConfirmForm";
import Profile from "./Profile";


function MentorProfile(Props) {
  const { mentorData, setMentorData,loadingR, setLoadingR, submissionStatus, setSubmissionStatus} = Props;
  const [edit, setEdit] = useState(false);


  return (
    <>
      {loadingR ? (
        "Loading"
      ) : (
        <div>
          <div>
            {edit ? (
              <ConfirmForm
                setEdit={setEdit}
                mentorData={mentorData}
                setMentorData={setMentorData}
              />
            ) : (
              <Profile
                setEdit={setEdit}
                mentorData={mentorData}
                setSubmissionStatus={setSubmissionStatus}
                submissionStatus={submissionStatus}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MentorProfile;
