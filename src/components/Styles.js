import React from 'react';
import styled from 'styled-components';

//Layout
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

export const CenterDiv = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
`;

export const Button = styled.button`
	color: #27067b;
	border-radius: 6px;
	border: 1px solid transparent;
	cursor: pointer;
	display: inline-block;
	font-family: inherit;
	font-size: 0.9rem;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	height: 50px;
	line-height: 45px;
	outline: none;
	padding-left: 2em;
	padding-right: 2em;
	position: relative;
	text-decoration: none;
	transition: 0.25s cubic-bezier(0.17, 0.635, 0.54, 1.435);
	font-weight: 600;
	background-color: #00d5bb;
	text-transform: capitalize;
	cursor: pointer;
	&:disabled {
		opacity: 0.5;
	}
`;

export const ButtonOrange = styled(Button)`
	background: #f3724e;
`;

export const ButtonSmall = styled(Button)`
	width: fit-content;
	height: 30px;
	line-height: 30px;
	padding-left: 0.5em;
	padding-right: 0.5em;
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
