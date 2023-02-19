const {Student_Profile_Model}=require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const UnAssignStudentFunction=async(req,res)=>{
    try{
            const ViewedStatus= await Student_Profile_Model.find({  $and: [
                {
                Student_Group: "Temp",
                },
                {
                Student_Mentor_Name: "Temp",
                },
              ],});
            if(ViewedStatus){
                res.status(200).json({
                    status:"Success",
                    message:"Unassign Student list found Successfully !",
                    data:ViewedStatus,
                });
            }else{
                res.status(500).json({
                    status:"Error",
                    message:"Unable to fetch Unassign student list !",
                });
            }

    }catch(Error){
        console.log("Error",Error);
    }
}
module.exports={
    UnAssignStudentFunction,
}