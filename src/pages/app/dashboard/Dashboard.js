import React from 'react';
import styled from 'styled-components';
import cheers from 'assets/img/cheers.png';
import { Grid, GridEqual, H1, Flex, DashboardNav } from 'components/Styles';
// import icons from 'assets/icons/icon-collections.svg';
import icons from 'assets/img/new_saly.svg';
import Course from 'components/Course';
import project from 'assets/img/project.png';
import figma from 'assets/img/figma.svg';
import analog from 'assets/img/analog.svg';
import instagram from 'assets/img/instagram.svg';
import drawing from 'assets/img/drawing.svg';
import frontarrow from 'assets/img/frontarrow.svg';
import backarrow from 'assets/img/backarrow.svg';
import graph from 'assets/img/graph.png';

const Wrapper = styled.div`
	padding-top: 41px;
	padding-left: 33px;
	padding-right: 33px;
`;

const TopSection = styled.div`
	margin-bottom: 40px;
	& > div:nth-child(1) {
		padding-top: 55px;
		margin-bottom: 24px;
		padding-left: 25px;
		background: #f8fafb;
		position: relative;
		height: 185px;
		border-radius: 14px;
		display: flex;
		justify-content: space-between;
		img {
			width: 102px;
			height: 53px;
			position: absolute;
			top: 0;
			right: 0;
		}
		h2 {
			color: #242582;
			font-weight: bold;
			font-size: 36px;
			font-family: GTWalsheimPro;
		}
		p {
			font-family: GTWalsheimProRegular;
		}
		svg {
			margin-top: -73px;
		}
	}
`;

const CourseProgress = styled.div`
	& .progress_block {
		background: #f8fafb;
		border-radius: 14px;
		margin-bottom: 23px;
		display: flex;
		align-items: center;
		justify-content: center;
		span {
			display: block;
			color: #f64c71;
			font-size: 2.5rem;
			margin-right: 11px;
			padding: 16px;
			font-weight: bold;
		}
	}
`;

const Courses = styled.div``;

const Graph = styled.div`
	img {
		width: 100%;
	}
`;

export const CurrentlyLearning = styled.div`
	h3{
		font-weight: 500;
		font-size: 24px;
		line-height: 33px;
		color: #242582;
		margin-bottom: 20px;
		margin-top: 50px;
	}

	& .learning_img {
		img{
			width: 100%;
			border-radius: 10px 10px 0px 0px;
			height: 190px;	
		}
	}

	& .extra_details{
		border: 3px solid #F6F7F8;
    	padding: 8px;
		h4{
			font-weight: 600;
		}
		small{
			color: #6A7588;
			font-weight: normal;
			font-size: 12px;
			line-height: 18px;
			letter-spacing: 0.5px;			
		}
		button{
			justify-content: center;
			align-items: center;
			padding: 16px 31px;
			height: 48px;
			left: 0px;
			right: 58px;
			top: 99px;
			background: #0BA759;
			border-radius: 8px;
			border: none;
			color: white;
			font-size: 16px;
		}
	}
`

const courses = [
	{
		img: figma,
		title: 'Learn Figma',
		author: 'Christopher Morgan',
		time: '6h 30min',
		percentage: 0,
		button: 'Start Course',
	},

	{
		img: analog,
		title: 'Analog photography',
		author: 'Gordon Norman',
		time: '3h 15min',
		percentage: 67,
		button: 'Resume',
	},

	{
		img: instagram,
		title: 'Master Instagram',
		author: 'Sophie Gill',
		time: '6h 30min',
		percentage: 99,
		button: 'Resume',
	},

	{
		img: drawing,
		title: 'Basics of drawing',
		author: 'Jean Tate',
		time: '11h 30min',
		percentage: 99,
		button: 'Resume',
	},
];

const Dashboard = () => {
	return (
		<Wrapper>
			<Grid columns={['50%', '1fr']} gap={'45px'}>
				{/* Top section */}
				<TopSection>
					<div>
						<div>
							<h2>Hello Nimi</h2>
							<p>It’s good to see you again.</p>
						</div>

						<div>
							<img src={icons} style={{width: '100%',height: 'fit-content',left:'25%'}}/> 
						</div>

						{/* <svg>
							<use xlinkHref={`${icons}#`} />
						</svg>
						<img src={cheers} /> */}
					</div>
					{/* <Grid columns={['500px', '1fr']} gap={'23px'}>
						<Course
							course={{
								img: project,
								title: 'Project management ',
								author: 'Gloria Martins',
								percentage: 83,
								button: 'Continue',
							}}
						></Course>
						<Flex>
							<img className='mr-16' src={backarrow} alt='backfarrow' />
							<img src={frontarrow} alt='frontarrow' />
						</Flex>
					</Grid> */}
				</TopSection>

				{/*my courses */}
				<CourseProgress>
					<GridEqual count={2} gap={'23px'}>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Enrolled
							</p>
						</div>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Completed
							</p>
						</div>
					</GridEqual>
					<GridEqual count={2} gap={'23px'}>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Assessment
							</p>
						</div>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Pending <br /> Assessment
							</p>
						</div>
					</GridEqual>
				</CourseProgress>
			</Grid>

			<Grid>
				<CurrentlyLearning>
					<h3>CURRENTLY LEARNING</h3>
					<GridEqual count={4} gap={'30px'}>
						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>
					</GridEqual>
				</CurrentlyLearning>

				<CurrentlyLearning>
					<h3>RECOMMENDED FOR YOU</h3>
					<GridEqual count={4} gap={'30px'}>
						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>

						<div className="learning_progress">
							<div className="learning_img">
								<img src="https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
							</div>
							<div className="extra_details">
								<h4>Advanced Neurobiology</h4>
								<small>ProfessorYan Zhang</small>
								<br />
								<br />
								<small>1hr 20m of 2hr 45m</small>
								<br />
								<br />
								<button className="btn-primary">Resume</button>
							</div>
						</div>
					</GridEqual>
				</CurrentlyLearning>
			</Grid>

			{/* <Grid columns={['1.3fr', '1fr']} gap={'45px'}>
				<Courses>
					<H1>My courses</H1>
					<DashboardNav>
						<li className='active'>All courses</li>
						<li>Newest courses</li>
					</DashboardNav>
					{courses.map((course) => (
						<Course course={course} />
					))}
				</Courses>

				<Graph>
					<H1>Your statistics</H1>
					<Flex className='mb-15'>
						<h4>Learning Hours</h4>
						<p>Weekly</p>
					</Flex>

					<img src={graph} />
				</Graph>
			</Grid> */}
		</Wrapper>
	);
};

export default Dashboard;
