import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
const AssignmentsList = (props) => {
	useEffect(() => {
		console.log(props.list.data.data1);
	}, []);

	return (
		<Container>
			<h1>Unapproved Assignments</h1>
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
				{props.list.data.data1.map((element) => {
					return (
						<Card key={element._id} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{element.Topic_Name}</Card.Title>
								<Card.Text>{'Submitted By ' + element.Student_Name}</Card.Text>
								{element.Link && (
									<Card.Text>
										<a rel="noreferrer" target="_blank" href={element.Link}>
											View Assignment
										</a>
									</Card.Text>
								)}
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<h1 className="mt-3">Approved Assignments</h1>
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
				{props.list.data.data2.map((element) => {
					return (
						<Card key={element._id} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{element.Topic_Name}</Card.Title>
								<Card.Text>{'Submitted By ' + element.Student_Name}</Card.Text>
								{element.Link && (
									<Card.Text>
										<a rel="noreferrer" target="_blank" href={element.Link}>
											View Assignment
										</a>
									</Card.Text>
								)}
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<Button className="mt-3" onClick={props.closeModel}>
				Close
			</Button>
		</Container>
	);
};

export default AssignmentsList;
