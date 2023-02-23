const {
  Mentor_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");
const ViewMentorProfileFunction = async (req, res) => {
  const { Res_Mentor_Email } = req.body;
  console.log(".....>", req);
  try {
    //If want to fetch individual mentor profile.
    if (Res_Mentor_Email) {
      const ViewedStatus = await Mentor_Profile_Model.findOne({
        Mentor_EmailId: Res_Mentor_Email,
      });
      if (ViewedStatus) {
        res.status(200).json({
          status: "Success",
          message: "Mentor Profile found Successfully !",
          data: ViewedStatus,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to fetch Mentor Profile !",
        });
      }
    } else {
      //If want to fetch all mentors list.
      const ViewedStatus = await Mentor_Profile_Model.find();
      if (ViewedStatus) {
        res.status(200).json({
          status: "Success",
          message: "Mentors List found Successfully !",
          data: ViewedStatus,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to fetch Mentors List !",
        });
      }
    }
  } catch (Error) {
    console.log("Error", Error);
  }
};
module.exports = {
  ViewMentorProfileFunction,
};
