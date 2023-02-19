import * as React from "react";
import Box from "@mui/material/Box";
import Iframe from 'react-iframe';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 600,
        backgroundColor: "#c9d3d9",
        "&:hover": {
          backgroundColor: "#c9d3d9",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <iframe src='https://stackoverflow.com/questions/tagged/reactjs' style={{height:"100%", width:"100%"}}></iframe>
      <Iframe url="https://www.facebook.com/"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </Box>
  );
}
