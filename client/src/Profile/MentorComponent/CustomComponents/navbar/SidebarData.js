import React from 'react';
import * as TbIcons from 'react-icons/tb';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as RxIcons from "react-icons/rx";


export const SidebarData = [
  
  {
    title: 'Profile',
    path: '/',
    icon: <BsIcons.BsPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Add Meeting',
    path: '/addmeeting',
    icon: <MdIcons.MdMoreTime />,
    cName: 'nav-text'
  },
  {
    title: 'Meetings',
    path: '/scheduledmeetings',
    icon: <RxIcons.RxCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <TbIcons.TbNotes />,
    cName: 'nav-text'
  },
  {
    title: 'Assignments',
    path: '/assignments',
    icon: <MdIcons.MdOutlineAssignmentLate />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/studentlist',
    icon: <CgIcons.CgUserList />,
    cName: 'nav-text'
  },
  {
    title: 'Quick Message',
    path: '/message',
    icon: <TbIcons.TbMessageShare />,
    cName: 'nav-text'
  }
];
