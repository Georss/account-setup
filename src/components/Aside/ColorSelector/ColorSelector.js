import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ColorSelector.css';
import PopinColor1 from './PopinColor/PopinColor1/PopinColor1';
import PopinColor2 from './PopinColor/PopinColor2/PopinColor2';


function ColorSelector() {
    const [togglePopin1, setTogglePopin1] = useState(false);
    const [togglePopin2, setTogglePopin2] = useState(false);
    const backgroundeColor1 = useSelector(state => state.colorSelect1);
    const backgroundeColor2 = useSelector(state => state.colorSelect2);

    const showPopin1 = () => {
        const show = !togglePopin1;

        if (togglePopin2) {
            const hidden = !togglePopin2;

            setTogglePopin2(hidden);
        }

        setTogglePopin1(show);
    };

    const showPopin2 = () => {
        const show = !togglePopin2;

        if (togglePopin1) {
            const hidden = !togglePopin1;

            setTogglePopin1(hidden);
        }

        setTogglePopin2(show);
    };

    return (
        <div className="Color-Selector">
            <h4>Header color</h4>
            <div className="text-color">
                <div className="color-container">
                    <h4>Color 1</h4>
                    <div
                        className="box-color-1"
                        style={{ backgroundColor: `${backgroundeColor1 ? backgroundeColor1 : ''}` }}
                        onClick={showPopin1}
                        />
                </div>
                <div className="color-container">
                    <h4>Color 2</h4>
                    <div
                        className="box-color-2"
                        style={{ backgroundColor: `${backgroundeColor2 ? backgroundeColor2 : ''}` }}
                        onClick={showPopin2}
                        />
                </div>
            </div>
            <PopinColor1 show={togglePopin1} />
            <PopinColor2 show={togglePopin2} />
        </div>
    );
}

export default ColorSelector;
