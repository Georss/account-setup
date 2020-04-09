import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorSelect1, colorSelect2 } from '../../../actions';
import PopinColor from './PopinColor/PopinColor';
import BoxColor from './PopinColor/BoxColor';

const title = ['Color 1', 'Color 2'];

const ColorSelector = ({
    getColor1, getColor2, backgroundeColor1, backgroundeColor2,
}) => {
    const [popin1, setPopin1] = useState(false);
    const [popin2, setPopin2] = useState(false);
    const ref1 = useRef(null);

    const closePopin = () => {
        if (popin1) {
            setPopin1(!popin1);
        }
        if (popin2) {
            setPopin2(!popin2);
        }
    };

    const handleClickOutside = (event) => {
        if (
            ref1.current &&
            !ref1.current.contains(event.target)
        ) {
            closePopin();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);

        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    });

    const showPopin1 = () => {
        setPopin1(!popin1);
        setPopin2(false);
    };

    const showPopin2 = () => {
        setPopin2(!popin2);
        setPopin1(false);
    };

    return (
        <div className="Color-Selector">
            <h4>Header color</h4>
            <div className="text-color">
                <BoxColor
                    showPopin={showPopin1}
                    title={title[0]}
                    backgroundeColor={backgroundeColor1}
                />
                <BoxColor
                    showPopin={showPopin2}
                    title={title[1]}
                    backgroundeColor={backgroundeColor2}
                />
            </div>
            <div className="Popin-ref" ref={ref1}>
                <PopinColor
                    show={popin1}
                    getColor={getColor1}
                />
                <PopinColor
                    show={popin2}
                    getColor={getColor2}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    backgroundeColor1: state.colorSelect1,
    backgroundeColor2: state.colorSelect2,
});

const mapDispatchToProps = dispatch => ({

    getColor1: props => dispatch(colorSelect1(props)),
    getColor2: props => dispatch(colorSelect2(props)),

});

ColorSelector.propTypes = {
    getColor1: PropTypes.func.isRequired,
    getColor2: PropTypes.func.isRequired,
    backgroundeColor1: PropTypes.string.isRequired,
    backgroundeColor2: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);

