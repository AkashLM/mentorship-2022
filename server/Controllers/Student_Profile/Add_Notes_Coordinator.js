const{Add_Notes_Model}=require("../../DatabaseSetup/Mongoose.AddNotes.Schema");
const AddNotesFunction=async(req,res)=>{
    const { Res_Topic_Name,
    Res_Coordinator_Name,
    Res_Notes,
    Res_Mentor_Name,
    Res_Coordinator,Res_Group_Name,Res_Upload_Date}=req.body;
    try{
        const NotesAddCheck= await Add_Notes_Model.create({
            Topic:Res_Topic_Name,
            Date: new Date,
            Mentor:Res_Mentor_Name,
            Coordinator_Name:Res_Coordinator_Name,
            Notes:Res_Notes,
            Group:Res_Group_Name,
            Approved:false,
            DateOfPost:Res_Upload_Date,
        });
        if(NotesAddCheck){
            res.status(200).json({
                status:"Success",
                message:"New notes created Successfully !",
                data:NotesAddCheck,
            });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to create notes!",
            });
        }
    }catch(Error){
        console.log(Error);
    }
};

module.exports={AddNotesFunction,}