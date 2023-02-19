const {
  Add_AssignmentStudent_Assign_Model,
} = require("../../DatabaseSetup/Mongoose.Student.Assign.Schema ");
  const View_Assignment_Mentor_Function = async (req, res, next) => {
    const {
        Res_Group_Name
    } = req.body;
    console.log("weee",req.body);
  
    if (Res_Group_Name) {
      const Saved_Student_Data_Pending = await Add_AssignmentStudent_Assign_Model.find({
        $and: [
          {
            Group_Name: Res_Group_Name,
          },
          { Approved: false },
        ],
      });

      const Saved_Student_Data_Approved = await Add_AssignmentStudent_Assign_Model.find({
        $and: [
          {
            Group_Name: Res_Group_Name,
          },
          { Approved: true },
        ],
      });

      if (Saved_Student_Data_Pending && Saved_Student_Data_Approved) {
        console.log("mentorData",Saved_Student_Data_Pending,Saved_Student_Data_Approved);
        res.status(200).json({
          status: "Success",
          message: "Assignment found successfully !",
          data1: Saved_Student_Data_Pending,
          data2: Saved_Student_Data_Approved,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to find Assignment !",
        });
      }
    }
  };
  
  module.exports = {
    View_Assignment_Mentor_Function,
  };
  