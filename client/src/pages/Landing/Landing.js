import React from 'react';
import logo from '../../assets/images/book-logo.png';
import './landing-style.css';

const Landing = () => {
    return (
        <div className='row'>
            <div className="landing-background text-center col-12">
                <div id="logo-div">
                    <img className="img-fluid" src={logo}></img>
                </div>
            </div>
        </div>
    )
};

export default Landing;