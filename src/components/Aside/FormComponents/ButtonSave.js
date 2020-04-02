import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ButtonSave = ({ onSubmit }) => {
    const formData = useSelector(state => state.profileData);

    return (
        <div
            className="Button-Save"
            style={{backgroundColor: `${formData ? '#318134' : ''}`}}
            onClick={onSubmit}
        >
            <h4 className="Save">Save</h4>
        </div>
    );
};

ButtonSave.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ButtonSave;
