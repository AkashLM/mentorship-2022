import React from "react";

function Navbar(props) {
  const {
    adminLog,

    mentorLog,
    studentLog,
  } = props;
  return (
    <>
    <div className=" flex justify-between items-center h-16 navbar " style={{backgroundColor:"grey",height:"5rem", padding:"0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem"}}>
      <div className="flex justify-center items-center pl-3 ">
        <div className="font-serif text-white p-0  pr-3 flex justify-center text-3xl ">
          I.M.P
        </div>
      </div>
      <div className="flex text-white font-semibold p-2  justify-center items-center ">
        <div className="p-1  pr-3 pl-3 border-gray-400 hover:cursor-pointer flex flex-col justify-center items-center">
          You're logging-in as
          {adminLog ? (
            <div> Admin</div>
          ) : mentorLog ? (
            <div> Mentor</div>
          ) : studentLog ? (
            <div> Student</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
