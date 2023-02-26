const {
  Add_AssignmentStudent_Assign_Model,
} = require("../../DatabaseSetup/Mongoose.Student.Assign.Schema ");
const Upload_Assignment_Student_Function = async (req, res, next) => {
  const {
    Res_Topic_Name,
    Res_Link,
    Res_Mentor_Name,
    Res_Student_Name,
    Res_Group_Name,
    Res_Upload_Date,
  } = req.body;
  console.log("kkkkkkk",req.body);

  if (Res_Student_Name) {
    const Saved_Student_Data = await Add_AssignmentStudent_Assign_Model.create({
      Topic_Name: Res_Topic_Name,
      Link: Res_Link,
      Mentor_Name: Res_Mentor_Name,
      Student_Name: Res_Student_Name,
      Group_Name: Res_Group_Name,
      Upload_Date: Res_Upload_Date,
      Approved: false,
    });
    if (Saved_Student_Data) {
      res.status(200).json({
        status: "Success",
        message: "Assignment uploaded by student !",
        data: Saved_Student_Data,
      });
      console.log("hhh",Saved_Student_Data);
    } else {
      res.status(500).json({
        status: "Error",
        message: "Unable to submit Assignment !",
      });
    }
  }
};

module.exports = {
  Upload_Assignment_Student_Function,
};
