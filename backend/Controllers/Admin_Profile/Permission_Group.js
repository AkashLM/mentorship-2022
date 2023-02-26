const {
    Student_Profile_Model,
  } = require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
  const {Mentor_Profile_Model}=require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");

  const PermissionStudentFunction = async (req, res) => {
    const {Res_Mentor_Name, Res_Mentor_Id, Res_Group_Name, Res_Student_Id}= req.body;
    try {
      const ViewedStatus = await Student_Profile_Model.findByIdAndUpdate(Res_Student_Id,{
        Student_Mentor_Name:Res_Mentor_Name,
        Student_Group:Res_Group_Name
      });
      const View_Mentor_List = await Mentor_Profile_Model.findByIdAndUpdate(Res_Mentor_Id,{
        Mentor_Assign_Status:true,
      })
      if (ViewedStatus) {
        res.status(200).json({
          status: "Success",
          message: "Student Assign Successfully !",
          data: ViewedStatus,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to Assign student !",
        });
      }
    } catch (Error) {
      console.log("Error", Error);
    }
  };
  module.exports = {
    PermissionStudentFunction,
  };
  