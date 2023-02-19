const{Add_AssignmentStudent_Assign_Model}=require("../../DatabaseSetup/Mongoose.Student.Assign.Schema ");

const Permission_Assignment_Function=async (req,res)=>{
    const {Res_Assign_Id,PermissionStatus,Res_ApprovedDate}= req.body;
    try{
        const Assign_Check= await Add_AssignmentStudent_Assign_Model.findByIdAndUpdate(Res_Assign_Id,{Approved:PermissionStatus,ApprovedDate:Res_ApprovedDate});
        if(Assign_Check){
            res.status(200).json({
                status:"Success",
                message:"Assignment approved by Mentor !",
                data:Assign_Check,
            });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to give permissions !",
            });
        }
    }catch(Error){
        console.log(Error);
    }
};

module.exports={
    Permission_Assignment_Function,
}