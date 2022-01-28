import './Loader.scss';
import React from 'react';

const Loader = () => (
    <div className="loader">
        <div className="lds-spinner">
            {new Array(12).fill(null).map((index) => <div key={index}/>)}            
        </div>
    </div>
);


export default Loader;
