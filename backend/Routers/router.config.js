const express = require('express');
const Router1 = express.Router();
const Router2 = express.Router();
const Router3 = express.Router();
const Router4 = express.Router();
const Router5 = express.Router();
const Router6 = express.Router();
const Router7 = express.Router();
const Router8 = express.Router();
const Router9 = express.Router();
const Router10 = express.Router();
const Router11 = express.Router();
const Router12 = express.Router();
const Router13 = express.Router();
const Router14 = express.Router();
const Router15 = express.Router();
const Router16 = express.Router();
const Router17 = express.Router();
const Router18 = express.Router();
const Router19 = express.Router();
const Router20 = express.Router();
const Router21 = express.Router();
const Router22 = express.Router();
const Router23 = express.Router();
const Router24 = express.Router();
const Router25 = express.Router();
const Router26 = express.Router();
const Router27 = express.Router();
const Router28 = express.Router();
const Router29 = express.Router();
const Router30 = express.Router();
const Router31 = express.Router();
const Router32 = express.Router();
const Router33 = express.Router();
const Router34 = express.Router();
const Router35 = express.Router();
const Router36 = express.Router();
const Router37 = express.Router();
const Router38 = express.Router();
const Router39 = express.Router();
const Router40 = express.Router();
const Router41 = express.Router();

const { LoginFunction } = require('../Controllers/Common_Controller/Login');
const { SignUpFunction } = require('../Controllers/Common_Controller/SignUp');
const { AdminProfileFunction } = require('../Controllers/Admin_Profile/Add_Admin_Profile');
const { MentorProfileFunction } = require('../Controllers/Admin_Profile/Add_Mentor_Profile');
const { AuthenticationMiddleware } = require('../Authentication/Auth.Middleware');
const { StudentGroupFunction } = require('../Controllers/Admin_Profile/Add_Remove_Student_Group');
const { ViewAdminProfileFunction } = require('../Controllers/Admin_Profile/View_Admin_Profile');
const { ViewMentorProfileFunction } = require('../Controllers/Mentor_Profile/View_Mentor_Profile');
const { ViewStudentProfileFunction } = require('../Controllers/Student_Profile/View_Student_Profile');
const { AddNotesFunction } = require('../Controllers/Student_Profile/Add_Notes_Coordinator');
const { ViewAllNotes } = require('../Controllers/Common_Controller/View_Notes');
const { AllowPermissionsNotesFunction } = require('../Controllers/Mentor_Profile/Permission_Notes');
const { Add_New_Meeting } = require('../Controllers/Mentor_Profile/Add_New_Meeting');
const { View_Meetings } = require('../Controllers/Mentor_Profile/View_Meetings');
const { Add_Message } = require('../Controllers/Common_Controller/Add_Message');
const { View_Message } = require('../Controllers/Student_Profile/ViewMessage');
const { Get_User } = require('../Controllers/Common_Controller/GetUser');
const { DeleteNote } = require('../Controllers/Mentor_Profile/DeleteNotes');
const { View_One_Note } = require('../Controllers/Common_Controller/View_One_Note');
const { UploadAssignment } = require('../Controllers/Student_Profile/UploadAssignment');
const { StudentProfileFunction } = require('../Controllers/Student_Profile/Add_Student_Profile');
const { TokenGenerator_Middleware } = require('../Authentication/TokenGenerator.middleware');
const { MeetingStatus_Middleware } = require('../Authentication/MeetingStatus.Middleware');
const { GetUserMiddleware } = require('../Authentication/GetUser.Middleware');
const { DownloadAssignment } = require('../Controllers/Student_Profile/DownloadAssignment');
const { Candidate_Function } = require('../Controllers/Common_Controller/Candidate');
const { View_Candidate_Function } = require('../Controllers/Common_Controller/ViewCandidate');
const { Upload_Assignment_Cordi_Function } = require('../Controllers/Student_Profile/Upload_Assignment_Cordi');
const { Upload_Assignment_Student_Function } = require('../Controllers/Student_Profile/Upload_Assignment_Student');
const { ViewAllAssignments_Function } = require('../Controllers/Student_Profile/ViewAllAssigmentsByStudent');
const { Delete_Assignments_Function } = require('../Controllers/Mentor_Profile/Delete_Assignment');
const { View_Group_List_Function } = require('../Controllers/Common_Controller/ViewGroupList');
const { View_Assignment_Mentor_Function } = require('../Controllers/Mentor_Profile/View_Assignment_Mentor_Function');
const { Permission_Assignment_Function } = require('../Controllers/Mentor_Profile/Permission_Assignment');
//Admin Routing Function
const { Add_Mentees } = require('../Controllers/Admin_Profile/Add_Mentees');
const { Delete_Mentees } = require('../Controllers/Admin_Profile/Delete_Mentees');
const { MentorListFunction } = require('../Controllers/Admin_Profile/List_Of_Mentor');
const { AssignMentorListFunction } = require('../Controllers/Admin_Profile/Assign_Mentor_List');
const { UnAssignMentorListFunction } = require('../Controllers/Admin_Profile/Unassign_Mentor_List');
const { AssignStudentFunction } = require('../Controllers/Admin_Profile/Assign_Student_List');
const { UnAssignStudentFunction } = require('../Controllers/Admin_Profile/UnAssign_Student_List');
const { PermissionStudentFunction } = require('../Controllers/Admin_Profile/Permission_Group');
const { Meeting_Details } = require('../Controllers/Admin_Profile/Meeting_Details');
const { Student_List_On_Mentor } = require('../Controllers/Admin_Profile/Student_List_On_Mentor');
const { ViewMentorProfileOnGroupFunction } = require('../Controllers/Mentor_Profile/View_Mentor_Profile_On_GroupName');

