import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import "./MeetingCard.css";
import arrow from "./arrow-down.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import StudyMaterialHeaderImg from "../../../assets/notes1.svg";
import DateConverter from "../../../HelpingFunctions/DateConverter";
import LogoutLoader from "../../../HelpingFunctions/LogoutLoader";
import CircularColor from "../../../HelpingFunctions/Loader";
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";

export default function Notes(Props) {
  const { refresher, setRefresher } = Props;
  const { studentData, noteSelect, setNoteSelect } = Props;
  const Coordinator_Status = studentData.data.data.Coordinator;
  const [loading, setLoading] = useState(true);
  const [notesList, setNotesList] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [Desc, setDesc] = useState("");
  // console.log("notesList", notesList);
  //
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  //
  // for snackBar
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClassName, setSnackbarClassName] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );
  //
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  //
  const handleViewNotesFunction = async () => {
    const NoteData = await axios.post(
      `${BASEURL}/ViewNotes`,
      {
        Res_Group_Name: studentData.data.data.Student_Group,
        Res_TypeOfUser: "Student",
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (NoteData) {
      setNotesList(NoteData.data.data);
      setLoading(false);
      // console.log("notesList", NoteData);
    }
  };

  const handleUploadSNotes = async () => {
    const UserData = await axios.post(
      `${BASEURL}/AddNotes`,
      {
        Res_Topic_Name: topicName,
        Res_Notes: Desc,
        Res_Mentor_Name: studentData.data.data.Student_Mentor_Name,
        Res_Coordinator_Name: studentData.data.data.Student_Name,
        Res_Group_Name: studentData.data.data.Student_Group,
        Res_Upload_Date: date,
      },
      {
        headers: {
          Authorization: cookies.get("KeyToken"),
        },
      }
    );
    if (UserData) {
      // console.log("8888888", UserData);
      setTopicName("");
      setDesc("");
      setOpen(true);
      setSnackbarMsg("Note Uploaded");
      setSnackbarClassName("valid");
    }
  };

  useEffect(() => {
    handleViewNotesFunction();
  }, [loading]);
  return (
    <>
      {loading ? (
        <>
          <div>
            <CircularColor />
            <LogoutLoader refresher={refresher} setRefresher={setRefresher} />
          </div>
        </>
      ) : (
        <>
          <Snackbar
            className={snackbarClassName}
            sx={{ width: "310px" }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            action={action}
            message={snackbarMsg}
            anchorOrigin={{
              vertical: "Bottom",
              horizontal: "Left",
            }}
          />
          <h2 className="pageHeading text-center ">
            Group
            <span style={{ color: "blue" }}>
              {" "}
              {studentData.data.data.Student_Group}
            </span>{" "}
            Notes and Attachment Details
          </h2>
          <div className="meetingCard">
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 1, sm: 4, md: 12 }}
              className="grid "
            >
              {notesList.map((item, index) => {
                // console.log(item);
                return (
                  <Grid item xs={2} sm={2} md={3} key={index}>
                    <Item className="item one">
                      <Card
                        sx={{
                          maxWidth: 5000,
                          padding: ".3rem",
                          boxShadow:
                            " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                        }}
                        className="card two"
                      >
                        <div style={{ position: "relative" }}>
                          {" "}
                          <CardMedia
                            sx={{ height: 120, margin: ".5rem" }}
                            image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format&dpr=2"
                            title="green iguana"
                          />
                          <span className="approved">Approved</span>
                          <Typography
                            variant="body2"
                            style={{
                              bottom: "1rem",
                              left: "1rem",
                              position: "absolute",
                              color: "white",
                            }}
                          >
                            <span
                              style={{ display: "flex" }}
                              className="heading"
                            >
                              {" "}
                              Updated by :{" "}
                            </span>
                            <h5> {item.Coordinator_Name} </h5>
                          </Typography>
                        </div>

                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            <span
                              style={{ display: "flex" }}
                              className="heading"
                            >
                              {" "}
                              Topic Name :{" "}
                              <img src={arrow} alt="" className="arrow" />
                            </span>{" "}
                            <h5> {item.Topic} </h5>
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            style={{
                              background: "#dbeaf7",
                              textAlign: "center",
                            }}
                          >
                            <span className="heading">Date : </span>{" "}
                            <span className="date">
                              {DateConverter(item.Date, "Date")}
                            </span>
                          </Typography>
                          <CardActions className="buttons">
                            <Button
                              className="btn"
                              variant="outlined"
                              style={{ marginLeft: ".45rem" }}
                            >
                              Download PDF
                            </Button>
                            <a href={item.Notes} target="_blank">
                              <Button
                                className="btn"
                                variant="contained"
                                style={{ marginTop: "5px", marginLeft: "5px" }}
                                onClick={() => {
                                  setNoteSelect(item);
                                }}
                              >
                                View Notes
                              </Button>
                            </a>
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          {Coordinator_Status ? (
            <>
              <h2 className="pageHeading text-center ">
                Add Notes for Group
                <span style={{ color: "blue" }}>
                  {" "}
                  {studentData.data.data.Student_Group}
                </span>{" "}
              </h2>
              <>
                {" "}
                <div className="container">
                  <div className="studymaterial-card">
                    <div className="row">
                      <h3 className="text-center mb-3">Add New Notes</h3>
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
                              value={` Mentor Name : ${studentData.data.data.Student_Mentor_Name}`}
                              disabled
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              value={` Coordinator Name : ${studentData.data.data.Student_Name}`}
                              disabled
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              // required
                              value={` Group Name : ${studentData.data.data.Student_Group}`}
                              disabled
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="Topic Name"
                              value={topicName}
                              onChange={(Event) => {
                                setTopicName(Event.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="Drive link of notes or attachments !"
                              value={Desc}
                              onChange={(Event) => {
                                setDesc(Event.target.value);
                              }}
                            />
                          </div>
                          <button
                            className="button-add-material w-100 mt-5 mb-3"
                            type="button"
                            onClick={() => {
                              handleUploadSNotes();
                            }}
                          >
                            <i class="fa-solid fa-right-to-bracket"></i>Upload
                            New Notes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
