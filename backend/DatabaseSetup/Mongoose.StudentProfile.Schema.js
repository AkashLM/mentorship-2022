const mongoose=require('mongoose');

const Student_Profile_Schema= new mongoose.Schema({
    Student_Name:{
        type: String,
    },
    Student_Contact_Number:{
        type: String,
    },
    Student_EmailId:{
        type: String,
    },
    Student_Group:{
        type: String,
    },
    Student_Mentor_Name:{
        type: String,
    },
    Student_Admin_Name:{
        type: String,
    },
    Coordinator:{
        type:Boolean,
    },
    //Personal
    Student_First_Name:{
        type: String,
    },
    Student_Middle_Name:{
        type: String,
    },
    Student_Last_Name:{
        type: String,
    },
    Student_Medication:{
        type: String,
    },
    Student_Yoga:{
        type: String,
    },
    Student_Driving_Licence:{
        type: String,
    },
    Student_Adhaar_Number:{
        type: String,
    },
    Student_DoB:{
        type: String,
    },
    Student_PoB:{
        type: String,
    },
    Student_Permanent_Address:{
        type: String,
    },
    Student_Local_Address:{
        type: String,
    },
    Student_Blood_Group:{
        type: String,
    },
    Student_Height:{
        type: String,
    },
    Student_Gender:{
        type: String,
    },
    Student_Weight:{
        type: String,
    },
    Student_BMI:{
        type: String,
    },
    //Family
    Student_Father_Name:{
        type: String,
    },
    Student_Mother_Name:{
        type: String,
    },
    Student_Guardian_Name:{
        type: String,
    },
    Student_Father_Occupation:{
        type: String,
    },
    Student_Mother_Occupation:{
        type: String,
    },
    Student_Guardian_Occupation:{
        type: String,
    },
    Student_Father_Work_Deatils:{
        type: String,
    },
    Student_Mother_Work_Details:{
        type: String,
    },
    Student_Guardian_Work_Details:{
        type: String,
    },
    Student_Father_Office_Contact:{
        type: String,
    },
    Student_Mother_Office_Contact:{
        type: String,
    },
    Student_Guardian_Office_Contact:{
        type: String,
    },
    Student_Father_Email:{
        type: String,
    },
    Student_Mother_Email:{
        type: String,
    },
    Student_Guardian_Email:{
        type: String,
    },
    Student_Father_Annual_Income:{
        type: String,
    },
    Student_Mother_Annual_Income:{
        type: String,
    },
    Student_Guardian_Annual_Income:{
        type: String,
    },
    Student_Hobbies_And_Intrests:{
        type: String,
    },
    Student_Sibbling_One_Name:{
        type: String,
    },
    Student_Sibbling_Two_Name:{
        type: String,
    },
    Student_Sibbling_Three_Name:{
        type: String,
    },
    Student_Sibbling_One_Qualification:{
        type: String,
    },
    Student_Sibbling_Two_Qualification:{
        type: String,
    },
    Student_Sibbling_Three_Qualification:{
        type: String,
    },
    Student_Sibbling_One_Contact:{
        type: String,
    },
    Student_Sibbling_Two_Contact:{
        type: String,
    },
    Student_Sibbling_Three_Contact:{
        type: String,
    },
    //Academics
    Student_Ten_English:{
        type: String,
    },
    Student_Ten_Science:{
        type: String,
    },
    Student_Ten_Maths:{
        type: String,
    },
    Student_Ten_Total:{
        type: String,
    },
    Student_Ten_School_Name:{
        type: String,
    },
    Student_Twelve_Physics:{
        type: String,
    },
    Student_Twelve_Chemistry:{
        type: String,
    },
    Student_Twelve_Maths:{
        type: String,
    },
    Student_Twelve_Total:{
        type: String,
    },
    Student_Twelve_School_Name:{
        type: String,
    },
    Student_Cet_Physics:{
        type: String,
    },
    Student_Cet_Chemistry:{
        type: String,
    },
    Student_Cet_Maths:{
        type: String,
    },
    Student_Cet_Total:{
        type: String,
    },
    Student_LinkedIn:{
        type: String,
    },
    Student_About:{
        type: String,
    },
});

const Student_Profile_Model= new mongoose.model("Student_Model_db",Student_Profile_Schema);

module.exports={
    Student_Profile_Model,
};