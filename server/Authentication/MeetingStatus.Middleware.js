const Meeting_Model = require("../DatabaseSetup/Mongoose.Meetings.Schemas");
const MeetingStatus_Middleware = (req, res, next) => {
  const MeetingStatus = [];
  let ReqFlag = true;
  const MeetingUpdate = async () => {
    const MeetingDate = await Meeting_Model.Meeting_Model.find();
    MeetingStatus.push(...MeetingDate);
    if (MeetingStatus) {
      MeetingStatus.map((Obj) => {
        const ObjDate = Obj.Date;
        const days = (date_1) => {
          if (date_1) {
            let date_2 = new Date();
            let difference = date_1.getTime() - date_2.getTime();
            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            return TotalDays;
          }
        };
        if (days(ObjDate) < 0) {
          const UpdateFunction = async () => {
            const UpdatedMeetings = await Meeting_Model.Meeting_Model.findByIdAndUpdate(
              Obj.id,
              { MeetingStatus: "Approved" }
            );
            if(UpdatedMeetings){
              ReqFlag = true;
            }
          };
          UpdateFunction();
        }
      });
    }

    if (MeetingDate) {
      ReqFlag = true;
    }
  };

  MeetingUpdate();
  if (ReqFlag === true) {
    next();
  }
};

module.exports = {
  MeetingStatus_Middleware,
};
