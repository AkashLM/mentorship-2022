const MeetingModel= require("../../DatabaseSetup/Mongoose.Meetings.Schemas");

const View_Meetings=async (req,res,next)=>{
    const {Res_Group_Name} = req.body;
    try{
        const FindMeetings= await MeetingModel.Meeting_Model.find({
            GroupName:Res_Group_Name
        });
        if(FindMeetings){
            res.status(200).json({
                status: "Success",
                message: "Meeting found Successfully !",
                data:FindMeetings,
              });

        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to fetch meetings !",
            });
        }
    }catch(Error){
        console.log(Error);
    }
}

module.exports={View_Meetings,}