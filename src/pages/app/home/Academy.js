import homebg from 'assets/img/homebg.svg';
import homefooter from 'assets/img/homefooter.png';
import resource1 from 'assets/img/resource1.png';
import resource2 from 'assets/img/resource2.png';
import resource3 from 'assets/img/resource3.png';
import resource4 from 'assets/img/resource4.png';
import resource5 from 'assets/img/resource5.png';
import resource6 from 'assets/img/resource6.png';
import resource7 from 'assets/img/resource7.png';
import resource8 from 'assets/img/resource8.png';
import InputField from 'components/form/Input';
import { BlockLoader } from 'components/Loaders';
import { Button, Grid, H2 } from 'components/Styles';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getCourses } from 'redux/actions/courses.action';
import styled from 'styled-components';
import { getLoadingState } from 'utils/functions';
import Resource from './Resource';

const Wrapper = styled.div`
	padding-left: 58px;
	padding-top: 46px;
	padding-right: 74px;
`;

const TopSection = styled.div`
	h2 {
		font-weight: bold;
		font-size: 3rem;
		color: #061938;
		margin-bottom: 29px;
		line-height: 50px;
		span {
			color: #2d7ee9;
		}
		font-family: GTWalsheimPro;
	}
	& > div {
		max-width: 450px;
		width: 100%;
		margin-bottom: 28px;
		p {
			color: #6a7588;
			font-size: 1.125rem;
			font-family: GTWalsheimProRegular;
			font-weight: 400;
		}
	}
`;

const Recommended = styled.div`
	display: flex;
	margin-right: 5px;
	img {
		width: 120px;
		height: 117px;
		margin-right: 15px;
	}
	h2 {
		color: #102a43;
		font-size: 1.125rem;
		margin-bottom: 6px;
		font-weight: 600;
	}
	p {
		font-size: 0.9rem;
		line-height: 19px;
		color: #6a7588;
	}
	h4 {
		color: #c1c8ce;
		font-size: 0.75rem;
	}
`;

const SliderWrapper = styled.div`
	padding-right: 106px;
	margin-bottom: 60px;
`;

const Footer = styled.div`
	position: relative;
	margin-top: 194px;
	img {
		height: 340px;
		position: absolute;
	}
`;

const Search = styled.div`
	display: flex;
	button {
		border-radius: 0px 10px 10px 0px;
		width: 150px;
	}
	input {
		border-radius: 10px 0px 0px 10px;
	}
`;

// eslint-disable-next-line
const Academy = ({ courses }) => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCourses());
	}, []);

	const loadingCourses = useSelector(getLoadingState('getCourses'));

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		// slidesToScroll: 2,
	};

	const resources = [
		{
			img: resource1,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource2,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource3,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource4,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
	];

	const otherResources = [
		{
			img: resource5,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource6,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource7,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: resource8,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
	];

	return (
		<Wrapper>
			<Grid columns={['1.1fr', '1fr']}>
				{/* Top section */}
				<TopSection>
					<h2>
						More than
						<br /> <span>100 courses</span>
						<br /> to choose from.
					</h2>
					<div>
						<Search>
							<InputField />
							<Button>Search</Button>
						</Search>

						<p>
							Build skills with courses, certificates, and degrees
							<br />
							online from world-class universities and companies.
						</p>
					</div>
				</TopSection>

				<img src={homebg} alt='homebg' />
			</Grid>

			{loadingCourses ? (
				<BlockLoader />
			) : (
				<SliderWrapper>
					<H2>Human Resourses</H2>
					<Slider {...settings}>
						{courses.map((course, i) => (
							<Resource course={course} />
						))}
					</Slider>
				</SliderWrapper>
			)}

			{/* <SliderWrapper>
				<H2>Human Resourses</H2>
				<Slider {...settings}>
					{otherResources.map((resource, i) => (
						<Resource key={i} resource={resource} />
					))}
				</Slider>
			</SliderWrapper> */}

			{/* <section className='mb-30'>
				<H2>Recommended</H2>
				<GridEqual count={3} gap={'23px'}>
					<Recommended>
						<img src={recom} alt='recommend' />
						<div>
							<h4>UI/UX design</h4>
							<h2>Architecture II</h2>
							<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
					</Recommended>
					<Recommended>
						<img src={recom} alt='recommend2' />
						<div>
							<h4>UI/UX design</h4>
							<h2>Architecture II</h2>
							<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
					</Recommended>
					<Recommended>
						<img src={recom} alt='recommend3' />
						<div>
							<h4>UI/UX design</h4>
							<h2>Architecture II</h2>
							<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
					</Recommended>
				</GridEqual>
			</section> */}

			<Footer>
				<img src={homefooter} alt='homefooter' />
			</Footer>
		</Wrapper>
	);
};

export default connect(
	({ courses: { courses } }) => ({
		courses,
	}),
	null,
)(Academy);
