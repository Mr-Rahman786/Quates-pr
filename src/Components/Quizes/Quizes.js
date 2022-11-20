import React from 'react';
import './Quizes.css'
const Quizes = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        <div className='quizes-container'>
            <img src={logo} alt="" />
            <div className='cart-details'>
                <div>
                    <h4>{ name}</h4>
                </div>
                <div>
                    <button className='btn-start'>Start Practice</button>
                </div>
            </div>
        </div>
    );
};

export default Quizes;