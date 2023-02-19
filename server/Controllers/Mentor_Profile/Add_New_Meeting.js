const Meeting_Model = require("../../DatabaseSetup/Mongoose.Meetings.Schemas.js");
const Add_New_Meeting = async (req, res, next) => {
  const {
    Res_MeetingId,
    Res_Date,
    Res_Time,
    Res_TimeStamp,
    Res_TopicName,
    Res_Description,
    Res_MentorName,
    Res_GroupName,
    Res_Venue,
    Res_Location,
    Res_StudentStatus,
    Res_MeetingStatus,
  } = req.body;
 
  console.log("bodyt response------------------------------------>",req.body);

  try {
    const MeetingResponse = await Meeting_Model.Meeting_Model.create({
      MeetingId: Res_MeetingId,
      Date: Res_Date,
      Time: Res_Time,
      TimeStamp: Res_TimeStamp,
      TopicName: Res_TopicName,
      Description: Res_Description,
      MentorName: Res_MentorName,
      GroupName: Res_GroupName,
      Venue: Res_Venue,
      Location: Res_Location,
      StudentStatus: Res_StudentStatus,
      MeetingStatus: Res_MeetingStatus,
    });
    if (MeetingResponse) {
      res.status(200).json({
        status: "Success",
        message: "New Meeting created Successfully !",
        data:MeetingResponse,
      });
      console.log("meet response------------------------------------>",MeetingResponse);
    } else {
      res.status(500).json({
        status: "Error",
        message: "Unable to create meeting!",
      });
    }
  }catch(Error) {
    console.log(Error);
  }
};

module.exports = { Add_New_Meeting };
