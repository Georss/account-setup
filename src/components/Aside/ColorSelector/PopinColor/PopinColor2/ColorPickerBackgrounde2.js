import React from 'react';
import PropTypes from 'prop-types';
import '../PopinColor.css';

const ColorPickerBackgrounde = ({
    color, index, getColorBackgrounde, backgroundeColor,
}) => {
    const activeBorder = backgroundeColor === color ? 'border-active' : '';

    return (
        <div
            className={`box-color-picker ${activeBorder}`}
            style={{ backgroundColor: color }}
            onClick={getColorBackgrounde}
            id={index}
        />
    );
};

ColorPickerBackgrounde.propTypes = {
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    getColorBackgrounde: PropTypes.func.isRequired,
    backgroundeColor: PropTypes.string.isRequired,
};

export default ColorPickerBackgrounde;
