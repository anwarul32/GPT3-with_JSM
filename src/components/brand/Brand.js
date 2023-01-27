import React from 'react';
import './Brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <div className="">
                <img src={google} alt="google images" />
            </div>
            <div className="">
                <img src={slack} alt="slack images" />
            </div>
            <div className="">
                <img src={atlassian} alt="atlassian images" />
            </div>
            <div className="">
                <img src={dropbox} alt="dropbox images" />
            </div>
            <div className="">
                <img src={shopify} alt="shopify images" />
            </div>
        </div>
    );
};

export default Brand;