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
		title: 'Latest Meeting',
		path: '/latestmeetup',
		icon: <TbIcons.TbCalendarTime />,
		cName: 'nav-text'
	},
	{
		title: 'Assignments',
		path: '/assignmentsstudents',
		icon: <MdIcons.MdOutlineAssignmentLate />,
		cName: 'nav-text'
	},
	{
		title: 'Notes',
		path: '/notes',
		icon: <TbIcons.TbNotes />,
		cName: 'nav-text'
	},

	{
		title: 'Group Details',
		path: '/groupdetails',
		icon: <CgIcons.CgUserList />,
		cName: 'nav-text'
	},
	{
		title: 'Notification',
		path: '/quickmessage',
		icon: <TbIcons.TbMessageShare />,
		cName: 'nav-text'
	}
];
