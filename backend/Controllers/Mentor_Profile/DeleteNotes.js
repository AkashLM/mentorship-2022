const {Add_Notes_Model}= require("../../DatabaseSetup/Mongoose.AddNotes.Schema");

const DeleteNote= async(req,res,next)=>{
    const {Res_NoteID}=req.body;
    const {GotUser}=req;
    try{
        const DeleteResponse= await Add_Notes_Model.findByIdAndDelete(Res_NoteID);
        if(DeleteResponse){
            res.status(200).json({
                status: "Success",
                message: "Note Deleted Successfully !",
                data:DeleteResponse,
              });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to delete meeting !",
            });
        }

    }catch(Error){
        console.log(Error);
    }
}

module.exports={
    DeleteNote,
}