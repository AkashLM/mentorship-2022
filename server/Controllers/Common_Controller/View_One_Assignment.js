const {
  Add_Notes_Model,
} = require("../../DatabaseSetup/Mongoose.AddNotes.Schema");
const View_One_Assignment = async (req, res) => {
  const { Res_Note_Id, } = req.body;
  try{

    const FindNotes = await Add_Notes_Model.findById(Res_Note_Id);
    if(FindNotes){
      res.status(200).json({
        status: "Success",
        message: "Notes found successfully !",
        data: FindNotes,
      });
    }else{
      res.status(500).json({
        status: "Error",
        message: "Unable to fetch student notes !",
      });
    }
  }catch(Error){
    console.log("Error", Error);
  }
};
module.exports = {
  View_One_Assignment,
};
