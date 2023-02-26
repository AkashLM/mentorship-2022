const { SignUp_Model } = require("../../DatabaseSetup/Mongoose.SignUp.Schema");
const bcrypt = require("bcryptjs");
const ResetPasswordFunction = async (req, res, next) => {
  const { Res_EmailId, Res_Password, Res_TypeOfUser } = req.body;
  console.log(req.cookies);
  const Login_Check = await SignUp_Model.findOne({
    emailId: Res_EmailId,
  });
};
module.exports = {
  ResetPasswordFunction,
};
