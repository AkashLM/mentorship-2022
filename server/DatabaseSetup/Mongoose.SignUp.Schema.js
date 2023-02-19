const mongoose = require("mongoose");
const { MONGOOSE_CONNECTION } = process.env;
const bcrypt=require("bcryptjs");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://varunsingh:test@cluster0.6zuyiir.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
mongoose.connection.on("open", () => {
  console.log("Database connection established");
});

//Schema for SignUp Testing
const SignUp_Schema = new mongoose.Schema({
  Name:{
    type:String,
  },
  emailId: {
    type: String,
  },
  Password: {
    type: String,
  },
  TypeofUser: {
    type: String,
  },
});
//Pre-SaveMiddleware for Password Encryption
SignUp_Schema.pre("save", async function(){
  this.Password= await bcrypt.hash(this.Password, 12);
})

//Model for SignUp Testing
const SignUp_Model = mongoose.model("SignUp_Model_DB", SignUp_Schema);
module.exports = {
  SignUp_Model, 
};