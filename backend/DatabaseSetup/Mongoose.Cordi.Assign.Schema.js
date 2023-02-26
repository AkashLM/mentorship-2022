const mongoose=require('mongoose');


const AssignmentCordiSchema=new mongoose.Schema({
    Topic_Name:{
        type: String,
    },
    Desc:{
        type:String,
    },
    Mentor_Name:{
        type:String,
    },
    Coordinator_Name:{
        type:String,
    },
    Coordinator:{
        type:Boolean,
    },
    Group_Name:{
        type:String,
    },
    Upload_Date:{
        type:Date,
    },
    Approved: {
        type: Boolean
    }
});

const Add_AssignmentCordi_Assign_Model = new mongoose.model("Add_Assign_Cordi_Model_db", AssignmentCordiSchema);
module.exports={
    Add_AssignmentCordi_Assign_Model,
}