const {
  SignUp_Model,
} = require("../../DatabaseSetup/Mongoose.SignUp.Schema.js");
const SignUpFunction = async (req, res, next) => {
  const { Res_Name, Res_EmailId, Res_Password, Res_TypeofUser } = req.body;
  console.log(req.body.Res_TypeofUser);
  try {
    const already_exist_Checks = await SignUp_Model.findOne({
      $or: [
        {
          Name: Res_Name,
        },
        {
          emailId: Res_EmailId,
        },
      ],
    });
    if (!already_exist_Checks) {
      const SavedData_SignUp = await SignUp_Model.create({
        Name: Res_Name,
        emailId: Res_EmailId,
        Password: Res_Password,
        TypeofUser: Res_TypeofUser,
      });
      console.log("SavedData_SignUp", SavedData_SignUp);

      //Adding found user object to req.user for token generation.
      req.User = SavedData_SignUp;
      //Calling authentication middleware for token generation.
      next();
    } else {
      res.status(500).json({
        statusbar: "error",
        message: "User already exist!",
        data: already_exist_Checks,
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  SignUpFunction,
};
