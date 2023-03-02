import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import AssignmentsList from './AssignmentsList';

const Assignment = () => {
	const BASEURL = process.env.REACT_APP_SAMPLE;
	const cookies = new Cookies();
	const [ listofAssignments, setListOfAssignments ] = useState('');
	const [ showListOfMeetings, setShowListOfMeetings ] = useState(false);
	const [ mentorsList, setMentorsList ] = useState({ data: [] });
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `${BASEURL}/ViewMentorList`;

				const response = await axios.post(
					url,
					{},
					{
						headers: {
							Authorization: cookies.get('KeyToken')
						}
					}
				);
				console.log(response.data.data);
				setMentorsList({ data: response.data.data });
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	const fetchAssignmentDetails = async (data) => {
		try {
			const response = await axios.post(
				`${BASEURL}/ViewPendingAssignmentByMentor`,
				{
					Res_Group_Name: data.Mentor_Group_Name
				},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			setListOfAssignments({ data: response.data });
		} catch (error) {
			console.log(error);
		}
	};
	const handleShowMeetingsClose = () => {
		setShowListOfMeetings(false);
	};
	return (
		<div
			className="p-4"
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignContent: 'center',
				gap: 10
			}}
		>
			{mentorsList.data.map((element) => {
				return (
					<div key={element._id} class="counterCard">
						<div class="header">
							<div class="img-box img-box2">
								<span />
							</div>
							<h1 class="title">{element.Mentor_Group_Name}</h1>
							<h2 style={{ color: 'white' }}>{element.Mentor_Name}</h2>
						</div>
						<div class="content">
							<button
								onClick={async () => {
									await fetchAssignmentDetails(element);
									setShowListOfMeetings(true);
								}}
								className="btn-link"
							>
								Show Assignments
							</button>
						</div>
					</div>
				);
			})}
			<Modal
				size="lg"
				show={showListOfMeetings}
				onHide={handleShowMeetingsClose}
				backdrop="static"
				keyboard={false}
				supportedorientations={[ 'portrait', 'landscape' ]}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Mentees</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AssignmentsList list={listofAssignments} closeModel={handleShowMeetingsClose} />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Assignment;
