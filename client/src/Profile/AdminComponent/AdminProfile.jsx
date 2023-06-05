import './AdminProfile.css';
import { Fragment } from 'react';
const AdminProfile = () => {
	return (
		<Fragment>
			<section class="section about-section gray-bg" id="about">
				<div class="container">
					<div class="row align-items-center flex-row-reverse">
						<div class="col-lg-6">
							<div class="about-text go-to">
								<h3 class="dark-color">Admin Account</h3>

								<p>
									This Account belongs to the Admin of Industrial Mentorship Program Of Keystone
									School Of Engineering
								</p>
								<div class="row about-list">
									<div class="col-md-6" />
									<div class="col-md-6" />
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="about-avatar">
								<img src="https://bootdey.com/img/Content/avatar/avatar3.png" title="" alt="" />
							</div>
						</div>
					</div>
					<div class="counter">
						<div class="row">
							<div class="col-6 col-lg-3">
								<div class="count-data text-center">
									<h6 class="count h2" data-to="500" data-speed="500">
										100
									</h6>
									<p class="m-0px font-w-600">Happy Clients</p>
								</div>
							</div>
							<div class="col-6 col-lg-3">
								<div class="count-data text-center">
									<h6 class="count h2" data-to="150" data-speed="150">
										10
									</h6>
									<p class="m-0px font-w-600">Project Completed</p>
								</div>
							</div>
							<div class="col-6 col-lg-3">
								<div class="count-data text-center">
									<h6 class="count h2" data-to="850" data-speed="850">
										100
									</h6>
									<p class="m-0px font-w-600">Photo Capture</p>
								</div>
							</div>
							<div class="col-6 col-lg-3">
								<div class="count-data text-center">
									<h6 class="count h2" data-to="190" data-speed="190">
										190
									</h6>
									<p class="m-0px font-w-600">Telephonic Talk</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default AdminProfile;
