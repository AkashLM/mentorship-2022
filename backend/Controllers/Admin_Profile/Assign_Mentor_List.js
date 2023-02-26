const {
    Mentor_Profile_Model,
  } = require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");
  const AssignMentorListFunction = async (req, res) => {
    try {
      //Duplication check
      const MentorList = await Mentor_Profile_Model.find({
        Mentor_Assign_Status:true,
      });
  
      if (MentorList) {
        res.status(200).json({
          status: "Success",
          message: "Assign Mentor List available !",
          data: MentorList,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to find Assign Mentor List !",
        });
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  module.exports = {
    AssignMentorListFunction,
  };
  