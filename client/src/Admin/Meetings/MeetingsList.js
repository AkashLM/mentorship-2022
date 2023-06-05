import { Button, Card } from 'react-bootstrap';
import { useEffect } from 'react';
const MeetingsList = (props) => {
	useEffect(() => {
		const fetch = () => {
			console.log(props.list);
		};
		fetch();
	}, []);

	return (
		<div>
			<h1>Pending Meetings</h1>
			<div
				className="mt-3"
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					gap: 10
				}}
			>
				{props.list.data.pendingMeetings.map((element) => {
					return (
						<Card key={element._id} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{element.TopicName}</Card.Title>
								<Card.Text>{element.Description}</Card.Text>
								<Card.Text>
									<a target="_blank" href={element.MinutesOfMeeting}>
										View M.O.M
									</a>
								</Card.Text>
								<Card.Text>{element.Location + ' at ' + element.Time}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<h1 className="mt-3">Completed Meetings</h1>
			<div
				className="mt-3"
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					gap: 10
				}}
			>
				{props.list.data.completed.map((element) => {
					return (
						<Card key={element._id} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{element.TopicName}</Card.Title>
								<Card.Text>{element.Description}</Card.Text>
								<Card.Text>
									<a target="_blank" href={element.MinutesOfMeeting}>
										View M.O.M
									</a>
								</Card.Text>
								<Card.Text>{element.Location + ' at ' + element.Time}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<h1 className="mt-3">Approved Meetings</h1>
			<div
				className="mt-3"
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					gap: 10
				}}
			>
				{props.list.data.approvedMeetings.map((element) => {
					return (
						<Card key={element._id} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{element.TopicName}</Card.Title>
								<Card.Text>{element.Description}</Card.Text>
								<Card.Text>
									<a target="_blank" href={element.MinutesOfMeeting}>
										View M.O.M
									</a>
								</Card.Text>
								<Card.Text>{element.Location + ' at ' + element.Time}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<Button className="mt-3" onClick={props.closeModel}>
				Close
			</Button>
		</div>
	);
};

export default MeetingsList;
