import React from 'react';

const Loader = () => {
    return (
        <div className="loader-full-screen">
            <div className="lds-ellipsis">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </div>
    );
};

export default Loader;
