import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { isLoading } from 'util/loading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PageLoaderBlock = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	svg {
		height: 70px !important;
		width: 70px !important;
	}
`;

const BlockWrapper = styled.div`
	justify-content: center !important;
	display: flex;
	margin-top: 50px;
	margin-bottom: 50px;
`;

// const PageLoaderBlock = styled.div`
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	position: absolute;
// 	width: 100%;
// 	top: 0;
// 	left: 0;
// 	svg {
// 		height: 70px !important;
// 		width: 70px !important;
// 	}
// `;

export const ButtonLoader = ({ color }) => <Loader type='Oval' color={color || 'white'} width='20' height='20' />;

export const FileLoader = () => <Loader type='ThreeDots' color='#7a8088' width='5' height='5' />;

export const TripLoader = () => <Loader type='ThreeDots' color='#7a8088' width='18' height='18' />;

export const PageLoader = () => (
	<PageLoaderBlock>
		<Loader type='TailSpin' color='#201A56' width='56' height='56' />
	</PageLoaderBlock>
);

export const OverlayLoader = ({ text }) => (
	<div id='lottie' class='uk-open uk-modal' data-uk-modal>
		<div class='uk-modal-dialog uk-modal-body uk-margin-auto-vertical lottie-modal is-transparent'>
			<div>
				<div class='lds-ring'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<p>{text}</p>
			</div>
		</div>
	</div>
);

export const BlockLoader = ({ marginTop, marginBottom }) => (
	<BlockWrapper>
		<Loader type='TailSpin' color='#201A56' width='46' height='46' />
	</BlockWrapper>
);

// export const withLoadWrapper = (WrappedComponent, loadingStates) => {
// 	const LoadingDataHOC = ({ loading, ...rest }) => {
// 		//Get all loadingStates passed through the HOC and set them to true
// 		const [loads, setLoads] = React.useState(loadingStates.map(() => true));

// 		React.useEffect(() => {
// 			loadingStates.forEach((loadingState, i) => {
// 				let newLoadingStates = loads;
// 				newLoadingStates[i] = isLoading(loadingState);
// 				setLoads([...newLoadingStates]);
// 			});
// 		}, [loading]);

// 		return <WrappedComponent {...rest} loading={loads} />;
// 	};

// 	LoadingDataHOC.propTypes = {
// 		loadingStates: PropTypes.array.isRequired,
// 	};

// 	const map_state_to_props = ({ loader }) => ({
// 		loading: loader.loading,
// 	});

// 	return connect(map_state_to_props, null)(LoadingDataHOC);
// };
