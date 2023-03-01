const mongoose=require('mongoose');


const AssignmentStudentSchema=new mongoose.Schema({
    Topic_Name:{
        type: String,
    },
    Link:{
        type:String,
    },
    Mentor_Name:{
        type:String,
    },
    Student_Name:{
        type:String,
    },
    Group_Name:{
        type:String,
    },
    Upload_Date:{
        type:String,
    },
    Approved:{
        type: Boolean,
    },
    ApprovedDate: {
        type:Date,
    }
});

const Add_AssignmentStudent_Assign_Model = new mongoose.model("Add_Assignment_Stud_Model_db", AssignmentStudentSchema);
module.exports={
    Add_AssignmentStudent_Assign_Model,
}