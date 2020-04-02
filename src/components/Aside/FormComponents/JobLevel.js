import React from 'react';
import PropTypes from 'prop-types';
import JobOption from '../JobOption/JobOption';

const JobLevel = ({ jobLevel, change, jobLevelData }) => (
    <div className="JobLevel">
        <h4>Job level</h4>
        <select name="jobLevel" value={jobLevel} onChange={change}>
            {jobLevelData.map(value => (
                <JobOption
                    value={value}
                    key={value}
                />
            ))}
        </select>
    </div>
);

JobLevel.propTypes = {
    jobLevel: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    jobLevelData: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobLevel;
