import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSmall, Flex, NormalFont, H2, H1 } from 'components/Styles';
import styled from 'styled-components';
import thumbnail from 'assets/img/thumbnail.png';
import bookmark from 'assets/img/bookmark.svg';
import time from 'assets/img/time.svg';
import learningTime from 'assets/img/learning-time.svg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCourse } from 'redux/actions/courses.action';
import { getLoadingState } from 'utils/functions';
import Module from './Module';
import { BlockLoader } from 'components/Loaders';

const Wrapper = styled.div`
	padding-top: 20px;
	padding-left: 25px;
	padding-right: 33px;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin: auto;
`;

const SideA = styled.div`
	width: 50%;
	img.background {
		height: 119px;
		width: 133px;
		border-radius: 5px;
	}
`;

const About = styled.div`
	display: block;
	margin-top: 20px;
`;

const SimilarCourses = styled.div`
	width: 30%;
`;

const Small = styled.p`
	font-size: 0.79rem;
	margin-bottom: 25px;
	margin-top: 5px;
	line-height: 180%;
	letter-spacing: 0.5px;
	color: #6a7588;
`;

const H3 = styled.h3`
	font-weight: 600;
	font-family: 'GTWalsheimPro';
	margin-top: 33px;
	margin-bottom: 20px;
`;

const Syllabus = styled.div``;

const IndividualSyllabus = styled.div`
	width: 95%;
	display: flex;
	margin: auto;
	border-top: 1px solid rgba(0, 0, 0, 0.05);
	padding-top: 5%;
`;

const Week = styled.div`
	p {
		font-size: 2rem;
	}
	margin-right: 10%;
`;

const CourseDetails = ({ match: { params }, course }) => {
	const { id } = params;

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCourse(id));
	}, []);

	console.log({ course });

	const loadingCourse = useSelector(getLoadingState('getCourse'));

	return loadingCourse ? (
		<BlockLoader />
	) : (
		<Wrapper>
			<TopContainer>
				<SideA>
					<div style={{ display: 'flex' }}>
						<img src={course?.background_image} alt='' className='background' />
						<div style={{ marginLeft: '10px' }}>
							<H2 style={{ marginBottom: '0' }}>Advanced Neurobiology</H2>
							<Small>{course?.author}</Small>
							<Flex>
								<ButtonSmall style={{ width: '120px' }}>Enroll</ButtonSmall>
								<img src={bookmark} />
								<img src={time} />
							</Flex>
						</div>
					</div>
					<About>
						<H3>About this Course</H3>
						<Small>
							{course?.description}
							<br />
							<br />
							<Link style={{ color: '#0065FF' }}> See more ....</Link>
						</Small>
					</About>
				</SideA>

				<SimilarCourses>
					<NormalFont>Similar Courses</NormalFont>
				</SimilarCourses>
			</TopContainer>

			<div
				style={{
					borderTop: '1px solid rgba(0, 0, 0, 0.05)',
					padding: '10px',
					textAlign: 'center',
					width: '95%',
					margin: 'auto',
				}}
			>
				<NormalFont style={{ color: '#061938' }}>Syllabus - What you will learn from this course</NormalFont>
			</div>

			<Syllabus>
				{course?.course_modules?.length ? (
					course?.course_modules?.map((module, i) => <Module module={module} index={i} />)
				) : (
					<p>No module added yet</p>
				)}
			</Syllabus>

			<div
				style={{
					borderTop: '1px solid rgba(0, 0, 0, 0.05)',
					borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
					padding: '10px',
					textAlign: 'center',
					width: '95%',
					margin: 'auto',
				}}
			>
				<NormalFont style={{ color: '#061938' }}>Instructor</NormalFont>
			</div>

			<Syllabus>
				<IndividualSyllabus>
					<div style={{ marginRight: '15px' }}>
						<img
							src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							style={{ width: '60px', borderRadius: '84px', height: '60px' }}
						/>
					</div>

					<div>
						<h5 style={{ fontWeight: '600', marginTop: '10%' }}>Dr {course?.author}</h5>
						<Small>Specialist</Small>
					</div>
				</IndividualSyllabus>
			</Syllabus>
		</Wrapper>
	);
};

export default connect(({ courses: { course } }) => ({ course }), null)(CourseDetails);
