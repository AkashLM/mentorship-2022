import { useState, useEffect,useRef } from "react";
import "./StudentsNotes.css";
import { Link } from "react-router-dom";
import TestPDF from "./test.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import axios from "axios";
import Cookies from "universal-cookie";
import LogoutLoader from "../../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../../HelpingFunctions/Loader";

function StudentsNotes(Props,ref) {
  const { refresher, setRefresher } = Props;
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const {typeOfUser,ViewNotesProp}=Props;
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [MeetingData, setMeetingData] = useState({});
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  // function changePage (offSet){
  //   setPageNumber(prevPageNumber =>prevPageNumber + offSet);
  // }

  // function changePageBackFunction (){
  //   changePage(-1);
  // }

  // function changePageForwardFunction(){
  //   changePage(+1);
  // }

  const ViewNoteResponse=async()=>{
    
    const NotesData = await axios.post(
      `${BASEURL}/ViewOneNote`,
      {
        Res_Note_Id: ViewNotesProp,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if(NotesData){
      setMeetingData(NotesData);
      // console.log(MeetingData?.data?.data);
      setLoading(false);
    }
  };

  const ApproveNoteFunction=async(Note_Id)=>{
    const ApprovalStatus = await axios.post(
      `${BASEURL}/AllowedNotes`,
      {
        Res_Notes_Topic_Id: Note_Id,
        PermissionStatus:true,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if(ApprovalStatus){
      // console.log("ApprovalStatus",ApprovalStatus);

    }
  }
  
    useEffect(() => {
      ViewNoteResponse();
  }, [loading]);

  return (
    <>{
      loading ? (
        <>
            
        <div><CircularColor/><LogoutLoader refresher={refresher}
        setRefresher={setRefresher}/></div>
     
    </>
      
      ):(<>      <div className="notesContainer">
      <div className="child-contain-2 mt-5 mb-5">
        <div className="row">
          <h1 className="text-center">Notes View</h1>
          <div className="col-md-6">
            <div className="text-center student-info">
              <b>Group Name :</b> {MeetingData.data.data.Group} <br />
              <br />
              <b>Title of Topic :</b>{MeetingData.data.data.Topic}
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center student-info">
              <b>Date :</b> {MeetingData.data.data.Date} <br />
              <br />
              <b>Time :</b>{MeetingData.data.data.Date}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="pdf-container">
              {/*  */}
{/* 
              <div style={{display:"flex"}}>
                <Document
                  file={TestPDF}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page height="450" pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <div>
                {
                  pageNumber >1 &&
                  <button className="approved-btn" onClick={changePageBackFunction}>Previous Page</button>
                }
                 {
                  pageNumber <numPages &&
                  <button className="approved-btn" onClick={changePageForwardFunction}>Next Page</button>
                }
                </div>
                
              </div> */}

              {/*  */}
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="text-center">
              <button
                className="approved-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropNoteApproved"
              >
                <b>Approved</b>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center mb-2">
              <button
                type="button"
                className="reject-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <b>Reject</b>
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Reason Of Rejection...
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <textarea
                        className="form-control mb-2 p-2"
                        placeholder="Enter Your Message"
                        rows="5"
                        name="message"
                        required
                      />{" "}
                      <br />
                      <br />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link to="/notes">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={() =>{
                            // DeleteNoteFunction(ViewRef.current);

                          }}
                        >
                          Betterment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="staticBackdropNoteApproved"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h5>
                        {" "}
                        Note Approved Successfully and ready for mentees
                        Dashboard !{" "}
                      </h5>
                    </div>
                    <div className="modal-footer">
                      <Link to="/notes">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Done
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)}


    </>
  );
}

export default StudentsNotes;
