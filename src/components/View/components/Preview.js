import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Preview = ({ blankProfile }) => {
    const image = useSelector(state => state.profileImage);
    const jobTitle = useSelector(state => state.profileData.jobTitle);
    const jobLevel = useSelector(state => state.profileData.jobLevel);
    const phone = useSelector(state => state.profileData.phone);
    const address = useSelector(state => state.profileData.address);

    return (
        <div className="Display-Employee">
            <div className="Info-Employee">
                <img className="Image-Employee" src={image || blankProfile} alt="Profile" />
                <div className="Data-Employee">
                    <h5>Current job</h5>
                    <h3>{jobTitle || 'Employee job title'}</h3><br />
                    <h5>Level</h5>
                    <h3>{jobLevel || 'Employee job level'}</h3><br />
                    <h5>Phone number</h5>
                    <h3>{phone || 'Employee phone'}</h3><br />
                    <h5>Adress</h5>
                    <h3>{address || 'Employee address'}</h3>
                </div>
            </div>
        </div>
    );
};

Preview.propTypes = {
    blankProfile: PropTypes.string.isRequired,
};

export default Preview;
