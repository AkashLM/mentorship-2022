import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as TbIcons from 'react-icons/tb';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
	{
		title: 'Profile',
		path: '/',
		icon: <BsIcons.BsPerson />,
		cName: 'nav-text'
	},
	{
		title: 'Assign Students',
		path: '/assignStudents',
		icon: <TbIcons.TbUserPlus />,
		cName: 'nav-text'
	},
	{
		title: 'Assignments',
		path: '/assignments',
		icon: <MdIcons.MdOutlineAssignmentLate />,
		cName: 'nav-text'
	},
	{
		title: 'Mentor Profile',
		path: '/mentorprofile',
		icon: <MdIcons.MdGroup />,
		cName: 'nav-text'
	},
	{
		title: 'Meetings',
		path: '/meetings',
		icon: <MdIcons.MdMeetingRoom />,
		cName: 'nav-text'
	}
	// {
	// 	title: 'Assignments',
	// 	path: '/assignmentsstudents',
	// 	icon: <MdIcons.MdOutlineAssignmentLate />,
	// 	cName: 'nav-text'
	// },
	// {
	// 	title: 'Notes',
	// 	path: '/notes',
	// 	icon: <TbIcons.TbNotes />,
	// 	cName: 'nav-text'
	// },

	// {
	// 	title: 'Group Details',
	// 	path: '/groupdetails',
	// 	icon: <CgIcons.CgUserList />,
	// 	cName: 'nav-text'
	// },
	// {
	// 	title: 'Notification',
	// 	path: '/quickmessage',
	// 	icon: <TbIcons.TbMessageShare />,
	// 	cName: 'nav-text'
	// }
];
