const {Admin_Profile_Model}=require("../../DatabaseSetup/Mongoose.AdminProfile.Schema");
const ViewAdminProfileFunction=async(req,res)=>{
    const {Res_Admin_EmailId}=req.body;
    try{
        const ViewedStatus= await Admin_Profile_Model.findOne({Admin_EmailId:Res_Admin_EmailId});
        if(ViewedStatus){
            res.status(200).json({
                status:"Success",
                message:"Admin Profile found Successfully !",
                data:ViewedStatus,
            });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to fetch Admin Profile !",
            });
        }
    }catch(Error){
        console.log("Error",Error);
    }
}
module.exports={
    ViewAdminProfileFunction,
}