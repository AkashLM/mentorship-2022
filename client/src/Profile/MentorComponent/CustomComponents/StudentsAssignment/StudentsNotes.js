import "./StudentsNotes.css";
import { Link } from "react-router-dom";

import { useState } from 'react'

// import { Worker } from '@react-pdf-viewer/core';

// Import the main component
// import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function StudentsNotes() {

  // const [pdfFile, setPdfFile] = useState(null);

  // const [pdfError, setPdfError] = useState('');


  // const allowedFiles = ['application/pdf']

  //  const handleFile = (e) =>{
  //   let selectedFile = e.target.files[0];
  //   // console.log(selectedFile.type);

  //   if(selectedFile)
  //   {
  //     if(selectedFile&&allowedFiles.includes(selectedFile.type)){
  //         let reader = new FileReader();
  //         reader.readAsDataURL(selectedFile);
  //         reader.onloadend = (e)=> {
  //           setPdfError('');
  //           setPdfFile(e.target.result);
  //           console.log(e.target.result)
  //         }
  //     }
  //     else{
  //       setPdfError('Not a valid Pdf: Please select only PDF');
  //     }
  //   }
  //   else
  //   {
  //     console.log('please select a pdf');
  //   }
  //  }

  return (
    <>
      <div className="notesContainer">
        <div className="child-contain-2 mt-5 mb-5">
          <div className="row">
            <h1 className="text-center pageHeading">Assignment View</h1>
            <div className="col-md-6">
              <div className="text-center student-info">
                <b>Group Name :</b> ABC <br />
                <br />
                <b>Title of Topic :</b>Random
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center student-info">
                <b>Date :</b> 22/12/2022 <br />
                <br />
                <b>Time :</b>18:00
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="pdf-container">
              <div className='container'>
   
   {/* <form> 
    <h5 className='text-center mt-5'>Upload Pdf</h5>
     <br/><br/>

     <input type='file' className="form-controls custom-css"
     onChange={handleFile}></input>

     {pdfError&&<span className='text-danger'>{pdfError}</span>}
   </form> */}

      {/* <h5 className='text-center'>View PDF</h5>

      <div className='container-1'>

        {pdfFile&&(
           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}></Viewer>
           </Worker>
        )}

        {!pdfFile&&<>No File is Selected yet</>}
      </div> */}

    </div>
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
                        <Link to="/assignments">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
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
                        <Link to="/approvalnotes">
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
      <div>

      </div>
    </>
  );
}

export default StudentsNotes;
