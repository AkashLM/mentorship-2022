const {Student_Profile_Model}=require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const StudentGroupFunction=async(req,res)=>{
    const {Res_Student_Name,
    Res_Group_Name,
    Res_Admin_Name,
    Res_Mentor_Name
}=req.body;

try{
    //Already grouped students check
    const Already_Grouped_Check= await Student_Profile_Model.findOne({Student_Name:Res_Student_Name});
    if(Already_Grouped_Check.Student_Group){
        res.status(500).json({
            status:"Error",
            message:"Student already added in group!",
            data:Already_Grouped_Check,
        });
        return;
    }
    const UpdateGroupCheck= await Student_Profile_Model.findOneAndUpdate({Student_Name:Res_Student_Name},{Student_Group:Res_Group_Name,
        Student_Admin_Name:Res_Admin_Name,
        Student_Mentor_Name:Res_Mentor_Name,
    },{upsert: true});
    if(UpdateGroupCheck){
        res.status(200).json({
            status:"Success",
            message:"Group assigned successfully !",
            data:UpdateGroupCheck,

        });
    }
}catch(Error){
    console.log(Error);
}
}

module.exports={
    StudentGroupFunction,
}
