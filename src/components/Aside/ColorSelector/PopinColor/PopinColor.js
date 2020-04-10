import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataColors from '../DataColors';
import ColorPickerBackgrounde from './ColorPickerBackgrounde';

const colors = DataColors;

function PopinColor({ show, getColor }) {
    const [colorBackgrounde, setColorBackgrounde] = useState('');

    const getColorBackgrounde = (e) => {
        const index = e.target.id;
        const color = colors[index];

        setColorBackgrounde(color);
        getColor(color);
    };

    return (

        <div>
            {show && (
                <div
                    className="popin"
                >
                    {colors.map((color, index) => (
                        <ColorPickerBackgrounde
                            color={color}
                            index={index}
                            key={index}
                            getColorBackgrounde={getColorBackgrounde}
                            backgroundeColor={colorBackgrounde}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

PopinColor.propTypes = {
    show: PropTypes.bool.isRequired,
    getColor: PropTypes.func.isRequired,
};

export default PopinColor;
