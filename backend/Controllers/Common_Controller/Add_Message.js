const {Add_Message_Model} = require("../../DatabaseSetup/Mongoose.AddMessage.Schema ");
const Add_Message =async (req,res,next)=>{
    const {Res_Heading_Name,Res_Topic_Name,Res_Date,Res_Mentor_Name,Res_Description,Res_Group_Name,Res_Student_Name,Res_Message_Type}=req.body;
    console.log("......",req.body);
    try{
        const CreateMessageRes= await Add_Message_Model.create({
            Heading:Res_Heading_Name,
            Topic:Res_Topic_Name,
            Date:Res_Date,
            MentorName:Res_Mentor_Name,
            Description:Res_Description,
            GroupName:Res_Group_Name,
            Student_Name:Res_Student_Name,
            Type:Res_Message_Type
        });
    
        if(CreateMessageRes){
            console.log("kkk",CreateMessageRes);
            res.status(200).json({
                status: "Success",
                message: "Message created Successfully !",
                data:CreateMessageRes,
              });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to create message !",
            });
        }
    
    }catch(Error){
        console.log("Error", Error);
    }

}

module.exports={Add_Message,}