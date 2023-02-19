const mongoose = require("mongoose");
const { MONGOOSE_CONNECTION } = process.env;

const CandidateSchema = new mongoose.Schema({
  Res_CandidateName : {
    type:String,
  },
  Res_Year : {
    type:String,
  },
  Res_OldDue : {
    type:Number,
  },
  Res_amountReceive :  {
    type:Number,
  },
  Res_ModeOfPaymentCash : {
    type:Boolean,
  },
  Res_ModeOfPaymentOnline :  {
    type:Boolean,
  },
});


const Candidate_Model = mongoose.model("CandidateSchema_DB", CandidateSchema);
module.exports = {
    Candidate_Model, 
};