import React from 'react';
import PropTypes from 'prop-types';

const BoxColor = ({
    backgroundeColor, showPopin, title,
}) => (
    <div className="color-container">
        <h4 style={{ marginTop: '6px' }}>{title}</h4>
        <div
            role="button"
            tabIndex="0"
            className="box-color-1"
            style={{ backgroundColor: `${backgroundeColor || ''}` }}
            onClick={showPopin}
        />
    </div>
);

BoxColor.propTypes = {
    showPopin: PropTypes.func.isRequired,
    backgroundeColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default BoxColor;
