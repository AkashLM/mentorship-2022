const {Mentor_Profile_Model}=require("../../DatabaseSetup/Mongoose.MentorProfile.Schema");
const MentorProfileFunction =async(req,res)=>{
    const {Res_Mentor_Name,Res_Mentor_ProfileLink,Res_Mentor_LinkedIn,Res_Mentor_Position,Res_Mentor_Contact_Number,Res_Mentor_EmailId,Res_Mentor_Qualification,Res_Mentor_Group_Name,Res_Mentor_Organization,Res_Mentor_About}=req.body;

    try{

                //Duplication check
        const Duplicate_Check= await Mentor_Profile_Model.findOne({
            $or: [{
                Mentor_Name:Res_Mentor_Name
            },{
                Mentor_EmailId:Res_Mentor_EmailId
            }]
        });
        if(Duplicate_Check){
            res.status(500).json({
                status:"Error",
                message:"Mentor with same Credentials already exists !",
            });
            return;
        }
        const Saved_Mentor_Data= await Mentor_Profile_Model.create({
            Mentor_Name:Res_Mentor_Name,
            Mentor_ProfileLink:Res_Mentor_ProfileLink,
            Mentor_LinkedIn:Res_Mentor_LinkedIn,
            Mentor_Position:Res_Mentor_Position,
            Mentor_Qualification:Res_Mentor_Qualification,
            Mentor_Group_Name:Res_Mentor_Group_Name,
            Mentor_Contact_Number:Res_Mentor_Contact_Number,
            Mentor_EmailId:Res_Mentor_EmailId,
            Mentor_Organization:Res_Mentor_Organization,
            Mentor_About:Res_Mentor_About

        })
        if(Saved_Mentor_Data){
            res.status(200).json({
                status:"Success",
                message:"Admin Profile created Successfully !",
                data:Saved_Mentor_Data,
            });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to create Admin Profile !",
            });
        }
    }catch(Error){
        console.log(Error);
    }

}
module.exports = {
    MentorProfileFunction,
};