var path = require('path');
var fs = require('fs');

const DownloadAssignment = (req, res) => {
	try {
		console.log(req.params);
		var newPath = path.join(
			process.cwd(),
			'/assets/' + 'Assignments' + '/' + req.params.mentorID + '/' + req.params.assignmentID + '/'
		);
		var allFiles = [];
		var exactFile;
		fs.readdirSync(newPath).forEach((file) => {
			allFiles.push(file);
		});

		exactFile = allFiles[0];

		const file = newPath + '/' + exactFile;

		res.download(file);
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: error.message });
	}
};

module.exports = { DownloadAssignment };
