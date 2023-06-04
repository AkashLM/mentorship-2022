const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
// const __dirname = path.resolve();

//Setting Up CORS Policy
var corsOptions = {
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204
};
app.options('*', cors()); // preFlight
app.use('*', cors(corsOptions), function(req, res, next) {
	next();
});

//Setting Up CORS Policy
// app.use(
// 	cors({
// 		origin: '*'
// 	})
// );

const {
	Router1,
	Router2,
	Router3,
	Router4,
	Router5,
	Router6,
	Router7,
	Router8,
	Router9,
	Router10,
	Router11,
	Router12,
	Router13,
	Router14,
	Router15,
	Router16,
	Router17,
	Router18,
	Router19,
	Router20,
	Router21,
	Router22,
	Router23,
	Router24,
	Router25,
	Router26,
	Router27,
	Router28,
	Router29,
	Router30,
	Router31,
	Router32,
	Router33,
	Router34,
	Router35,
	Router36,
	Router37,
	Router38,
	Router39,
	Router40,
	Router41
} = require('./Routers/router.config');

//Body Parsing Configuration
app.use(express.json());
//Cookie Parsing Configuration
app.use(cookieParser());

//Environmental file Configuration
dotenv.config({
	path: './.env'
});

const { PORT } = process.env;
try {
	//Working API
	app.use('/api/v1/login', Router1);
	app.use('/api/v1/SignUp', Router2);
	app.use('/api/v1/AddAdminProfile', Router3);
	app.use('/api/v1/AddMentorProfile', Router4);
	app.use('/api/v1/AddStudentProfile', Router5);
	app.use('/api/v1/AddStudentGroup', Router6);
	app.use('/api/v1/ViewAdminProfile', Router7);
	app.use('/api/v1/ViewMentorProfile', Router8);
	app.use('/api/v1/ViewStudentProfile', Router9);
	app.use('/api/v1/AddNotes', Router10);
	app.use('/api/v1/ViewNotes', Router11);
	app.use('/api/v1/AllowedNotes', Router12);
	app.use('/api/v1/NewMeeting', Router13);
	app.use('/api/v1/ViewMeetings', Router14);
	app.use('/api/v1/AddMessage', Router15);
	app.use('/api/v1/ViewMessage', Router16);
	app.use('/api/v1/GetUser', Router17);
	app.use('/api/v1/DeleteNotes', Router18);
	app.use('/api/v1/ViewOneNote', Router19);
	// app.use('/api/v1/UploadAssignmentByCords', Router20);
	app.use('/api/v1/DownloadAssignment', Router21);
	app.use('/api/v1/AddCollections', Router22);
	app.use('/api/v1/ViewCollections', Router23);
	app.use('/api/v1/UploadAssignmentByCords', Router24);
	app.use('/api/v1/UploadAssignmentByStudent', Router25);
	app.use('/api/v1/ViewAssigmentsByStudent', Router26);
	app.use('/api/v1/DeleteAssignments', Router27);
	app.use('/api/v1/ViewGroupList', Router28);
	app.use('/api/v1/ViewPendingAssignmentByMentor', Router29);
	app.use('/api/v1/AllowedAssignment', Router30);
	app.use('/api/v1/ViewMentorList', Router31);
	app.use('/api/v1/AssignedMentorList', Router32);
	app.use('/api/v1/UnAssignedMentorList', Router33);
	app.use('/api/v1/AssignedStudentsList', Router34);
	app.use('/api/v1/UnAssignedStudentsList', Router35);
	app.use('/api/v1/PermissionGrouped', Router36);
	app.use('/api/v1/GetMeetingDetailsOnMentorName', Router37);
	app.use('/api/v1/AddMentees', Router38);
	app.use('/api/v1/DeleteMentees', Router39);
	app.use('/api/v1/StudentListOnMentorName', Router40);
	app.use('/api/v1/ViewMentorProfileOnGroupName', Router41);

	//meeting pending and approved
	//assignment pending and approved

	//Error Handling Middleware

	app.use((Error, req, res, next) => {
		res.status(500).json({
			status: 'System Error',
			message: 'Unable to fetch your request',
			Error: Error
		});
		console.log('nnnnnnnnn--->', Error);
	});
} catch (Error) {
	console.log('Weeeeee', Error);
}

//

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	});
}

//
app.listen(PORT, (Error) => {
	console.log(`Application listening on PORT ${PORT}`);
});