Router1.route('/').post(LoginFunction, TokenGenerator_Middleware);
Router2.route('/').post(SignUpFunction, TokenGenerator_Middleware);
Router3.route('/').post(AuthenticationMiddleware, AdminProfileFunction);
Router4.route('/').post(AuthenticationMiddleware, MentorProfileFunction);
Router5.route('/').post(StudentProfileFunction);
Router6.route('/').post(AuthenticationMiddleware, StudentGroupFunction);
Router7.route('/').post(AuthenticationMiddleware, ViewAdminProfileFunction);
Router8.route('/').post(AuthenticationMiddleware, GetUserMiddleware, ViewMentorProfileFunction);
Router9.route('/').post(AuthenticationMiddleware, ViewStudentProfileFunction);
Router10.route('/').post(AuthenticationMiddleware, AddNotesFunction);
Router11.route('/').post(AuthenticationMiddleware, GetUserMiddleware, ViewAllNotes);
Router12.route('/').post(AuthenticationMiddleware, AllowPermissionsNotesFunction);
Router13.route('/').post(AuthenticationMiddleware, Add_New_Meeting);
Router14.route('/').post(AuthenticationMiddleware, MeetingStatus_Middleware, View_Meetings);
Router15.route('/').post(AuthenticationMiddleware, Add_Message);
Router16.route('/').post(AuthenticationMiddleware, View_Message);
Router17.route('/').post(AuthenticationMiddleware, GetUserMiddleware, Get_User);
Router18.route('/').post(AuthenticationMiddleware, GetUserMiddleware, DeleteNote);
Router19.route('/').post(AuthenticationMiddleware, GetUserMiddleware, View_One_Note);
// Router20.route('/').post(AuthenticationMiddleware, UploadAssignment);
// Router21.route('/:mentorID/:assignmentID').get(AuthenticationMiddleware, DownloadAssignment);
//
Router22.route('/').post(Candidate_Function);
Router23.route('/').get(View_Candidate_Function);
//
Router24.route('/').post(AuthenticationMiddleware, Upload_Assignment_Cordi_Function);
Router25.route('/').post(AuthenticationMiddleware, Upload_Assignment_Student_Function);
Router26.route('/').post(AuthenticationMiddleware, ViewAllAssignments_Function);
Router27.route('/').post(AuthenticationMiddleware, Delete_Assignments_Function);
Router28.route('/').post(AuthenticationMiddleware, View_Group_List_Function);
Router29.route('/').post(AuthenticationMiddleware, View_Assignment_Mentor_Function);
Router30.route('/').post(AuthenticationMiddleware, Permission_Assignment_Function);
//Admin Routes
Router31.route('/').post(MentorListFunction);
Router32.route('/').post(AssignMentorListFunction);
Router33.route('/').post(UnAssignMentorListFunction);
Router34.route('/').post(AssignStudentFunction);
Router35.route('/').post(UnAssignStudentFunction);
Router36.route('/').post(PermissionStudentFunction);
Router37.route('/:groupName').get(Meeting_Details);
Router38.route('/').post(Add_Mentees);
Router39.route('/').post(Delete_Mentees);
Router40.route('/').post(Student_List_On_Mentor);
Router41.route('/').post(ViewMentorProfileOnGroupFunction);

module.exports = {
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
};
