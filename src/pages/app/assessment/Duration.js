import React from 'react';
import Countdown from 'react-countdown';
import useAssessment from 'hooks/assessment';

export default ({ duration, setFinishModal }) => {
	const { convertDurationToMins } = useAssessment();
	return (
		<div className='questions__duration'>
			<h4>Time Remaining</h4>
			<h2>
				<Countdown
					date={Date.now() + convertDurationToMins(duration) * 60000}
					onComplete={() => {
						setFinishModal(true);
					}}
				/>
			</h2>
		</div>
	);
};
