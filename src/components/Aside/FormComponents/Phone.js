import React from 'react';
import PropTypes from 'prop-types';

const Phone = ({ phone, change }) => (
    <div className="Phone">
        <h4>Phone number</h4>
        <input
            type="telNo"
            name="phone"
            value={phone}
            onChange={change}
        />
    </div>
);

Phone.propTypes = {
    phone: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
};

export default Phone;
