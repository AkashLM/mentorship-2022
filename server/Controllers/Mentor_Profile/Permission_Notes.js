const{Add_Notes_Model}=require("../../DatabaseSetup/Mongoose.AddNotes.Schema");

const AllowPermissionsNotesFunction=async (req,res)=>{
    const {Res_Notes_Topic_Id,PermissionStatus}= req.body;
    try{
        const Notes_Check= await Add_Notes_Model.findByIdAndUpdate(Res_Notes_Topic_Id,{Approved:PermissionStatus});
        if(Notes_Check){
            res.status(200).json({
                status:"Success",
                message:"Note approved by Mentor !",
                data:Notes_Check,
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
}

module.exports={
    AllowPermissionsNotesFunction,
}