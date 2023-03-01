const {
    Add_AssignmentCordi_Assign_Model,
  } = require("../../DatabaseSetup/Mongoose.Cordi.Assign.Schema");
  const {
    Add_AssignmentStudent_Assign_Model,
  } = require("../../DatabaseSetup/Mongoose.Student.Assign.Schema ");

  const ViewAllAssignments_Function = async (req, res, next) => {
    const {
        Res_Group_Name, Res_Student_Name
    } = req.body;
    console.log(req.body);
  
    if (Res_Group_Name) {
      const Saved_Student_Data1 = await Add_AssignmentCordi_Assign_Model.find({
        Group_Name: Res_Group_Name,
      });
      if (Saved_Student_Data1) {
        const Saved_Student_Data2 = await Add_AssignmentStudent_Assign_Model.find({
          Student_Name: Res_Student_Name,
        });
        if(Saved_Student_Data2){
          res.status(200).json({
            status: "Success",
            message: "Assignment found successfully !",
            data: Saved_Student_Data1,
            data2: Saved_Student_Data2
          });
        }
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
  