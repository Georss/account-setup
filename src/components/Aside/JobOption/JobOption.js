import React from 'react';
import PropTypes from 'prop-types';
import './JobOption.css';

const JobOption = ({ value }) => (
    <option value={value}>{value}</option>
);

JobOption.propTypes = {
    value: PropTypes.string.isRequired,
};

export default JobOption;
