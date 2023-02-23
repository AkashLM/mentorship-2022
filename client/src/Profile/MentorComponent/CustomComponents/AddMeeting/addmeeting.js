import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./addmeeting.css";
import { Link   } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

const AddMeeting = (props) => {
  const {mentorData}=props;
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [ModalFlag ,setModalFlag]=useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
   
    setOpen(false);
  };
  
  const action = (
  
      <button onClick={handleClose} >
       <RxCross2/>
      </button>
  );

  const CreateMeetingsDataFunction = async (MeetingObj) => {
    const MeetingData = await axios.post(
      `${BASEURL}/NewMeeting`,
      {
        Res_MeetingId: Math.floor((Math.random() * 1000000) + 100000),
        Res_Date:MeetingObj.meetingDate,
        Res_Time:MeetingObj.meetingTime,
        Res_TimeStamp:new Date(),
        Res_TopicName:MeetingObj.meetingTopic,
        Res_Description:MeetingObj.meetingDescription,
        Res_MentorName:MeetingObj.mentorName ,
        Res_GroupName:mentorData.Mentor_Group_Name,
        Res_Venue:MeetingObj.meetingLocation,
        Res_Location:MeetingObj.meetingLocation,
        Res_StudentStatus:"All student are ready ",
        Res_MeetingStatus:"Pending",
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if(MeetingData){
      // console.log("bbbbbbb----------:",MeetingData);
    }
    };

  const formik = useFormik({
    initialValues: {
      meetingTopic: "",
      mentorName: mentorData.Mentor_Name,
      meetingDate: "",
      meetingTime: "",
      meetingLocation: "",
      meetingDescription: "",
    },
    validationSchema: Yup.object({
      meetingTopic: Yup.string()
        .max(50, "Must be less than 50 character")
        .required("Required"),
      meetingDate: Yup.date().required("Required"),
      meetingTime: Yup.string().required("Required"),
      meetingLocation: Yup.string()
        .max(100, "Must be less than 100 character")
        .required("Required"),
      meetingDescription: Yup.string()
        .max(150, "Must be less than 150 character")
        .required("Required"),
    }),

    onSubmit: (values) => {
      // CreateMeetingsDataFunction(values);
      // console.log("mmmmmmmmmmmm",values);
      CreateMeetingsDataFunction(values);
      formik.resetForm({ values: "" });
      setOpen(true);
    },
  });
  return (
    <>
    <div className="addmeetingFlex">
    <div className="meetingContainer">
      <div className="AddMeeting">
        <form className="addmeeting" onSubmit={formik.handleSubmit}>
        <div>
        <h1>Schedule New Meeting</h1>
        </div>
          <div className="meetingElementBlock">
            <label htmlFor="meetingTopic" className="label">
              Topic:
            </label>
            <input
              name="meetingTopic"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.meetingTopic}
            />
            {formik.touched.meetingTopic && formik.errors.meetingTopic ? (
              <p>{formik.errors.meetingTopic}</p>
            ) : null}
          </div>

          <div className="meetingElementBlock">
            <label htmlFor="mentorName" className="label">
              {" "}
              Mentor:
            </label>
            <input
              name="mentorName"
              type="text"
              value={formik.values.mentorName}
              onBlur={formik.handleBlur}
              disabled
            />
          </div>

          <div className="inputFlex">
          <div className="meetingElementBlock">
            <label htmlFor="meetingDate" className="label">
              Date:
            </label>
            <input
              name="meetingDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.meetingDate}
            />
            {formik.touched.meetingDate && formik.errors.meetingDate ? (
              <p>{formik.errors.meetingDate}</p>
            ) : null}
          </div>

          <div className="meetingElementBlock">
            <label htmlFor="meetingTime" className="label">
              Time:
            </label>
            <input
              name="meetingTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.meetingTime}
            />
            {formik.touched.meetingTime && formik.errors.meetingTime ? (
              <p>{formik.errors.meetingTime}</p>
            ) : null}
          </div>
          </div>

          <div className="meetingElementBlock">
            <label htmlFor="meetingLocation" className="label">
              Venue:
            </label>
            <input
              name="meetingLocation"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.meetingLocation}
            />
            {formik.touched.meetingLocation && formik.errors.meetingLocation ? (
              <p>{formik.errors.meetingLocation}</p>
            ) : null}
          </div>

          <div className="meetingElementBlock">
            <label htmlFor="meetingDescription" className="label">
              Description:
            </label>
            <input
              name="meetingDescription"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.meetingDescription}
            />
            {formik.touched.meetingDescription &&
            formik.errors.meetingDescription ? (
              <p>{formik.errors.meetingDescription}</p>
            ) : null}
          </div>

          <button type="Submit" > Schedule Meeting</button>
        </form>
      </div>
      </div>
      <Snackbar className="valid" 
              sx={{ width: "310px"}}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              action={action}
              message={"Meeting created successfully !"}
              anchorOrigin={{
                vertical: "Bottom",
                horizontal: "Left",
              }
    
            }
            />
        
        <div className="quoteContainer glassContainer">
          <div className="mainQuotecontainer mainGlassContainer">
            <h1>
              <span className="quote" id="quote">
                &nbsp; Learning how to learn is the new marker of literacy, not
                knowing how to read and write.&nbsp;
              </span>
            </h1>
            <p className="author" id="author">
              ~ Byju Raveendran
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddMeeting;
