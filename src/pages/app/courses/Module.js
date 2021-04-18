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

export default ({ module, index }) => {
	return (
		<IndividualSyllabus>
			<Week>
				<h4>Module</h4>
				<br />
				<p>{index + 1}</p>
			</Week>

			<div>
				<div style={{ display: 'flex' }}>
					<img src={learningTime} alt='icon' width='25px' />
					<Small
						style={{
							display: 'flex',
							textAlign: 'center',
							marginBottom: '0',
							marginLeft: '18px',
							marginTop: '0',
						}}
					>
						1 hour to complete
					</Small>
				</div>
				<br />
				<h4 style={{ marginBottom: '1%' }}>{module?.title}</h4>
				<Small style={{ width: '70%' }}>{module?.description}</Small>
			</div>
		</IndividualSyllabus>
	);
};
