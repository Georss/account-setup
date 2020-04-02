import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description, change, maxChar }) => (
    <div className="Description">
        <h4>Description</h4>
        <textarea
            rows="4"
            maxLength="250"
            name="description"
            value={description}
            onChange={change}
        />
        <p className="max-250-characters">{maxChar}</p>
    </div>
);

Description.propTypes = {
    description: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    maxChar: PropTypes.string.isRequired,
};

export default Description;
