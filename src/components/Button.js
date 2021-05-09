import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Button({ outline, variant = 'primary', block, size, className, disabled, children, type, ...rest }) {
	return (
		<button
			className={classnames(
				'btn',
				`${outline ? 'btn--' + variant + '-outline' : ''}`,
				`${block ? 'btn--block' : ''}`,
				`${size ? 'btn--' + size : ''}`,
				`btn--${variant}`,
				className,
			)}
			disabled={disabled}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	block: PropTypes.bool,
	variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
	outline: PropTypes.bool,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['sm', 'md']),
	type: PropTypes.oneOf(['button', 'reset', 'submit']),

	className: PropTypes.string,
};

Button.defaultProps = {
	variant: '',
};

export default Button;
