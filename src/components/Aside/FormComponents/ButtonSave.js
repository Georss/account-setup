import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const ButtonSave = () => {
    const formData = useSelector(state => state.profileData);

    let buttonRef;

    return (
        <div>
            <button
                type="submit"
                form="info-form"
                ref={(button) => { buttonRef = button; }}
                style={{ display: 'none' }}
            />
            <div
                className="Button-Save"
                style={{ backgroundColor: `${formData ? '#318134' : ''}` }}
                onClick={() => buttonRef.click()}
            >
                <h4 className="Save">Save</h4>
            </div>
        </div>
    );
};

ButtonSave.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
};

export default ButtonSave;
