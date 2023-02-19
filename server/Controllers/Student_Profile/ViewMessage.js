const {
  Add_Message_Model,
} = require("../../DatabaseSetup/Mongoose.AddMessage.Schema ");
const View_Message = async (req, res, next) => {
  const { Res_Group_Name, Res_Student_Name } = req.body;
console.log("=====>",req.body);
  let MessageBox1 ;
  let MessageBox2 ;
  try {
    const ViewMessageRes1 = await Add_Message_Model.find({
      GroupName: Res_Group_Name,
    });
    if (Res_Student_Name) {
      const ViewMessageRes2 = await Add_Message_Model.find({
        Student_Name: Res_Student_Name,
      });

      if (ViewMessageRes1 && ViewMessageRes2) {
        MessageBox1 =ViewMessageRes1;
        MessageBox2 = ViewMessageRes2;
        console.log("=====>",MessageBox1);
        console.log("=====>",MessageBox2);

        res.status(200).json({
          status: "Success",
          message: "Messages found Successfully !",
          data1: MessageBox1,
          data2: MessageBox2,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to fetch messages !",
        });
      }
    }

  } catch (Error) {
    console.log("Error", Error);
  }
};

module.exports = { View_Message };
