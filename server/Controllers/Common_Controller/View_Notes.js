const {
  Add_Notes_Model,
} = require("../../DatabaseSetup/Mongoose.AddNotes.Schema");
const {Mentor_Profile_Model}=require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");
const ViewAllNotes = async (req, res) => {
  const { Res_Group_Name,Res_TypeOfUser } = req.body;
  const {GotUser}=req;
  if(Res_TypeOfUser==="Mentor"){
    const FindGroupName= await Add_Notes_Model.findOne({
      //Update the Mentor as Mentor_Name and Vinay Seth as GotUser.New_User_Details.Name
      Mentor:"Vinay Seth"
    });
  }
      let Allowed_Notes_Check;
     if(Res_TypeOfUser==="Admin"){
       //If admin want to see notes of particular group.
       if(Add_Notes_Model.Group===Res_Group_Name){
         Allowed_Notes_Check = await Mentor_Profile_Model.find({
           Group:Res_Group_Name
       });
       }else{
         Allowed_Notes_Check = await Add_Notes_Model.find({});
       }
     }else if(Res_TypeOfUser==="Mentor"){
       Allowed_Notes_Check = await Add_Notes_Model.find({
           Group:Res_Group_Name
       });
     }else if(Res_TypeOfUser==="Student"){

       Allowed_Notes_Check = await Add_Notes_Model.find({
         $and: [
           {
             Group: Res_Group_Name,
           },
           { Approved: true },
         ],
       });
     }
     if (Allowed_Notes_Check) {
      console.log("*********",Allowed_Notes_Check);
       res.status(200).json({
         status: "Success",
         message: "Notes found successfully !",
         data: Allowed_Notes_Check,
       });
     } else {
       res.status(500).json({
         status: "Error",
         message: "Unable to fetch student notes !",
       });
     }

  

};
module.exports = {
  ViewAllNotes,
};
