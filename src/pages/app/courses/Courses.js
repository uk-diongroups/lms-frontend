import Course from 'components/Course';
import { BlockLoader } from 'components/Loaders';
import { DashboardNav } from 'components/Styles';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCourses } from 'redux/actions/courses.action';
import styled from 'styled-components';
import { getLoadingState } from 'utils/functions';
import Pagination from 'components/Pagination';

export const Wrapper = styled.div`
	padding: 56px;

	section {
		max-width: 740px;
		width: 100%;
	}
`;

const Courses = ({ courses, totalCourses }) => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCourses());
	}, []);

	const loadingCourses = useSelector(getLoadingState('getCourses'));

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
			{Boolean(totalCourses) && <Pagination count={totalCourses} getFunction={getCourses} pageSize={7} />}
		</Wrapper>
	);
};

export default connect(
	({ courses: { courses, totalCourses } }) => ({
		courses,
		totalCourses,
	}),
	null,
)(Courses);
