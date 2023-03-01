const {Candidate_Model}= require("../../DatabaseSetup/Mongoose.setCollection");

const View_Candidate_Function=async(req,res,next)=>{
    try{
            const SavedData_Candidate=await Candidate_Model.find();
        if(SavedData_Candidate){
            res.status(200).json({
                status: "Success",
                message: "Candidates found Successfully !",
                data:SavedData_Candidate,
              });
        }else{
            res.status(500).json({
                status:"Error",
                message:"Unable to find user !",
            });
        }
    }catch(Error){
        console.log(Error);
    }
}
module.exports={
    View_Candidate_Function,
}