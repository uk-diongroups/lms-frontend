import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

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
	display: flex;
	margin-top: 50px;
	margin-bottom: 50px;
	justify-content: center;
	align-items: center;
	position: relative;
`;
const OverlayWrapper = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	background: rgba(255, 255, 255, 0.6);
	border: 1px solid red;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	p {
		margin-top: 50px;
		text-align: center;
		font-size: 20px;
	}
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
	<OverlayWrapper>
		<div>
			<Loader type='TailSpin' color='#0ba759' width='100' height='100' />
			<p>{text}</p>
		</div>
	</OverlayWrapper>
);

export const BlockLoader = ({ marginTop, marginBottom, height }) => (
	<BlockWrapper
		style={{
			marginTop: marginTop || '40px',
			marginBottom: marginBottom || '40px',
			height: height || '60vh',
		}}
	>
		<Loader type='TailSpin' color='#0ba759' width='46' height='46' />
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
