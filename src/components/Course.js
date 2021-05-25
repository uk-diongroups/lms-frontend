import { Button, GridEqual } from 'components/Styles';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import icons from 'assets/icons/icon-collections.svg';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: #f8fafb;
	border-radius: 14px;
	align-items: center;
	padding-left: 9px;
	padding-right: 24px;
	padding-bottom: 8px;
	padding-top: 8px;
	margin-bottom: 16px;
	button {
		width: 120px;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
	}
`;

const Image = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	padding: 16px;
	img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
`;

const Title = styled.div`
	h3 {
		color: #23286b;
		font-size: 1rem;
		font-weight: 600;
		font-family: PoppinsBold;
	}
	p {
		font-size: 0.8125rem;
	}
`;

const Hour = styled.div`
	display: flex;
	p {
		font-size: 0.8125rem;
	}
	svg {
		height: 16px;
		width: 16px;
		margin-right: 5px;
	}
`;

const Percentage = styled.div`
	width: 40px;
	height: 40px;
	font-family: 'Roboto', sans-serif;

	// .CircularProgressbar .CircularProgressbar-text {
	// 	font-size: 33px;
	// }
`;

export default ({ course }) => {
	return (
		<Wrapper>
			<Image>
				<img src={course?.background_image} />
			</Image>
			<Title>
				<h3>{course?.title}</h3>
				<p>by {course?.author}</p>
			</Title>

			{course?.time && (
				<Hour>
					<svg>
						<use xlinkHref={`${icons}#time`} />
					</svg>
					<p>{course?.time || 0}</p>
				</Hour>
			)}

			<Percentage>
				<CircularProgressbar
					styles={buildStyles({
						// Rotation of path and trail, in number of turns (0-1)
						rotation: 0.25,

						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: 'butt',

						// Text size
						textSize: '33px',

						// How long animation takes to go from one percentage to another, in seconds
						pathTransitionDuration: 0.5,

						// Can specify path transition in more detail, or remove it entirely
						// pathTransition: 'none',

						// Colors
						pathColor: course.pathColor || `rgba(0, 0, 0, ${course?.percentage / 100})`,
						textColor: '#000',
						trailColor: 'transparent',
						backgroundColor: '#F64C71',
					})}
					value={course?.percentage || 0}
					text={`${course?.percentage || 0}%`}
				/>
			</Percentage>

			<Link to={`/app/courses/${course?.id}`}>
				<Button>View course</Button>
			</Link>
		</Wrapper>
	);
};
