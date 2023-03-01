const { Student_Profile_Model } = require('../../DatabaseSetup/Mongoose.StudentProfile.Schema');
const Add_Mentees = async (req, res) => {
	try {
		const { mentorName, groupName } = req.body;
		const { mentees } = req.body;

		await Student_Profile_Model.update(
			{ _id: { $in: mentees } },
			{ $set: { Student_Group: groupName, Student_Mentor_Name: mentorName } },
			{ multi: true }
		);
		res.sendStatus(200);
	} catch (Error) {
		console.log(Error);
		res.send(500);
	}
};
module.exports = {
	Add_Mentees
};
