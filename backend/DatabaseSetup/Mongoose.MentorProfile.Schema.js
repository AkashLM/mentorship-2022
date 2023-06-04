const mongoose = require('mongoose');

const Mentor_Profile_Schema = new mongoose.Schema({
	Mentor_Name: {
		type: String
	},
	Mentor_ProfileLink: {
		type: String
	},
	Mentor_Contact_Number: {
		type: String
	},
	Mentor_EmailId: {
		type: String
	},
	Mentor_LinkedIn: {
		type: String
	},
	Mentor_Position: {
		type: String
	},
	Mentor_Qualification: {
		type: String
	},
	Mentor_Group_Name: {
		type: String
	},
	Mentor_Organization: {
		type: String
	},
	Mentor_About: {
		type: String
	},
	Mentor_Assign_Status: {
		type: false
	},
	Mentor_review_url: {
		type: String
	}
});

const Mentor_Profile_Model = new mongoose.model('Mentor_Model_db', Mentor_Profile_Schema);

module.exports = {
	Mentor_Profile_Model
};
