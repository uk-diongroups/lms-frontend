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
import { Grid } from 'components/Styles';

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
		<BlockLoader marginTop='60vh' />
	) : (
		<Wrapper className='px-8'>
			<Grid columns={['2fr', '1fr']} gap='30px'>
				<div className=''>
					<div className='agile'>
						<img src={Start} alt='' />
						<div className='agile_management'>
							<div>
								<h4>{course?.title}</h4>
								<small>by {course?.author}</small>
							</div>
							{/* <div className='d-flex justify-content-between btn_start'>
								<small className='mt-4 mr-auto'>97 of your colleagues are taking this course</small>
							</div> */}
						</div>
					</div>
					<DashboardNav className=' flex  border-b-grey pt-8'>
						{tabsArray.map((tab) => (
							<li
								key={tab.name}
								onClick={() => setTabs(tab.name)}
								className={tabs === tab.name ? 'active uppercase' : 'uppercase'}
							>
								{tab.name}
							</li>
						))}
					</DashboardNav>
					{tabs === 'Description' && <Description course={course} />}
					{tabs === 'Syllabus' && <Syllabus courseId={id} />}
				</div>

				<div className='author'>
					<div className='flex'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
							alt=''
							className='mr-4'
						/>
						<div className='ml-3'>
							<h5 className='text-base black-drop mb-2 font-bold'>{course?.author}</h5>
							<h5 className='text-base grey-text'>Specialist</h5>
						</div>
					</div>

					<p>
						I&apos;m Anthony Alampi, an interactive designer and developer living in Austin, Texas. I&apos;m
						a former professional video game developer and current web design company owner with over 15
						years of...
					</p>

					<div className='mt-12'>
						<h6 className='mb-8 black-drop text-lg font-bold'>Course Info</h6>
						<div>
							<p className='flex justify-between text-base'>
								<span>Duration:</span> <span>15:23m</span>
							</p>
							<p className='flex justify-between text-base'>
								<span>Released:</span> <span>21 April, 2021</span>
							</p>
						</div>
					</div>
				</div>
			</Grid>
		</Wrapper>
	);
};

export default connect(
	({ courses: { course } }) => ({
		course,
	}),
	null,
)(CourseDetail);

{
	/* <div className='similar_course mt-5'>
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
</div>; */
}
