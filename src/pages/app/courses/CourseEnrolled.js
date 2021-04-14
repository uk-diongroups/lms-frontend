import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSmall, Flex, NormalFont, H2, H1 } from 'components/Styles';
import styled from 'styled-components';
import thumbnail from 'assets/img/thumbnail.png';
import bookmark from 'assets/img/bookmark.svg';
import time from 'assets/img/time.svg';
import learningTime from 'assets/img/learning-time.svg';

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

const ModuleSection = styled.div``;

const CourseEnrollment = () => {
	return (
		<Wrapper>
			Back
			<H1>Advanced Neurobiology</H1>
			<H2>Professor Yan Zhang</H2>
			{/* Prgoress */}
			<ModuleSection>
				
			</ModuleSection>
		</Wrapper>
	);
};

export default CourseEnrollment;
