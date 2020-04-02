import React from 'react';
import PropTypes from 'prop-types';
import JobOption from '../JobOption/JobOption';

const JobTitle = ({ jobTitle, change, jobTitleData }) => (
    <div className="JobTitle">
        <h3>Job title</h3>
        <select name="jobTitle" value={jobTitle} onChange={change}>
            {jobTitleData.map(value => (
                <JobOption
                    value={value}
                    key={value}
                />
            ))}
        </select>
    </div>
);

JobTitle.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    jobTitleData: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobTitle;
