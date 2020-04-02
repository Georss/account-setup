import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ blankProfile }) => {
    const backgroundeColor1 = useSelector(state => state.colorSelect1);
    const backgroundeColor2 = useSelector(state => state.colorSelect2);
    const image = useSelector(state => state.profileImage);
    const name = useSelector(state => state.profileData.name);
    const description = useSelector(state => state.profileData.description);

    return (
        <div
            className="Header"
            style={{ backgroundImage: `linear-gradient(to bottom, ${backgroundeColor1}, ${backgroundeColor2})` }}
        >
            <div className="Header-Content">
                <img className="Header-Image" src={image || blankProfile} alt="Profile" />
                <div className="Short-Description">
                    <h1>{name || 'Employee Name'}</h1>
                    <h3>{description || 'Employee Description'}</h3>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    blankProfile: PropTypes.string.isRequired,
};

export default Header;
