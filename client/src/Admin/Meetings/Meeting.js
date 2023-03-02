import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import MeetingsList from './MeetingsList';
const Meeting = () => {
	const BASEURL = process.env.REACT_APP_SAMPLE;
	const cookies = new Cookies();
	const [ listOfMeetings, setListOfMeetings ] = useState('');
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
	const fetchMeetingDetails = async (data) => {
		try {
			const url = `${BASEURL}/GetMeetingDetailsOnMentorName/` + data.Mentor_Group_Name;

			const response = await axios.get(
				url,
				{},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			setListOfMeetings({ data: response.data });
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
									await fetchMeetingDetails(element);
									setShowListOfMeetings(true);
								}}
								className="btn-link"
							>
								Show Meetings
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
					<Modal.Title>List Of Meetings</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<MeetingsList list={listOfMeetings} closeModel={handleShowMeetingsClose} />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Meeting;
