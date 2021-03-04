import React from 'react';
import styled from 'styled-components';
const PageWrapper = styled.div`
	min-height: 100vh;
	background: #f9fafb;
`;

export default ({ children }) => {
	return (
		<PageWrapper>
			<div>{children}</div>
		</PageWrapper>
	);
};
