import React from 'react';
import styled from 'styled-components';
import resource from 'assets/img/resource1.png';
import { withRouter } from 'react-router';

const Wrapper = styled.div`
	margin-right: 27px;

	div {
		padding: 12px 12px 15px 7px;
		border: 3px solid #f6f7f8;
		border-top: 0px;
	}
	img {
		height: 193px;
		width: 100%;
		border-radius: 5px;
		border: 1px solid transparent;
	}
	h4 {
		font-size: 0.875rem;
		color: #061938;
		margin-bottom: 12px;
		font-weight: 600;
	}
	p {
		font-size: 0.8rem;
		color: #6a7588;
	}
`;

export default withRouter(({ history, course }) => {
	return (
		<Wrapper
			onClick={() => {
				history.push(`/app/courses/details/${course?.id}`);
			}}
		>
			<img src={course?.background_image} />

			<div>
				<h4>{course.title}</h4>
				<p>{course.author}</p>
			</div>
		</Wrapper>
	);
});
