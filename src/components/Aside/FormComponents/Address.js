import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ address, change, maxChar }) => (
    <div className="Address">
        <h4>Address</h4>
        <textarea
            rows="2"
            maxLength="250"
            name="address"
            value={address}
            onChange={change}
        />
        <p className="max-250-characters">{maxChar}</p>
    </div>
);

Address.propTypes = {
    address: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    maxChar: PropTypes.string.isRequired,
};

export default Address;
