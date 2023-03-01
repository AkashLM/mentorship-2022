const{Add_Notes_Model}=require("../../DatabaseSetup/Mongoose.AddNotes.Schema");
const DeleteNotesFunction =async (req,res)=>{
    const {Res_NoteID, Res_TypeOfUser,Res_Coordinator_Status} = req.body;
    if(Res_NoteID && Res_TypeOfUser){
        if(Res_TypeOfUser==="Mentor" || Res_Coordinator_Status===true){
            const Delete_Note_Check= await Add_Notes_Model.findByIdAndDelete(Res_NoteID);
            if(Delete_Note_Check){
                res.status(200).json({
                    status:"Success",
                    message:"Note deleted successfully !",
                    data:Notes_Check,
                });
            }else{
                res.status(500).json({
                    status:"Error",
                    message:"Unable to delete the note!",
                });
            }
        }else{
            res.status(500).json({
                status:"Error",
                message:"Only Mentor or Coordinator can delete the note!",
            });
        }

    }else{
        res.status(500).json({
            status:"Error",
            message:"Please provide NoteID and TypeOfUser status !",
        });
    }

}   

module.exports={
    DeleteNotesFunction,
}

//adds