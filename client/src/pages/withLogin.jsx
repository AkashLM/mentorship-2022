import React, { useEffect, useRef, useState, Fragment } from 'react';
import HamburgerButton1 from '../Profile/MentorComponent/CustomComponents/navbar/sideNavButton';
import MentorProfile from '../Profile/MentorComponent/CustomComponents/Profile/MentorProfile';
import AddMeeting from '../Profile/MentorComponent/CustomComponents/AddMeeting/addmeeting';
import StudentList from '../Profile/MentorComponent/CustomComponents/StudentsList/StudentsList';
import Message from '../Profile/MentorComponent/CustomComponents/Message/Message';
import PendingNotes from '../Profile/MentorComponent/CustomComponents/PendingNotes/PendingNotes';
import { Routes, Route } from 'react-router-dom';
import ScheduledMeetings from '../Profile/MentorComponent/CustomComponents/ScheduledMeetings/ScheduledMeetings';
import ApprovalNotes from '../Profile/MentorComponent/CustomComponents/ApprovalNotes/ApprovalNotes';
import StudentsNotes from '../Profile/MentorComponent/CustomComponents/StudentsNotes/StudentsNotes';
import HamburgerButton2 from '../Profile/StudentComponent/navbar/sideNavButton';
import HamburgerButton3 from '../Profile/AdminComponent/navbar/sideNavButton';
import StudentProfile from '../Profile/StudentComponent/StudentProfile/StudentProfile';
import LatestMeetup from '../Profile/StudentComponent/LatestMeetup/LatestMeetup';
import Assignments from '../Profile/StudentComponent/Assignments/PendingAssignment';
import AssignmentForm from '../Profile/StudentComponent/AssignmentForm/AssignmentForm';
import Notes from '../Profile/StudentComponent/Notes/Notes';
import GroupDetails from '../Profile/StudentComponent/GroupDetails/GroupDetails';
import OutlinedCard from '../Profile/StudentComponent/Notes/OpenPdf';
import PreviousMeetup from '../Profile/StudentComponent/LatestMeetup/PreviousMeetup/PreviousMeetup';
import ProfilePage from '../Profile/StudentComponent/StudentProfile/ProfilePage/ProfilePage';
import QuickMessage from '../Profile/StudentComponent/QuickMessage/QuickMessage';
import StudentsAssignment from '../Profile/MentorComponent/CustomComponents/StudentsAssignment/StudentsAssignment';
import MentorAssignment from '../Profile/MentorComponent/CustomComponents/Assignment/SubmmitedAssignments';
import ViewMentorStudentProfile from '../Profile/MentorComponent/CustomComponents/StudentProfile/ViewMentorStudentProfile';
import CircularColor from '../HelpingFunctions/Loader';
import LogoutLoader from '../HelpingFunctions/LogoutLoader';
//Admin Components
import AdminProfile from '../Profile/AdminComponent/AdminProfile';
import PageNotFound from './PageNotFound';
import axios from 'axios';
import Cookies from 'universal-cookie';
import AssignStudent from '../Admin/AssignStudents/AssignStudent';
import Assignment from '../Admin/Assignments/Assignment';
import Meeting from '../Admin/Meetings/Meeting';
import Profile from '../Admin/Profile/Profile';

