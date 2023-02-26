const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  Topic: {
    type: String,
  },
  Date: {
    type: Date,
  },
  Mentor: {
    type: String,
  },
  Coordinator_Name: {
    type: String,
  },
  Notes: {
    type: String,
  },
  Approved: {
    type: Boolean,
  },
  Group: {
    type: String,
  },
  DateOfPost: {
    type: Date,
  },
});

const Add_Notes_Model = new mongoose.model("Add_Notes_Model_db", NotesSchema);
module.exports = {
  Add_Notes_Model,
};
