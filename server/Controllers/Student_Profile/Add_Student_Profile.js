const {
  Student_Profile_Model,
} = require("../../DatabaseSetup/Mongoose.StudentProfile.Schema");
const StudentProfileFunction = async (req, res) => {
  const {
    Res_Student_Name,
    ContactNumber,
    Email,
    Res_Student_Group,
    Res_Student_Mentor,
    Res_Student_Coordinator,
    FirstName,
    MiddleName,
    LastName,
    Medication,
    Yoga,
    DrivingLicense,
    AadharNumber,
    DateOfBirth,
    PlaceOfBirth,
    PermanentAddress,
    LocalAddress,
    BloodGroup,
    Height,
    Gender,
    Weight,
    BMI,
    FathersName,
    MotherName,
    LegalGuardiansName,
    FathersOccupation,
    MothersOccupation,
    LegalGuardiansOccupation,
    FathersWorkDetails,
    MothersWorkDetails,
    LegalGuardiansWorkDetails,
    FathersOfficeContact,
    MothersOfficeContact,
    LegalGuardiansOfficeContact,
    FathersEmail,
    MothersEmail,
    LegalGuardiansEmail,
    FathersAnnualIncome,
    MothersAnnualIncome,
    LegalGuardiansAnnualIncome,
    Hobbies,
    Sibling1Name,
    Sibling2Name,
    Sibling3Name,
    Sibling1Qualification,
    Sibling2Qualification,
    Sibling3Qualification,
    Sibling1Contact,
    Sibling2Contact,
    Sibling3Contact,
    _10English,
    _10Science,
    _10Maths,
    _10Total,
    _10School,
    _12Physics,
    _12Chemisty,
    _12Math,
    _12Total,
    _12SchoolName,
    _CExamPhysics,
    _CExamChem,
    _CExamMath,
    _CExamTotal,
    _About,
    _LinkedIn,
  } = req.body;

  console.log("STudent ->", req.body);
  try {
    //Duplication check
    const Duplicate_Check = await Student_Profile_Model.findOne({
      $or: [
        {
          Student_Name: `${FirstName} ${LastName}`,
        },
        {
          Student_EmailId: Email,
        },
      ],
    });
    if (Duplicate_Check) {
      res.status(500).json({
        status: "Error",
        message: "Student with same Credentials already exists !",
      });
      return;
    }
    const Saved_Student_Data = await Student_Profile_Model.create({
      Student_Name: `${FirstName} ${LastName}`,
      Student_Contact_Number: ContactNumber,
      Student_EmailId: Email,
      Student_Group: "Temp", //Res_Student_Group,
      Student_Mentor_Name: "Temp", //Res_Student_Mentor,
      Coordinator: false, //Res_Student_Coordinator,
      //Personal
      Student_First_Name: FirstName,
      Student_Middle_Name: MiddleName,
      Student_Last_Name: LastName,
      Student_Medication: Medication,
      Student_Yoga: Yoga,
      Student_Driving_Licence: DrivingLicense,
      Student_Adhaar_Number: AadharNumber,
      Student_DoB: DateOfBirth,
      Student_PoB: PlaceOfBirth,
      Student_Permanent_Address: PermanentAddress,
      Student_Local_Address: LocalAddress,
      Student_Blood_Group: BloodGroup,
      Student_Height: Height,
      Student_Gender: Gender,
      Student_Weight: Weight,
      Student_BMI: BMI,
      //Family
      Student_Father_Name: FathersName,
      Student_Mother_Name: MotherName,
      Student_Guardian_Name: LegalGuardiansName,
      Student_Father_Occupation: FathersOccupation,
      Student_Mother_Occupation: MothersOccupation,
      Student_Guardian_Occupation: LegalGuardiansOccupation,
      Student_Father_Work_Deatils: FathersWorkDetails,
      Student_Mother_Work_Details: MothersWorkDetails,
      Student_Guardian_Work_Details: LegalGuardiansWorkDetails,
      Student_Father_Office_Contact: FathersOfficeContact,
      Student_Mother_Office_Contact: MothersOfficeContact,
      Student_Guardian_Office_Contact: LegalGuardiansOfficeContact,
      Student_Father_Email: FathersEmail,
      Student_Mother_Email: MothersEmail,
      Student_Guardian_Email: LegalGuardiansEmail,
      Student_Father_Annual_Income: FathersAnnualIncome,
      Student_Mother_Annual_Income: MothersAnnualIncome,
      Student_Guardian_Annual_Income: LegalGuardiansAnnualIncome,
      Student_Hobbies_And_Intrests: Hobbies,
      Student_Sibbling_One_Name: Sibling1Name,
      Student_Sibbling_Two_Name: Sibling2Name,
      Student_Sibbling_Three_Name: Sibling3Name,
      Student_Sibbling_One_Qualification: Sibling1Qualification,
      Student_Sibbling_Two_Qualification: Sibling2Qualification,
      Student_Sibbling_Three_Qualification: Sibling3Qualification,
      Student_Sibbling_One_Contact: Sibling1Contact,
      Student_Sibbling_Two_Contact: Sibling2Contact,
      Student_Sibbling_Three_Contact: Sibling3Contact,
      //Academics
      Student_Ten_English: _10English,
      Student_Ten_Science: _10Science,
      Student_Ten_Maths: _10Maths,
      Student_Ten_Total: _10Total,
      Student_Ten_School_Name: _10School,
      Student_Twelve_Physics: _12Physics,
      Student_Twelve_Chemistry: _12Chemisty,
      Student_Twelve_Maths: _12Math,
      Student_Twelve_Total: _12Total,
      Student_Twelve_School_Name: _12SchoolName,
      Student_Cet_Physics: _CExamPhysics,
      Student_Cet_Chemistry: _CExamChem,
      Student_Cet_Maths: _CExamMath,
      Student_Cet_Total: _CExamTotal,
      Student_LinkedIn: _LinkedIn,
      Student_About: _About,
    });
    if (Saved_Student_Data) {
      console.log("Saved_Student_Data ->", Saved_Student_Data);

      res.status(200).json({
        status: "Success",
        message: "Student Profile created Successfully !",
        data: Saved_Student_Data,
      });
    } else {
      res.status(500).json({
        status: "Error",
        message: "Unable to create Student Profile !",
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  StudentProfileFunction,
};
