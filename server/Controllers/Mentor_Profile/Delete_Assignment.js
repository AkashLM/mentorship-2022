const {
    Add_AssignmentCordi_Assign_Model,
  } = require("../../DatabaseSetup/Mongoose.Cordi.Assign.Schema");
  const Delete_Assignments_Function = async (req, res, next) => {
    const {
        Res_Assignment_Id
    } = req.body;
    console.log(req.body);
  
    if (Res_Assignment_Id) {
      const Saved_Student_Data = await Add_AssignmentCordi_Assign_Model.findByIdAndDelete({
        _id: Res_Assignment_Id,
      });
      if (Saved_Student_Data) {
        console.log("Saved_Student_Data......",Saved_Student_Data);
        res.status(200).json({
          status: "Success",
          message: "Assignment deleted successfully !",
          data: Saved_Student_Data,
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
    Delete_Assignments_Function,
  };
