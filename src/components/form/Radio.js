import React from 'react';

export default ({ label, options, handleChange, disabled, error, name, display, value }) => {
	return (
		<div className='select__options-parent'>
			<label>{label}</label>
			{options.map((option, i) => (
				<div
					className='check__input--container'
					style={{ display: option.name === 'Self Loading' && display ? 'none' : 'block' }}
				>
					<input
						type='radio'
						name={name}
						onChange={handleChange}
						disabled={disabled}
						value={option.value}
						checked={option.value === value}
					/>
					<div className='check__input'>
						<div className='img__wrapper'>
							<img src={option.img || '-'} alt='' style={{ width: '30px' }} />
						</div>
						<span>{option.name}</span>
						<div className='check_wrapper'>
							<span className='check' />
						</div>
					</div>
				</div>
			))}
			{error ? <p className='error'>{error}</p> : ''}
		</div>
	);
};
