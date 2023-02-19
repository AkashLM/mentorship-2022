const {Student_Profile_Model}=require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");


const DeleteStudentProfileFunction =async (req,res)=>{
    const{Res_StudentId, Res_TypeOfUser}= req.body;

    try{
        if(Res_TypeOfUser==="Admin"){
            const Delete_Profile_Check= await Student_Profile_Model.findByIdAndDelete(Res_StudentId);

            if(Delete_Profile_Check){
                res.status(200).json({
                    status:"Success",
                    message:"Student Profile deleted successfully !",
                    data:Notes_Check,
                });
            }else{
                res.status(500).json({
                    status:"Error",
                    message:"Unable to delete the student profile !",
                });
            }
        }else{
            res.status(500).json({
                status:"Error",
                message:"Only admin can delete the student profile !",
            });
        }

    }catch(Error){
        console.log(Error);
    }
}

module.exports= {
    DeleteStudentProfileFunction,
}