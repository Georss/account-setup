import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { colorSelect2 } from '../../../../../actions';
import DataColors from '../../DataColors';
import ColorPickerBackgrounde2 from './ColorPickerBackgrounde2';

const colors = DataColors;

function PopinColor2({ show, dispatch }) {
    const [colorBackgrounde, setColorBackgrounde] = useState('');

    const getColorBackgrounde = (e) => {
        const index = e.target.id;
        const color = colors[index];

        setColorBackgrounde(color);
    };

    dispatch(colorSelect2(colorBackgrounde));

    return (
        <div
            className="popin"
            style={{ visibility: `${show ? 'visible' : 'hidden'}` }}
        >
            {colors.map((color, index) => (
                <ColorPickerBackgrounde2
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

PopinColor2.propTypes = {
    show: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(PopinColor2);
