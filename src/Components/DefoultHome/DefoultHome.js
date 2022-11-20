import React from 'react';
import './DefoultHome.css'
import img from '../../Image/education.jpg'
import images from '../../Image/quizes.jpg'
const DefoultHome = () => {
    return (
        <div>
            <div className='banner-main-container'>
                <div className='banner-section'>
                    <img src={img} alt="" />
                </div>
                <div className='text-container'>
                    <h2>Quara For child!</h2>
                    <p>There we have been provided there some huge
                        <br /> the queation for a child in next leval</p>
                    <button className='about-btn'>About</button>
                </div>
            </div>
            <div>
                <footer className='footer'>
                    <p>All right reserved Quaras</p>
                </footer>
            </div>
        </div>
    );
};

export default DefoultHome;