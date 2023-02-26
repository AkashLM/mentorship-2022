const {Student_Profile_Model}=require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");

const AllowedCoordinatorFunction=async (req,res)=>{
    
    const {Res_Student_ID,Res_Coordinator_Status}=req.body;
    try{
        const Already_Coordinator_Check= await Student_Profile_Model.find({
            Coordinator:true,
        })
        if(Already_Coordinator_Check){
            res.status(500).json({
                status:"Error",
                message:"You can select only one Coordinator !",
            });
            return;
        }
        const Student_Check= await Student_Profile_Model.findByIdAndUpdate(Res_Student_ID,{Coordinator:Res_Coordinator_Status});
        if(Student_Check){
            res.status(200).json({
                status:"Success",
                message:"Student approved as Coordinator",
                data:Notes_Check,
            });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to Student approved as Coordinator !",
            });
        }

    }catch(Error){
        console.log(Error);
    }
   
}

module.exports={
    AllowedCoordinatorFunction,
}

//adds