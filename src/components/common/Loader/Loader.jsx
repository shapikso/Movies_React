import React from 'react';

const Loader = () => {
    return (
        <div className="loader-full-screen">
            <div className="lds-ellipsis">
                {new Array(4).fill(null).map((_,index) => <div key={index}/>)}
            </div>
        </div>
    );
};

export default Loader;
