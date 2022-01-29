import React from 'react';

const OverviewDetails = ({overview}) => (
    <div>
        <span className="movie-header">Overview</span>
        <div className="base-gaps" id="overview">
            <p className="overview-text">{overview}</p>
        </div>
    </div>
);

export default OverviewDetails;
