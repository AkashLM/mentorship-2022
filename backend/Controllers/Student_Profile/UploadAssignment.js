const formidable = require('formidable');
var path = require('path');
var fs = require('fs');
const Assignment = require('../../DatabaseSetup/Mongoose.Assignment.Schema');
const UploadAssignment = (req, res) => {
	const form = new formidable.IncomingForm();
	try {
		form.parse(req, async function(err, fields, files) {
			const assignment = new Assignment({
				name: fields.assignmentName,
				mentor_id: fields.mentor_id,
				lastDate: fields.deadline
			});
			await assignment.save((err, data) => {
				if (err) {
					res.status(500).send({ message: err });
				}
			});
			var newPath = path.join(
				process.cwd(),
				'/assets/' +
					fields.folderName +
					'/' +
					fields.mentor_id +
					'/' +
					assignment._id +
					'/' +
					files.file.originalFilename
			);
			var pathsToBeMade = path.join(process.cwd(), '/assets/' + fields.folderName + '/' + fields.mentor_id);
			if (!fs.existsSync(pathsToBeMade)) {
				fs.mkdirSync(pathsToBeMade);
			}
			pathsToBeMade = path.join(
				process.cwd(),
				'/assets/' + fields.folderName + '/' + fields.mentor_id + '/' + assignment._id
			);
			if (!fs.existsSync(pathsToBeMade)) {
				fs.mkdirSync(pathsToBeMade);
			}
			// if (!fs.existsSync())
			const rawData = fs.readFileSync(files.file.filepath);
			// 	fs.writeFileSync(newPath, rawData, function(err) {
			if (err) {
				console.log(err);
				res.status(500).send({
					success: false,
					error: err
				});
			}
			fs.writeFile(newPath, rawData, function(err) {
				if (err) console.log(err);
				return res.send('Successfully uploaded');
			});
		});
	} catch (Error) {
		console.log(Error);
	}
};

module.exports = { UploadAssignment };