const WithLogin = (Props) => {
	const { refresher, setRefresher } = Props;

	//Ref for the Noyes section to passsing props from parent to child components
	const [ loading1, setLoading1 ] = useState(true);
	const [ loading2, setLoading2 ] = useState(true);
	const [ loadingR, setLoadingR ] = useState(false);
	const [ userDataT, setUserDataT ] = useState({});
	const [ ViewNotesProp, setViewNotesProp ] = useState('');
	const [ uploadSelector, setUploadSelector ] = useState({});
	const [ noteSelect, setNoteSelect ] = useState({});
	const [ submissionStatus, setSubmissionStatus ] = useState([]);
	const [ viewStudentProfile, setViewStudentProfile ] = useState({});
	const TypeOfUser = 'Mentor';
	const [ typeOfUser, setTypeOfUser ] = useState('');
	const [ mentorData, setMentorData ] = useState(localStorage.getItem('mentorData') || {});
	const [ studentData, setStudentData ] = useState({});
	const [ adminData, setAdminData ] = useState({});
	const BASEURL = process.env.REACT_APP_SAMPLE;
	const cookies = new Cookies();
	const UserTypeFunction = async () => {
		const UserData = await axios.post(
			`${BASEURL}/GetUser`,
			{},
			{
				headers: {
					Authorization: cookies.get('KeyToken')
				}
			}
		);
		if (UserData) {
			console.log('UserData', UserData);
			// console.log("UserData", UserData.data.data.New_User_Details);
			setUserDataT(UserData.data.data.New_User_Details);
			setLoading1(false);
			// console.log("userDataT", userDataT);
			if (userDataT.TypeofUser === 'Admin') {
				setTypeOfUser('Admin');
				FAdminDataFunction();
			} else if (userDataT.TypeofUser === 'Mentor') {
				setTypeOfUser('Mentor');
				FMentoDataFunction();
			} else if (userDataT.TypeofUser === 'Student') {
				setTypeOfUser('Student');
				StudentFunction();
			}
		}
	};
	//Student Dat fetch function
	const StudentFunction = async () => {
		const fetchStudent = async () => {
			const StudentData = await axios.post(
				`${BASEURL}/ViewStudentProfile`,
				{
					Res_Student_Email: userDataT.emailId
				},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			// console.log("StudentData", StudentData);
			if (StudentData) {
				setStudentData(StudentData);
				// console.log("Student", StudentData);
				setLoading2(false);
			}
		};
		fetchStudent();
	};
	//Mentor data fetch function
	const FMentoDataFunction = () => {
		// console.log("weee", userDataT.Name);
		const MentorDataFunction = async () => {
			const MentorData = await axios.post(
				`${BASEURL}/ViewMentorProfile`,
				{
					Res_Mentor_Email: userDataT.emailId
				},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			// console.log("Mentor", MentorData);
			if (MentorData) {
				// console.log("Mentor", MentorData);
				setMentorData(MentorData.data.data);
				const SubmissionData = await axios.post(
					`${BASEURL}/ViewNotes`,
					{
						Res_Group_Name: MentorData.data.data.Mentor_Group_Name,
						Res_TypeOfUser: 'Mentor'
					},
					{
						headers: {
							Authorization: cookies.get('KeyToken')
						}
					}
				);
				if (SubmissionData && MentorData) {
					setSubmissionStatus(SubmissionData.data.data);
					setLoadingR(false);
					setLoading2(false);
				}
			}
		};

		MentorDataFunction();
	};

	const FAdminDataFunction = () => {
		const FetchAdminDataFunction = async () => {
			console.log('userDataT.emailId', userDataT.emailId);
			const fetchAdmin = await axios.post(
				`${BASEURL}/ViewAdminProfile`,
				{
					Res_Admin_EmailId: userDataT.emailId
				},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			if (fetchAdmin) {
				console.log('Adminn888', fetchAdmin);
				setAdminData(fetchAdmin.data.data);
				setLoading2(false);
			}
		};
		FetchAdminDataFunction();
	};
	useEffect(
		() => {
			UserTypeFunction();
		},
		[ loading1, loading2 ]
	);
	const SwitchUserFunction = (TypeOfUser) => {
		console.log('----------', TypeOfUser);
		if (typeOfUser === 'Student') {
			return (
				<Fragment>
					<HamburgerButton2 color={'#fff'} refresher={refresher} setRefresher={setRefresher} />
					<Routes>
						<Route path="/" element={<StudentProfile studentData={studentData} />} />
						<Route path="/latestmeetup" element={<LatestMeetup studentData={studentData} />} />
						<Route
							path="/assignmentsstudents"
							element={<Assignments studentData={studentData} setUploadSelector={setUploadSelector} />}
						/>
						<Route
							path="/notes"
							element={
								<Notes
									studentData={studentData}
									noteSelect={noteSelect}
									setNoteSelect={setNoteSelect}
								/>
							}
						/>
						<Route path="/groupdetails" element={<GroupDetails studentData={studentData} />} />
						<Route path="/quickmessage" element={<QuickMessage studentData={studentData} />} />
						<Route
							path="/viewApprovedNotes"
							element={
								<OutlinedCard
									studentData={studentData}
									noteSelect={noteSelect}
									setNoteSelect={setNoteSelect}
								/>
							}
						/>
						<Route
							path="/assignmentsubmission"
							element={<AssignmentForm studentData={studentData} uploadSelector={uploadSelector} />}
						/>
						<Route path="/profilepage" element={<ProfilePage studentData={studentData} />} />
						<Route path="/previousmeetup" element={<PreviousMeetup studentData={studentData} />} />
						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</Fragment>
			);
		}

		if (typeOfUser === 'Mentor') {
			return (
				<Fragment>
					<HamburgerButton1 color={'#fff'} refresher={refresher} setRefresher={setRefresher} />
					<Routes>
						<Route
							path="/"
							element={
								<MentorProfile
									mentorData={mentorData}
									setMentorData={setMentorData}
									submissionStatus={submissionStatus}
									setSubmissionStatus={setSubmissionStatus}
									loadingR={loadingR}
									setLoadingR={setLoadingR}
								/>
							}
						/>
						<Route path="/addmeeting" element={<AddMeeting mentorData={mentorData} />} />
						<Route
							path="/studentlist"
							element={
								<StudentList mentorData={mentorData} setViewStudentProfile={setViewStudentProfile} />
							}
						/>
						<Route
							path="/ViewStudentProfile"
							element={<ViewMentorStudentProfile viewStudentProfile={viewStudentProfile} />}
						/>
						<Route path="/studentprofile" element={<StudentProfile />} />
						<Route
							path="/notes"
							element={
								<PendingNotes
									mentorData={mentorData}
									typeOfUser={typeOfUser}
									ViewNotesProp={ViewNotesProp}
									setViewNotesProp={setViewNotesProp}
								/>
							}
						/>
						<Route path="/message" element={<Message mentorData={mentorData} />} />
						<Route
							path="/scheduledmeetings"
							element={<ScheduledMeetings mentorData={mentorData} setMentorData={setMentorData} />}
						/>
						<Route path="/approvalnotes" element={<ApprovalNotes typeOfUser={typeOfUser} />} />
						<Route
							path="/studentnotes"
							element={
								<StudentsNotes
									typeOfUser={typeOfUser}
									ViewNotesProp={ViewNotesProp}
									setViewNotesProp={setViewNotesProp}
								/>
							}
						/>
						<Route
							path="/assignments"
							element={
								<MentorAssignment
									mentorData={mentorData}
									// typeOfUser={typeOfUser}
									// ViewNotesProp={ViewNotesProp}
									// setViewNotesProp={setViewNotesProp}
								/>
							}
						/>
						<Route
							path="/viewassignment"
							element={
								<StudentsAssignment
									typeOfUser={typeOfUser}
									ViewNotesProp={ViewNotesProp}
									setViewNotesProp={setViewNotesProp}
								/>
							}
						/>

						<Route path="/approved" element={<ApprovalNotes />} />
						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</Fragment>
			);
		}

		if (typeOfUser === 'Admin') {
			return (
				<Fragment>
					<HamburgerButton3 color={'#fff'} refresher={refresher} setRefresher={setRefresher} />
					<Routes>
						<Route path="/" element={<AdminProfile />} />
						<Route path="/assignStudents" element={<AssignStudent />} />
						<Route path="/mentorprofile" element={<Profile />} />
						<Route path="/assignments" element={<Assignment />} />
						<Route path="/meetings" element={<Meeting />} />
					</Routes>
				</Fragment>
			);
		}
	};
	return (
		<Fragment>
			{loading1 || loading2 ? (
				<div>
					<CircularColor />
					<LogoutLoader refresher={refresher} setRefresher={setRefresher} />
				</div>
			) : (
				<Fragment>{SwitchUserFunction(typeOfUser)}</Fragment>
			)}
		</Fragment>
	);
};

export default WithLogin;
