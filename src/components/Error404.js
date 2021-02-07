import React from 'react';
import propTypes from 'prop-types';
// import icons from 'assets/icons/icon-collections.svg';

const Error404 = ({ history }) => {
	return (
		<section className='main__parent--container'>
			<section className='not__found--parent'>
				<div className='not__found__details--container'>
					<div className='not__found__image--container'>{/* <img src={gsThree404Image} alt='' /> */}</div>

					<p>Oops!!! What you are looking for is not here </p>

					<div className='not__found__btn--container'>
						<button
							type='button'
							onClickCapture={() => {
								history.goBack();
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
								history.push('/dashboards');
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
};

Error404.propTypes = {
	location: propTypes.shape({
		pathname: propTypes.string.isRequired,
	}),
};

export default Error404;
