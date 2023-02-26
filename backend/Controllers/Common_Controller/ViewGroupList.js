const {
  Student_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const {
  Mentor_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");

const View_Group_List_Function = async (req, res, next) => {
  const { Res_Group_Name } = req.body;
  try {
    const SavedData_Student = await Student_Profile_Model.find({
      Student_Group: Res_Group_Name,
    });
    if (SavedData_Student) {
      console.log("------>",SavedData_Student);

      const SavedData_Mentor = await Mentor_Profile_Model.find({
        Mentor_Group_Name: Res_Group_Name,
      });
      if (SavedData_Mentor) {
        res.status(200).json({
          status: "Success",
          message: "Candidates found Successfully !",
          StudentData: SavedData_Student,
          MentorData: SavedData_Mentor,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to find user !",
        });
      }
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  View_Group_List_Function,
};
