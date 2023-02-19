const mongoose=require('mongoose');

const Admin_Profile_Schema= new mongoose.Schema({
    Admin_Name:{
        type: String,
    },
    Admin_Contact_Number:{
        type: String,
    },
    Admin_EmailId:{
        type: String,
    }
});

const Admin_Profile_Model= new mongoose.model("Admin_Model_db",Admin_Profile_Schema);

module.exports={
    Admin_Profile_Model,
};