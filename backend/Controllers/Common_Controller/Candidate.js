const {
  Candidate_Model,
} = require("../../DatabaseSetup/Mongoose.setCollection");

const Candidate_Function = async (req, res, next) => {
  const {
    Res_CandidateName,
    Res_Year,
    Res_OldDue,
    Res_amountReceive,
    Res_ModeOfPaymentCash,
    Res_ModeOfPaymentOnline,
  } = req.body;
  console.log(req.body.Res_TypeofUser);
  try {
    const findData_Candidate = await Candidate_Model.find({
      Res_CandidateName: req.body.Res_CandidateName,
    });
    if (findData_Candidate[0]) {
      const updateData_Candidate = await Candidate_Model.findByIdAndUpdate(
        findData_Candidate[0].id,
        {
          Res_CandidateName: Res_CandidateName,
          Res_Year: Res_Year,
          Res_OldDue: Res_OldDue,
          Res_amountReceive: Res_amountReceive,
          Res_ModeOfPaymentCash: Res_ModeOfPaymentCash,
          Res_ModeOfPaymentOnline: Res_ModeOfPaymentOnline,
        }
      );
      if (updateData_Candidate) {
        res.status(200).json({
          status: "Success",
          message: "Candidates added Successfully !",
          data: updateData_Candidate,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to added user !",
        });
      }
    } else {
      const SavedData_Candidate = await Candidate_Model.create({
        Res_CandidateName: Res_CandidateName,
        Res_Year: Res_Year,
        Res_OldDue: Res_OldDue,
        Res_amountReceive: Res_amountReceive,
        Res_ModeOfPaymentCash: Res_ModeOfPaymentCash,
        Res_ModeOfPaymentOnline: Res_ModeOfPaymentOnline,
      });
      console.log("SavedData_SignUp", SavedData_Candidate);
      if (SavedData_Candidate) {
        res.status(200).json({
          status: "Success",
          message: "Candidates added Successfully !",
          data: SavedData_Candidate,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to added user !",
        });
      }
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  Candidate_Function,
};
