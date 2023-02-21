// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// export default function FormDialog(Props) {
//   const { rejectFlag, setRejectFlag, rejectMessage, setRejectMessage,RejectAssignmentFunction } = Props;
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpenF = () => {
//     if (rejectFlag === true) {
//       setOpen(true);
//     }else{
//         setOpen(false);
//     }
//   };

//   const handleClose = () => {
//       if (rejectFlag === true) {
//       setOpen(false);
//     }else{
//         setOpen(true);
//     }
//   };
//   React.useEffect(()=>{
//     handleClickOpenF();
//     handleClose();
//   },[rejectFlag]);

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Rejecting Assignment______________________________________</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             value={rejectMessage}
//             label="Enter your rejection message here.."
//             fullWidth
//             variant="standard"
//             onChange={(E) => {
//               setRejectMessage(E.target.value);
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={()=>{setRejectFlag(false)}}>Cancel</Button>
//           <Button onClick={()=>{RejectAssignmentFunction();setRejectFlag(false)}}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
