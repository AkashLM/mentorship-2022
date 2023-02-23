import React, { useState } from "react";
import "./AssignmentForm.css";
import StudyMaterialHeaderImg from "./study-material-header-img.png";
import axios from "axios";
import Cookies from "universal-cookie";
import Upload from "antd/es/upload/Upload";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

function AssignmentForm(Props) {
  //
  const { studentData, uploadSelector } = Props;
  const [dLink, setDLink] = useState("");
  //
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  //
  // console.log("****",uploadSelector);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  //
  // for snackBar
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClassName, setSnackbarClassName] = useState();
  const handleClose = () => {
   
    setOpen(false);
  };
   
  const action = (
  
      <button onClick={handleClose} >
       <RxCross2/>
      </button>
  );

  const handleUpload = async () => {
    const UserData = await axios.post(
      `${BASEURL}/UploadAssignmentByStudent`,
      {
        Res_Topic_Name: uploadSelector.Topic_Name,
        Res_Link: dLink,
        Res_Mentor_Name: uploadSelector.Mentor_Name,
        Res_Student_Name: studentData.data.data.Student_Name,
        Res_Group_Name: uploadSelector.Group_Name,
        Res_Upload_Date: date,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (UserData) {
      // console.log("7777", UserData);
      setOpen(true);
      setSnackbarMsg("Assignment Submited Successfully")
      setSnackbarClassName("valid")
      setDLink("");
    }
  };
  return (
    <>
      <div className="container">
      <Snackbar className={snackbarClassName} 
              sx={{ width: "310px"}}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              action={action}
              message={snackbarMsg}
              anchorOrigin={{
                vertical: "Bottom",
                horizontal: "Left",
              }
    
            }
            />
        <div className="studymaterial-card">
          <div className="row">
            <h4 className="text-center pageHeading">Assignment Form</h4>
            <div className="col-md-6">
              <img
                className="study-material-img mx-auto d-block"
                src={StudyMaterialHeaderImg}
                alt=""
              />
            </div>
            <div className="col-md-6 mt-5">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Group Name:"
                    placeholder={`Topic Name : ${uploadSelector.Group_Name}`}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Topic name"
                    placeholder={`Topic Name : ${uploadSelector.Topic_Name}`}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Date of Post"
                    placeholder={` Submission Date : ${currentDate}`}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="topic name"
                    value={dLink}
                    placeholder="Paste your drive link !"
                    onChange={(Event) => {
                      setDLink(Event.target.value);
                    }}
                  />
                </div>
                {/* <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                  />
                </div> */}
                <div className="mb-3">
                  <select
                    className="form-select"
                    id="contenttype"
                    aria-label="Select Content Type"
                  >
                    <option> Select Content Type </option>
                    {/* <option value="pdf">PDF</option> */}
                    <option value="link">Drive Link</option>
                  </select>
                </div>
                <button
                  className="button-add-material w-100 mt-5 mb-3"
                  type="button"
                  onClick={() => {
                    handleUpload();
                  }}
                >
                  <i class="fa-solid fa-right-to-bracket"></i>Submit
                </button>
              </form>
              <Snackbar
                className="valid"
                sx={{ width: "310px" }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
                message="Assigment Uploaded Successfully"
                anchorOrigin={{
                  vertical: "Bottom",
                  horizontal: "Left",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentForm;
