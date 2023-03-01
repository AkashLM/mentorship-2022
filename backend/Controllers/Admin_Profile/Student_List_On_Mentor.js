const { Student_Profile_Model } = require('../../DatabaseSetup/Mongoose.StudentProfile.Schema');
const Student_List_On_Mentor = async (req, res) => {
	try {
		const { mentorName } = req.body;
		const menteesList = await Student_Profile_Model.find({ Student_Mentor_Name: mentorName });
		res.status(200).json({
			menteesList
		});
	} catch (Error) {
		console.log(Error);
		res.send(500);
	}
};
module.exports = {
	Student_List_On_Mentor
};
