import React from 'react';
import page404 from '../../images/404/404.png'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='page-n-found'>
            <div className='page-not-found'>
                <h1>OPPS!</h1>
                <h1>404</h1>
                <h2>Page Not Found</h2>
            </div>
        </div>
    );
};

export default PageNotFound;