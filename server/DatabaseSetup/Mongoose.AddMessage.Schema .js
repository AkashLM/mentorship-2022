const mongoose=require('mongoose');


const MessageSchema=new mongoose.Schema({
    Heading:{
        type:String,
    },
    Topic:{
        type: String,
    },
    Date:{
        type:Date,
    },
    MentorName:{
        type:String,
    },
    Description:{
        type:String,
    },
    GroupName:{
        type:String,
    },
    MessageType:{
        type:String,
    },
    Student_Name:{
        type:String,
    },
    Type:{
        type:String,
    }
});

const Add_Message_Model = new mongoose.model("Add_Message_Model_db", MessageSchema);
module.exports={
    Add_Message_Model,
}