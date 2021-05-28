import { DashboardNav } from 'components/Styles';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from './Courses';
import Start from '../../../assets/start.png';
import Description from './Description';
import Syllabus from './Syllabus';
import { getCourse } from 'redux/actions/courses.action';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getLoadingState } from 'utils/functions';
import { BlockLoader } from 'components/Loaders';

const Management = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 15px;
	.agile {
		color: white;
		.agile_management {
			position: absolute;
			top: 25%;
			padding-left: 4%;
			padding-right: 4%;
		}
	}
	.btn_start {
		display: flex;
		justify-content: space-between;
		margin-top: 32%;
		button {
			padding: 10px 35px;
			height: 45px;
			background: #0ba759;
			border-radius: 8px;
			color: white;
		}
	}
	.author {
		background: #f8f9fb;
		border-radius: 10px;
		padding: 1rem;
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}
		p {
			font-weight: normal;
			font-size: 13px;
			line-height: 180%;
			letter-spacing: 0.5px;
			color: #333333;
			margin: 25px 0px;
		}
	}
	.similar_course {
		img {
			width: 60px;
			height: 60px;
			border-radius: 6px;
		}
	}
`;

const CourseDetail = ({ match, course }) => {
	const { id } = match.params;
	const dispatch = useDispatch();

	const loadingCourse = useSelector(getLoadingState('getCourse'));

	const [tabs, setTabs] = useState('Syllabus');
	const tabsArray = [
		{
			name: 'Syllabus',
		},
		{
			name: 'Description',
		},
	];
	console.log({ course });

	React.useEffect(() => {
		dispatch(getCourse(id));
	}, []);

	return loadingCourse ? (
		<BlockLoader />
	) : (
		<Wrapper style={{ padding: '30px' }}>
			<DashboardNav className='mb-70'>
				<Management>
					<div>
						<div className='agile'>
							<img src={Start} alt='' />
							<div className='agile_management'>
								<div>
									<h4>{course?.title}</h4>
									<small>by Gloria Abdul</small>
								</div>
								<div className='d-flex justify-content-between btn_start'>
									<small className='mt-4 mr-auto'>97 of your colleagues are taking this course</small>
									<button className='btn btn-success'>Start Course</button>
								</div>
							</div>
						</div>
						<div className='d-flex mt-3'>
							{tabsArray.map((tab) => (
								<li
									key={tab.name}
									onClick={() => setTabs(tab.name)}
									className={tabs === tab.name ? 'active' : ''}
								>
									{tab.name}
								</li>
							))}
						</div>
						{tabs === 'Description' && <Description />}
						{tabs === 'Syllabus' && <Syllabus />}
					</div>

					<div>
						<div className='author'>
							<div className='d-flex'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
									alt=''
								/>
								<div className='ml-3'>
									<h6>ProfessorYan Zhang</h6>
									<small>Specialist</small>
								</div>
							</div>

							<p>
								I'm Anthony Alampi, an interactive designer and developer living in Austin, Texas. I'm a
								former professional video game developer and current web design company owner with over
								15 years of...
							</p>

							<div>
								<h6>Course Info</h6>
								<div>
									<p className='mb-0'>
										Duration: <span>15:23m</span>
									</p>
									<p>
										Released: <span>21 April, 2021</span>
									</p>
								</div>
							</div>
						</div>

						<div className='similar_course mt-5'>
							<h6>Similar Courses</h6>
							<div>
								<div className='d-flex mt-3'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
										alt=''
									/>
									<div className='ml-3 mt-2'>
										<h6>ProfessorYan Zhang</h6>
										<small>Specialist</small>
									</div>
								</div>

								<div className='d-flex mt-3'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
										alt=''
									/>
									<div className='ml-3 mt-2'>
										<h6>ProfessorYan Zhang</h6>
										<small>Specialist</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Management>
			</DashboardNav>
		</Wrapper>
	);
};

export default connect(
	({ courses: { course } }) => ({
		course,
	}),
	null,
)(CourseDetail);
