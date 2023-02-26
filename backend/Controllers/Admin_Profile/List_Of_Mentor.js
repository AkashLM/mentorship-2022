const {
  Mentor_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");
const MentorListFunction = async (req, res) => {
  try {
    //Duplication check
    const MentorList = await Mentor_Profile_Model.find();

    if (MentorList) {
      res.status(200).json({
        status: "Success",
        message: "Mentor List available !",
        data: MentorList,
      });
    } else {
      res.status(500).json({
        status: "Error",
        message: "Unable to find Mentor List !",
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  MentorListFunction,
};
