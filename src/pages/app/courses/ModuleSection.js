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

const CourseEnrollment = () => {
	return (
		<Wrapper>
			<h4>Module 1</h4>
			<h3>Anatomy of the nervous system</h3>

            <Grid>
                <div>
                    <p>Courses</p>
                </div>
                <div>
                    <p>Courses</p>
                </div>
            </Grid>
		</Wrapper>
	);
};

export default CourseEnrollment;
