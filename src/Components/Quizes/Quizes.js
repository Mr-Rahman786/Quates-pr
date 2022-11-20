import React from 'react';
import './Quizes.css'
const Quizes = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        <div className='quizes-container'>
            <img src={logo} alt="" />
            <h4>{ name}</h4>
        </div>
    );
};

export default Quizes;