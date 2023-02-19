const mongoose = require('mongoose');

const assignment = mongoose.model(
	'Assignment',
	new mongoose.Schema({
		name: {
			type: String,
			trim: true
		},
		mentor_id: {
			type: String
		},

		dateAssigned: {
			type: Date,
			default: Date.now
		},
		url: {
			type: String
		},
		lastDate: { type: Date },
		submissions: [
			{
				type: String
			}
		]
	})
);

module.exports = assignment;
