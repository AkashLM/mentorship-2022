const {Admin_Profile_Model}=require("../../DatabaseSetup/Mongoose.AdminProfile.Schema");
const AdminProfileFunction =async (req,res)=>{
    const {Res_Admin_Name,Res_Admin_Contact_Number,Res_Admin_EmailId}=req.body;
    try{
                //Duplication check
        const Duplicate_Check= await Admin_Profile_Model.findOne({
            $or: [{
                Admin_Name:Res_Admin_Name
            },{
                Admin_EmailId:Res_Admin_EmailId
            }]
        });
        if(Duplicate_Check){
            res.status(500).json({
                status:"Error",
                message:"Admin with same Credentials already exists !",
            });
            return;
        }
        const Saved_Admin_Data= await Admin_Profile_Model.create({
            Admin_Name:Res_Admin_Name,
            Admin_Contact_Number:Res_Admin_Contact_Number,
            Admin_EmailId:Res_Admin_EmailId
        })
        if(Saved_Admin_Data){
            res.status(200).json({
                status:"Success",
                message:"Admin Profile created Successfully !",
                data:Saved_Admin_Data,
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
    AdminProfileFunction,
};