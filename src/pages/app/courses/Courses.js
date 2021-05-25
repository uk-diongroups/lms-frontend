import Course from 'components/Course';
import { BlockLoader } from 'components/Loaders';
import { DashboardNav } from 'components/Styles';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCourses } from 'redux/actions/courses.action';
import styled from 'styled-components';
import { getLoadingState } from 'utils/functions';

export const Wrapper = styled.div`
	padding: 56px;

	section {
		max-width: 740px;
		width: 100%;
	}
`;

const Courses = ({ courses }) => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCourses());
	}, []);

	console.log(courses);
	const loadingCourses = useSelector(getLoadingState('getCourses'));

	// const courses = [
	// 	{
	// 		img: figma,
	// 		title: 'Learn Figma',
	// 		author: 'Christopher Morgan',
	// 		time: '6h 30min',
	// 		percentage: 0,
	// 		button: 'Start Course',
	// 	},

	// 	{
	// 		img: analog,
	// 		title: 'Analog photography',
	// 		author: 'Gordon Norman',
	// 		time: '3h 15min',
	// 		percentage: 67,
	// 		button: 'Resume',
	// 	},

	// 	{
	// 		img: instagram,
	// 		title: 'Master Instagram',
	// 		author: 'Sophie Gill',
	// 		time: '6h 30min',
	// 		percentage: 99,
	// 		button: 'Resume',
	// 	},

	// 	{
	// 		img: drawing,
	// 		title: 'Basics of drawing',
	// 		author: 'Jean Tate',
	// 		time: '11h 30min',
	// 		percentage: 99,
	// 		button: 'Resume',
	// 	},
	// ];
	return (
		<Wrapper>
			{/* Top section */}
			<DashboardNav className='mb-70'>
				<li className='active'>In progress</li>
				<li>Completed</li>
			</DashboardNav>
			{loadingCourses ? (
				<BlockLoader />
			) : (
				<section>
					{courses.map((course) => (
						<Course course={course} />
					))}
				</section>
			)}
		</Wrapper>
	);
};

export default connect(
	({ courses: { courses } }) => ({
		courses,
	}),
	null,
)(Courses);
