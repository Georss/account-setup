import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { colorSelect1 } from '../../../../../actions';
import DataColors from '../../DataColors';
import ColorPickerBackgrounde1 from './ColorPickerBackgrounde1';

const colors = DataColors;

function PopinColor1({ show, dispatch }) {
    const [colorBackgrounde, setColorBackgrounde] = useState('');

    const getColorBackgrounde = (e) => {
        const index = e.target.id;
        const color = colors[index];

        setColorBackgrounde(color);
    };

    dispatch(colorSelect1(colorBackgrounde));

    return (
        <div
            className="popin"
            style={{ visibility: `${show ? 'visible' : 'hidden'}` }}
        >
            {colors.map((color, index) => (
                <ColorPickerBackgrounde1
                    color={color}
                    index={index}
                    key={color.id}
                    getColorBackgrounde={getColorBackgrounde}
                    backgroundeColor={colorBackgrounde}
                />
            ))}
        </div>
    );
}

PopinColor1.propTypes = {
    show: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(PopinColor1);
