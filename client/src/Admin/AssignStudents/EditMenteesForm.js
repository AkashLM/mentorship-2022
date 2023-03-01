import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container } from 'react-bootstrap';

const EditMenteesForm = (props) => {
	const [ studentsList, setStudentsList ] = useState('');
	const BASEURL = process.env.REACT_APP_SAMPLE;
	const columns = [
		{ field: 'Student_First_Name', headerName: 'First name', width: 130 },
		{ field: 'Student_Middle_Name', headerName: 'Middle name', width: 130 },
		{ field: 'Student_Last_Name', headerName: 'Last name', width: 130 },
		{ field: 'Student_EmailId', headerName: 'Email', width: 130 }
	];
	const cookies = new Cookies();
	const assignHandler = async () => {
		try {
			if (studentsList.length > 0) {
				const url = `${BASEURL}/DeleteMentees`;

				const resp = await axios.post(
					url,
					{
						mentees: studentsList
					},
					{
						headers: {
							Authorization: cookies.get('KeyToken')
						}
					}
				);
				if (resp.status === 200) {
					props.closeModel();
					props.sendUpdate(true);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className="m-0 p-0">
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					getRowId={(row) => {
						return row._id;
					}}
					rows={props.list.data.menteesList}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[ 5 ]}
					onSelectionModelChange={(item) => {
						setStudentsList(item);
					}}
					checkboxSelection
				/>
			</div>
			<div>
				<br />
				<Button onClick={assignHandler}>Delete </Button>
			</div>
		</Container>
	);
};

export default EditMenteesForm;
