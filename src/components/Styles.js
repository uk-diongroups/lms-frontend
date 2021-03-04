import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: ${(props) => (props.columns || []).join(' ')};
	grid-column-gap: ${({ gap }) => gap || 0};
	height: fit-content;

	@media (max-width: 960px) {
		display: ${({ isNotResponsive }) => (isNotResponsive ? 'grid' : 'block')};
	}
`;

export const GridRow = styled.div`
	display: grid;
	grid-template-rows: ${(props) => (props.rows || []).join(' ')};
	grid-row-gap: ${({ gap }) => gap || 0};
	height: 100%;
	@media (max-width: 960px) {
		display: block;
	}
`;

export const GridEqual = styled(Grid)`
	grid-template-columns: ${(props) => `repeat(${props.count || 3} , 1fr)`};
	grid-row-gap: ${({ gap }) => gap || 0};
`;

export const Button = styled.button`
	border: none;
	color: white;
	cursor: pointer;
	display: inline-block;
	font-family: inherit;
	font-size: 0.85rem;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	height: 50px;
	line-height: 50px;
	outline: none;
	padding-left: 1.2em;
	padding-right: 1.2em;
	position: relative;
	text-decoration: none;
	transition: 0.25s cubic-bezier(0.17, 0.635, 0.54, 1.435);
	font-weight: 600;
	// text-transform: capitalize;
	background: #242582;
	border-radius: 5px;
	cursor: pointer;
	width: 260px;
	&:disabled {
		opacity: 0.5;
	}
`;

export const ButtonOrange = styled(Button)`
	background: #f3724e;
`;

export const ButtonSmall = styled(Button)`
	width: fit-content;
	height: 37px;
	line-height: 37px;
	padding-left: 15px;
	padding-right: 15px;
	font-size: 0.75rem;
`;

export const ButtonTransparent = styled(Button)`
	width: 100%;
	color: #201a56;
	background-color: transparent;
`;

export const ButtonFullWidth = styled(Button)`
	width: 100%;
`;

export const H2 = styled.h4`
	font-size: 1.25rem;
	margin-bottom: 25px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #061938;
	font-weight: 600;
`;

export const H1 = styled.h1`
	color: #242582;
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 18px;
`;

export const NormalFont = styled.h4`
	font-size: 1rem;
`;

export const CenterDiv = styled.div`
	margin: 0 auto;
	width: fit-content;
`;

export const DashboardNav = styled.ul`
	display: flex;
	margin-bottom: 15px;
	li {
		color: #242582;
		font-size: 1rem;
		padding-bottom: 5px;
		cursor: pointer;
		margin-right: 15px;
		color: #000000;
		font-weight: bold;

		&.active {
			color: #242582;
			border-bottom: 2px solid #23286b;
		}
		&:not(.active) {
			opacity: 0.3;
		}
	}
`;

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
