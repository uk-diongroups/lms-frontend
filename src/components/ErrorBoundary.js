import React, { Component } from 'react';
import propTypes from 'prop-types';
// import icons from 'assets/icons/icon-collections.svg';
// import history from 'utilis/history';

class ErrorBoundary extends Component {
	state = { hasError: false, error: '' };

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		// eslint-disable-next-line no-console
		console.log({ error, info });
	}

	render() {
		if (this.state.hasError) {
			return (
				<section className='main__parent--container'>
					<section className='not__found--parent'>
						<div className='not__found__details--container'>
							<div className='not__found__image--container'>
								{/* <img src={gsThree404Image} alt='' /> */}
							</div>

							<p>Oops!!! Something went wrong </p>

							<div className='not__found__btn--container'>
								<button
									type='button'
									onClickCapture={() => {
										// history.goBack();
									}}
									style={{ marginRight: '10px' }}
								>
									{/* <svg>
										<use xlinkHref={`${icons}#go-back`} />
									</svg> */}
									<span>Go Back</span>
								</button>

								<button
									type='button'
									onClickCapture={() => {
										// history.push('/dashboards');
									}}
								>
									{/* <svg>
										<use xlinkHref={`${icons}#dashboard`} />
									</svg> */}
									<span>Dashboard</span>
								</button>
							</div>
						</div>
					</section>
				</section>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
};

export default ErrorBoundary;
