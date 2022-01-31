import React from 'react';
import './Loader.scss';

const Loader = ({ className }) => {
    return (
        <div className={className}>
            <div className="lds-ellipsis">
                {new Array(4).fill(null).map((_,index) => <div key={index}/>)}
            </div>
        </div>
    );
};

export default Loader;
