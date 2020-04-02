import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name, change }) => (
    <div className="Name">
        <h4>Name</h4>
        <input
            type="text"
            name="name"
            value={name}
            onChange={change}
        />
    </div>
);

Name.propTypes = {
    name: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
};

export default Name;
