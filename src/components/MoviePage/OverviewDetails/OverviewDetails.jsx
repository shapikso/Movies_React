import React from 'react';
import PropTypes from 'prop-types';

const OverviewDetails = ({overview}) => (
    <div>
        <span className="movie-header">Overview</span>
        <div className="base-gaps" id="overview">
            <p className="overview-text">{overview}</p>
        </div>
    </div>
);

OverviewDetails.propTypes = {
    overview: PropTypes.string,
};

export default OverviewDetails;
