const {
  Student_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const AssignStudentFunction = async (req, res) => {
  try {
    const ViewedStatus = await Student_Profile_Model.find({
      $and: [
        {
          Student_Group: {
            $not: {
              $eq: "Temp",
            },
          },
        },
        {
          Student_Mentor_Name: { $not: { $eq: "Temp" } },
        },
      ],
    });
    if (ViewedStatus) {
      res.status(200).json({
        status: "Success",
        message: "Assign Student list found Successfully !",
        data: ViewedStatus,
      });
    } else {
      res.status(500).json({
        status: "Error",
        message: "Unable to fetch Assign student list !",
      });
    }
  } catch (Error) {
    console.log("Error", Error);
  }
};
module.exports = {
  AssignStudentFunction,
};
