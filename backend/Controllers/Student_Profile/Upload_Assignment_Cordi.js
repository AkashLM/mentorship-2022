const {Add_AssignmentCordi_Assign_Model} = require ("../../DatabaseSetup/Mongoose.Cordi.Assign.Schema");
const Upload_Assignment_Cordi_Function =async(req,res,next)=>{
    const {Res_Topic_Name,Res_Desc,Res_Mentor_Name,Res_Coordinator_Name,Res_Coordinator,Res_Group_Name,Res_Upload_Date}=req.body;
    console.log(req.body);
    if(Res_Coordinator){
        const Saved_Student_Data = await Add_AssignmentCordi_Assign_Model.create({
            Topic_Name:Res_Topic_Name,
            Desc:Res_Desc,
            Mentor_Name:Res_Mentor_Name,
            Coordinator_Name:Res_Coordinator_Name,
            Coordinator:Res_Coordinator,
            Group_Name:Res_Group_Name,
            Upload_Date:Res_Upload_Date,
            Approved: true,
            
        });
        if(Saved_Student_Data){
            console.log("Saved_Student_Data",Saved_Student_Data);
            res.status(200).json({
                status: "Success",
                message: "Assignment created by coordinator !",
                data: Saved_Student_Data,
              });
        }else{
            res.status(500).json({
                status: "Error",
                message: "Unable to create Assignment !",
              });
        }
    }
}

module.exports={
    Upload_Assignment_Cordi_Function,
}