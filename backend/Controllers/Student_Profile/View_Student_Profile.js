const {Student_Profile_Model}=require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const ViewStudentProfileFunction=async(req,res)=>{
    const {Res_Student_Email}=req.body;
    try{
        //If want to fetch individual student profile.
        if(Res_Student_Email){
            const ViewedStatus= await Student_Profile_Model.findOne({Student_EmailId:Res_Student_Email});
            if(ViewedStatus){
                res.status(200).json({
                    status:"Success",
                    message:"Student Profile found Successfully !",
                    data:ViewedStatus,
                });
            }else{
                res.status(500).json({
                    status:"Error",
                    message:"Unable to fetch student Profile !",
                });
            }
        }else{
            //If want to fetch all students lists.
            const ViewedStatus= await Student_Profile_Model.find();
            if(ViewedStatus){
                res.status(200).json({
                    status:"Success",
                    message:"Students list found Successfully !",
                    data:ViewedStatus,
                });
            }else{
                res.status(500).json({
                    status:"Error",
                    message:"Unable to fetch students lists !",
                });
            }
        }

    }catch(Error){
        console.log("Error",Error);
    }
}
module.exports={
    ViewStudentProfileFunction,
}