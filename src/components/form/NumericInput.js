import React from 'react';
import Cleave from 'cleave.js/react';
import { handleRemove } from 'utilis/imageUploader';

export default function NumericInput({ label, required, placeholder, handleChange, error, value, classes }) {
	return (
		<div className={classes}>
			<label>
				{label}
				{required ? (
					<span className='error' style={{ marginLeft: '5px' }}>
						*
					</span>
				) : (
					''
				)}
			</label>

			<Cleave
				placeholder={placeholder}
				options={{
					numeral: true,
					numeralPositiveOnly: true,
					numeralThousandsGroupStyle: 'thousand',
				}}
				onChange={handleChange}
				value={value}
			/>
			{error ? <p className='error'>{error}</p> : ''}
		</div>
	);
}
