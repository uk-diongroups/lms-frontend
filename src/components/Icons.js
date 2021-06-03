import React from 'react';
import PropTypes from 'prop-types';
import icons from 'assets/icons/icon-collections.svg';

function Icon({ width, height, id, className, onClick, size }) {
	return (
		<svg width={size ?? width} height={size ?? height} className={className} onClick={onClick}>
			<use xlinkHref={`${icons}#${id}`} />
		</svg>
	);
}

Icon.propTypes = {
	id: PropTypes.string,
};

export default Icon;
