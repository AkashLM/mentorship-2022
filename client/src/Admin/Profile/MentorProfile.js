import { useEffect, useState, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';
import defaultMentor from '../../assets/defaultmentorlogo.png';
import axios from 'axios';
import Cookies from 'universal-cookie';

import AjayKavade from '../../assets/MentorProfileImages/AjayKavade.jpg';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AmodPanchhapurkar from '../../assets/MentorProfileImages/AmodPanchhapurkar.jpg';
import AshfakShaikh from '../../assets/MentorProfileImages/AshfakShaikh.jpg';
import HrishikeshDhande from '../../assets/MentorProfileImages/HrishikeshDhande.jpg';
import JitendraSardesai from '../../assets/MentorProfileImages/JitendraSardesai.jpg';
import KaustubhKulkarni from '../../assets/MentorProfileImages/KaustubhKulkarni.jpg';
import KishoreKunjeer from '../../assets/MentorProfileImages/KishoreKunjeer.jpg';
import KrishnatMolawade from '../../assets/MentorProfileImages/KrishnatMolawade.jpg';
import NileshHonrao from '../../assets/MentorProfileImages/NileshHonrao.jpg';
import NileshVartak from '../../assets/MentorProfileImages/NileshVartak.jpg';
import PrashantDahibhate from '../../assets/MentorProfileImages/PrashantDahibhate.jpg';
import RahulLale from '../../assets/MentorProfileImages/RahulLale.jpg';
import SudhirPatil from '../../assets/MentorProfileImages/SudhirPatil.jpg';
const MentorProfile = (props) => {
	const BASEURL = process.env.REACT_APP_SAMPLE;
	const cookies = new Cookies();
	const [ customMentorPic, setCustomeMentorPic ] = useState('');
	const [ GroupDataStudent, setGroupDataStudent ] = useState([]);
	useEffect(() => {
		const decideImage = async () => {
			if (props.mentor.Mentor_Name === 'Ajay Arun Kavade') {
				setCustomeMentorPic(AjayKavade);
			} else if (props.mentor.Mentor_Name === 'Amod Pradeep Panchhapurkar') {
				setCustomeMentorPic(AmodPanchhapurkar);
			} else if (props.mentor.Mentor_Name === 'Ashfak Shaikh') {
				setCustomeMentorPic(AshfakShaikh);
			} else if (props.mentor.Mentor_Name === 'Hrishikesh Jayant Dhande') {
				setCustomeMentorPic(HrishikeshDhande);
			} else if (props.mentor.Mentor_Name === 'Krishnat Narayan Molawade') {
				setCustomeMentorPic(KrishnatMolawade);
			} else if (props.mentor.Mentor_Name === 'Kishore Kunjeer') {
				setCustomeMentorPic(KishoreKunjeer);
			} else if (props.mentor.Mentor_Name === 'Sudhir Patil') {
				setCustomeMentorPic(SudhirPatil);
			} else if (props.mentor.Mentor_Name === 'Kaustubh Kulkarni') {
				setCustomeMentorPic(KaustubhKulkarni);
			} else if (props.mentor.Mentor_Name === 'Jitendra Sardesai') {
				setCustomeMentorPic(JitendraSardesai);
			} else if (props.mentor.Mentor_Name === 'Prashant V Dahibhate') {
				setCustomeMentorPic(PrashantDahibhate);
			} else if (props.mentor.Mentor_Name === 'Nilesh Vartak') {
				setCustomeMentorPic(NileshVartak);
			} else if (props.mentor.Mentor_Name === 'Rahul D Lale') {
				setCustomeMentorPic(RahulLale);
			} else if (props.mentor.Mentor_Name === 'Nilesh Guruling Honrao') {
				setCustomeMentorPic(NileshHonrao);
			} else {
				setCustomeMentorPic(defaultMentor);
			}
			const ListData = await axios.post(
				`${BASEURL}/ViewGroupList`,
				{
					Res_Group_Name: props.mentor.Mentor_Group_Name
				},
				{
					headers: {
						Authorization: cookies.get('KeyToken')
					}
				}
			);
			console.log(ListData.data.StudentData);
			setGroupDataStudent(ListData.data.StudentData);
		};

		decideImage();
	}, []);
	const gridOptions = {
		columnDefs: [
			{
				field: 'Student_Name',
				width: 150,
				sortable: true,
				filter: true,
				resizable: true,
				headerName: 'Name'
			},
			{
				field: 'Student_EmailId',
				width: 200,
				sortable: true,
				filter: true,
				resizable: true,
				headerName: 'Email'
			},
			{
				field: 'Student_Contact_Number',
				width: 220,
				sortable: true,
				filter: true,
				resizable: true,
				headerName: 'Phone'
			}
		]
	};

	return (
		<div>
			<Fragment>
				<div className="detailsContainer">
					<div class="cardStudentMentor" data-state="#about">
						<div class="cardStudentMentor-header">
							<div
								class="cardStudentMentor-cover"
								style={{ backgroundImage: `url(${customMentorPic})` }}
							/>
							<img class="cardStudentMentor-avatar" src={customMentorPic} alt="avatar" />
							<h1 class="cardStudentMentor-fullname">{props.mentor.Mentor_Name}</h1>
							<h2 class="cardStudentMentor-jobtitle">{props.mentor.Mentor_Position}</h2>
							<h2 class="cardStudentMentor-organization">{props.mentor.Mentor_Organization}</h2>
						</div>
						{/* <div class="cardStudentMentor-main"> */}
						<div class="cardStudentMentor-section" id="about">
							<div class="cardStudentMentor-content">
								<div class="cardStudentMentor-subtitle">ABOUT</div>
								<p class="cardStudentMentor-desc">{props.mentor.Mentor_About}</p>
								<div className="studentMentorFooter">
									<div className="GroupName">
										Group Name: <span>&nbsp; {props.mentor.Mentor_Group_Name}</span>
									</div>

									<div className="mentorSocial">
										<div class="card-social">
											<a href={`tel: ${props.mentor.Mentor_Contact_Number}`} target="_blank">
												<svg
													version="1.0"
													xmlns="http://www.w3.org/2000/svg"
													width="48.000000pt"
													height="48.000000pt"
													viewBox="0 0 48.000000 48.000000"
													preserveAspectRatio="xMidYMid meet"
												>
													<g
														transform="translate(0.000000,0.000000) scale(0.100000,-0.100000)"
														stroke="none"
													>
														<path d="M150 427 c-81 -41 -18 -264 99 -355 51 -38 83 -41 116 -7 32 31 31
                                    53 -3 94 -27 33 -30 34 -62 23 -30 -11 -36 -10 -56 9 -13 12 -29 37 -35 56
                                              -10 32 -9 37 15 62 31 32 33 55 6 99 -21 34 -40 39 -80 19z" />
													</g>
												</svg>
												{/* twitter svg */}
												{/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                          </svg> */}
											</a>

											<a href={`mailto:${props.mentor.Mentor_EmailId}`} target="_blank">
												<svg viewBox="-20 0 135 95" xmlns="http://www.w3.org/2000/svg">
													<path d="M 90.929 94.818 L 3.877 94.818 C -9.246 96.046 -21.665 84.577 -20.393 72.475 L -19.924 24.529 C -21.412 13.275 -11.164 -0.103 3.528 0.697 L 90.7 0.179 C 106.366 -0.659 117.929 12.625 116.254 23.826 L 115.785 71.772 C 117.11 85.018 103.901 97.235 90.929 94.818 Z M 3.87 11.44 C -4.887 10.759 -9.494 15.445 -9.211 23.675 L -9.068 71.19 C -9.464 80.009 -4.529 84.237 4.106 83.542 L 90.7 83.55 C 99.92 84.353 104.736 80.559 104.315 72.475 C 104.244 72.231 105.658 23.075 104.689 24.529 C 104.689 16.582 99.23 10.789 90.814 11.129 L 3.87 11.44 Z" />
													<path d="M 51.547 64.642 C 65.665 51.176 81.092 36.865 95.208 23.398 C 97.842 20.884 87.124 11.303 84.491 13.815 C 70.376 27.28 56.915 40.751 42.799 54.218 C 40.164 56.731 48.916 67.153 51.547 64.642 Z" />
													<path d="M 98.689 66.818 C 89.295 58.096 79.804 50.115 70.412 41.393 C 67.747 38.92 57.81 49.012 60.481 51.493 C 69.873 60.215 80.016 68.559 89.408 77.281 C 92.072 79.754 101.358 69.296 98.689 66.818 Z" />
													<path d="M 8.797 76.241 C 18.191 67.519 28.059 58.922 37.452 50.201 C 40.122 47.722 30.069 38.088 27.404 40.56 C 18.011 49.282 8.869 57.614 -0.524 66.334 C -3.195 68.814 6.134 78.715 8.797 76.241 Z" />
													<path d="M 12.532 15.036 C 26.596 28.502 41.964 42.813 56.026 56.28 C 58.65 58.794 47.973 68.375 45.35 65.863 C 31.289 52.398 17.879 38.927 3.817 25.46 C 1.192 22.947 9.911 12.525 12.532 15.036 Z" />
												</svg>
											</a>

											<a href={`${props.mentor.Mentor_LinkedIn}`} target="_blank">
												<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* </div> */}
					</div>
					<div>
						<div className="containerStudentList">
							<h2 className="pageHeading text-center ">
								Group
								<span style={{ color: 'blue' }}> {props.mentor.Mentor_Group_Name}</span> Details
							</h2>
							<div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
								<AgGridReact gridOptions={gridOptions} rowData={GroupDataStudent} />
							</div>
						</div>
					</div>
				</div>
			</Fragment>
			<Button className="mt-3" onClick={props.closeModel}>
				<span>Close</span>
			</Button>
		</div>
	);
};

export default MentorProfile;
