import "./MeetingCard.css";
import "./OpenPdf.css";
import DateConverter from "../../../HelpingFunctions/DateConverter";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoxSx from "./BoxSx";
import { Link } from "react-router-dom";
const card = (

  <React.Fragment>
    <CardContent>
      <div style={{ position: "relative" }}>
        {" "}
        <CardMedia
          sx={{ height: 380, marginBottom: "1rem" }}
          image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format&dpr=2"
          title="green iguana"
        />
        <div className="date-1">
          <span className="heading ">Date : </span>{" "}
          <span className="date">9th May 2023</span>
        </div>
      </div>
      <Typography gutterBottom variant="h8" component="div">
        <span style={{ display: "flex" }} className="heading">
          {" "}
          Topic:{" "}
          <h5
            style={{ paddingTop: ".1rem", paddingLeft: ".5rem" }}
            className="text-slate-500"
          >
            {" "}
            New Features of ES6 and it's operations bla bla{" "}
          </h5>
        </span>
      </Typography>
      <Typography gutterBottom variant="h8" component="div">
        <span style={{ display: "flex" }} className="heading">
          {" "}
          Coordinator:{" "}
          <h5
            style={{ paddingTop: ".1rem", paddingLeft: ".5rem" }}
            className="text-slate-500"
          >
            {" "}
            Sonu Swapan Dutta
          </h5>
        </span>
      </Typography>
    </CardContent>
    <BoxSx />
    <CardActions className="buttons-1">
      <Button
        className="btn"
        variant="outlined"
        style={{ marginLeft: ".45rem" }}
      >
        Download
      </Button>
      <Button className="btn" variant="contained">
        Done
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard(Props) {
  const { studentData, noteSelect, setNoteSelect } = Props;
  // console.log("noteSelect", noteSelect);
  // console.log("hhhh", DateConverter('2023-01-08T03:12:59.536Z', 'Date'))
  return (
    <div className="OpenPdfContainer">
      <h2 className="pageHeading text-center ">Latest Notes Section</h2>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" style={{ padding: "1rem" }}>
          <CardContent>
            <div style={{ position: "relative" }}>
              {" "}
              <CardMedia
                sx={{ height: 380, marginBottom: "1rem" }}
                image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format&dpr=2"
                title="green iguana"
              />
              <div className="date-1">
                <span className="heading ">Date : </span>{" "}
                <span className="date">{noteSelect.Date}</span>
              </div>
            </div>
            <Typography gutterBottom variant="h8" component="div">
              <span style={{ display: "flex" }} className="heading">
                {" "}
                Topic:{" "}
                <h5
                  style={{ paddingTop: ".1rem", paddingLeft: ".5rem" }}
                  className="text-slate-500"
                >
                  {noteSelect.Topic}
                </h5>
              </span>
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              <span style={{ display: "flex" }} className="heading">
                {" "}
                Coordinator:{" "}
                <h5
                  style={{ paddingTop: ".1rem", paddingLeft: ".5rem" }}
                  className="text-slate-500"
                >
                  {" "}
                  {noteSelect.Coordinator}
                </h5>
              </span>
            </Typography>
          </CardContent>
          <BoxSx />
          <CardActions className="buttons-1">
            <Button
              className="btn"
              variant="outlined"
              style={{ marginLeft: ".45rem" }}
            >
              Download
            </Button>
            <Link to="/notes">
            <Button className="btn" variant="contained">
              Done
            </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
