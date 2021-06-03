import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

const Paginate = styled.div`
	justify-content: center;
	margin-top: 30px;
	display: flex;
	ul {
		display: flex;
		flex-wrap: wrap;
		li {
			display: inline-block;
			min-width: 32px;
			height: 32px;
			margin-right: 8px;
			font-family: 'Inter', sans-serif;
			line-height: 30px;
			text-align: center;
			vertical-align: middle;
			list-style: none;
			background-color: #fff;
			border: 1px solid #d9d9d9;
			border-radius: 4px;
			outline: 0;
			cursor: pointer;

			&.active {
				border-color: #7000ff;
				outline: none !important;
				a {
					color: #7000ff;
				}
			}

			a {
				display: block;
				padding: 0 6px;
				color: rgba(0, 0, 0, 0.65);
				&:focus {
					outline: none !important;
				}
			}
		}
	}
`;

const Pagination = ({ getFunction, count, pageSize = 10 }) => {
	const dispatch = useDispatch();
	const returnPageCount = (totalNumberOfRecords, totalPages) => {
		if (totalNumberOfRecords <= totalPages) return 1;
		return totalNumberOfRecords % totalPages > 0
			? Math.floor(totalNumberOfRecords / totalPages) + 1
			: totalNumberOfRecords / totalPages;
	};

	const onChange = (page) => {
		dispatch(getFunction(page.selected + 1, pageSize));
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Paginate>
			<ReactPaginate
				previousLabel='←'
				nextLabel='→'
				breakClassName='break-me'
				pageCount={returnPageCount(count, pageSize)}
				onPageChange={onChange}
				activeClassName='active'
				pageRangeDisplayed={3}
			/>
		</Paginate>
	);
};

export default Pagination;
