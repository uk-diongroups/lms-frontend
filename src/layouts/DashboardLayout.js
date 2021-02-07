import React from 'react';
import SideNav from 'components/SideNav';
import Header from 'components/Header';
import styled from 'styled-components';

const ParentContainer = styled.div`
	position: relative;
	background-color: #f5fefe;
`;

const ChildContainer = styled.div`
	padding: 0px 100px;
	min-height: calc(100vh - 140px);
	display: flex;
	box-sizing: border-box;
	// border: 1px solid red;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const DashboardLayout = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [left, setLeft] = React.useState(-230);
	const handleNavBar = () => {
		setLeft(isOpen ? -230 : 0);
		setIsOpen(!isOpen);
	};

	return (
		<ParentContainer>
			<Header handleNavBar={handleNavBar} isOpen={isOpen} />

			<ChildContainer>
				<SideNav left={left} />
				<div handleNavBar={handleNavBar}>{children}</div>
			</ChildContainer>
		</ParentContainer>
	);
};

export default DashboardLayout;
