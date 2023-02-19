const {
    Add_AssignmentCordi_Assign_Model,
  } = require("../../DatabaseSetup/Mongoose.Cordi.Assign.Schema");
  const ViewAllAssignments_Function = async (req, res, next) => {
    const {
        Res_Group_Name
    } = req.body;
    console.log(req.body);
  
    if (Res_Group_Name) {
      const Saved_Student_Data = await Add_AssignmentCordi_Assign_Model.find({
        Group_Name: Res_Group_Name,
      });
      if (Saved_Student_Data) {
        res.status(200).json({
          status: "Success",
          message: "Assignment found successfully !",
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
    ViewAllAssignments_Function,
  };
  