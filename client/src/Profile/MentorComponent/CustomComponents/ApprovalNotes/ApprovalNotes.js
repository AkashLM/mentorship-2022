import { useRef, forwardRef, useState,useEffect } from "react";
import "./ApprovalNotes.css";
import StudentData from "./ApprovalNotesData";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../../../HelpingFunctions/DateConverter";
import { RxCross2 } from "react-icons/rx";
import Snackbar from "@mui/material/Snackbar";

const ApprovalNotes = (Props) => {
  const { typeOfUser, ViewNotesProp, setViewNotesProp,refresher,setRefresher, approvedNotes } = Props;
  const [DeleteMsg, setDeleteMsg] = useState({});
  const [reasonOfDeleteMsg, setReasonOfDeleteMsg] = useState("");
  const selectValue = useRef("");
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
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
  const DeleteNoteFunction = async (Note_Id) => {
    const deleteResponse = await axios.post(
      `${BASEURL}/DeleteNotes`,
      {
        Res_TypeOfUser: typeOfUser,
        Res_NoteID: Note_Id,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (deleteResponse) {
      const deleteResponse = await axios.post(
        `${BASEURL}/AddMessage`,
        {
          Res_Heading_Name:"Your note is Rejected !" ,
          Res_Topic_Name: DeleteMsg.Topic,
          Res_Date: new Date(),
          Res_Mentor_Name: DeleteMsg.Topic,
          Res_Description: reasonOfDeleteMsg,
          Res_Group_Name: DeleteMsg.Group,
          Res_Message_Type: "Coordinator",
        },
        {
          headers: {
            Authorization: cookies.get("KeyToken"),
          },
        }
      );
      if(deleteResponse){
        setRefresher(!refresher);
      }
    }
  };

  return (
    <>
      <div>
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
        <div className="container">
        <h2 className="pageHeading text-center ">Approved Notes</h2>
          <div className="card mt-4 p-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr.no</th>
                  <th scope="col">Date</th>
                  <th scope="col">Topics</th>
                  <th scope="col">Source / Link</th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {approvedNotes.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td scope="row">{index + 1}</td>
                        <td>{DateConverter(item.Date, "Date" )}</td>
                        <td>{item.Topic}</td>
                        <td>{item.Notes}</td>
                        <td>
                          <a target="_Blank" href={item.Notes}>
                            {" "}
                            <button
                              className="btn btn-primary approval-btn"
                              value={item._id}
                              onClick={(Event) => {
                                setViewNotesProp(Event.target.value);
                              }}
                            >
                              VIEW
                            </button>
                          </a>{" "}
                          <button
                            className="btn btn-primary approval-btn"
                            onClick={() => {
                              selectValue.current = item._id;
                              setDeleteMsg(item);
                              DeleteNoteFunction(selectValue.current);
                              // console.log("DeleteMsg", DeleteMsg);
                              setOpen(true);
                              setSnackbarMsg("Deleted Successfully")
                              setSnackbarClassName("invalid")
                            }}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">
                                Reason Of Deletion
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <textarea
                                className="form-control mb-2 p-2"
                                placeholder="Enter Your Message"
                                rows="5"
                                name="message"
                                value={reasonOfDeleteMsg}
                                onChange={(Event) => {
                                  setReasonOfDeleteMsg(Event.target.value);
                                  // console.log(reasonOfDeleteMsg);
                                }}
                              />{" "}
                              <br />
                              <br />
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdropNoteDelete"
                                ref={selectValue}
                                onClick={() => {
                                }}
                              >
                                Delete Note
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="modal fade"
                        id="staticBackdropNoteDelete"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <h5> Note Deleted Successfully ! </h5>
                            </div>
                            <div class="modal-footer">
                              <Link to="/notes">
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                  onClick={() => {
                                    window.location.reload();
                                  }}
                                >
                                  Done
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalNotes;
