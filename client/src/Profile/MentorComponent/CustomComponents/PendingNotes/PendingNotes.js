import { useState, useEffect } from "react";
import "./PendingNotes.css";
import StudentData from "./PendingNotesData";
import { Link } from "react-router-dom";
import ApprovalNotes from "../ApprovalNotes/ApprovalNotes";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../../../HelpingFunctions/DateConverter";

function PendingNotes(Props) {
  const { typeOfUser, ViewNotesProp, setViewNotesProp,mentorData } = Props;
  const [loading, setLoading] = useState(true);
  const [refresher,setRefresher] = useState(false);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const allNotes = new Array();
  const [pendingNotes, setPendingNotes] = useState([]);
  const [approvedNotes, setApprovedNotes] = useState([]);

  const ViewNoteResponse = async () => {
    const NotesData = await axios.post(
      `${BASEURL}/ViewNotes`,
      {
        Res_TypeOfUser: typeOfUser,
        Res_Group_Name: mentorData.Mentor_Group_Name,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (NotesData) {
      allNotes.push(...NotesData.data.data);
      const arr1 = [];
      const arr2 = [];
      allNotes.map((obj) => {
        if (obj.Approved === false) {
          arr1.push(obj);
          setPendingNotes(arr1);
        } else if (obj.Approved === true) {
          arr2.push(obj);
          setApprovedNotes(arr2);
        }
      });
    }

    if (pendingNotes && approvedNotes) {
      setLoading(false);
    }
  };

  const ApproveNoteFunction = async (Note_Id) => {
    const ApprovalStatus = await axios.post(
      `${BASEURL}/AllowedNotes`,
      {
        Res_Notes_Topic_Id: Note_Id,
        PermissionStatus: true,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (ApprovalStatus) {
      window.location.reload();
    }
  };

  useEffect(() => {
    ViewNoteResponse();
  }, [loading,refresher]);

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <div>
            <div className="container">
            <h2 className="pageHeading text-center ">Pending Notes</h2>
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
                    {pendingNotes.map((item, index) => {
                      return (
                        <tr>
                          <td scope="row">{index + 1}</td>
                          <td> {DateConverter(item.Date, "Date" )}</td>
                          <td>{item.Topic}</td>
                          <td>{item.Notes}</td>
                          <td>
                            <a href={item.Notes}>
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
                            </a>
                            <button
                              className="btn btn-primary approval-btn"
                              value={item._id}
                              onClick={(Event) => {
                                setRefresher(!refresher);
                                ApproveNoteFunction(Event.target.value);
                              }}
                            >
                              APPROVAL
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <ApprovalNotes
              approvedNotes={approvedNotes}
              ViewNotesProp={ViewNotesProp}
              setViewNotesProp={setViewNotesProp}
              refresher={refresher} setRefresher={setRefresher}
            />
          </div>
          <div
            class="modal fade"
            id="staticBackdropNoteApproved"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <h5>
                    {" "}
                    Note Approved Successfully and ready for mentees Dashboard !{" "}
                  </h5>
                </div>
                <div class="modal-footer">
                  <Link to="/notes">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={()=>{
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
      )}
    </>
  );
}

export default PendingNotes;
