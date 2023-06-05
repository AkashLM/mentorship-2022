const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
	MeetingId: {
		type: String
	},
	Date: {
		type: Date
	},
	Time: {
		type: String
	},
	TimeStamp: {
		type: Date
	},
	TopicName: {
		type: String
	},
	Description: {
		type: String
	},
	MentorName: {
		type: String
	},
	GroupName: {
		type: String
	},
	Venue: {
		type: String
	},
	Location: {
		type: String
	},
	StudentStatus: {
		type: String
	},
	MeetingStatus: {
		type: String
	},
	MinutesOfMeeting: {
		type: String
	}
});

const Meeting_Model = new mongoose.model('Meeting_Model_db', MeetingSchema);

module.exports = {
	Meeting_Model
};
