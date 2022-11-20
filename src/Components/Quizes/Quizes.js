import React from 'react';
import { Link } from 'react-router-dom';
import './Quizes.css'
const Quizes = ({ quiz }) => {
    const { id, name, logo } = quiz;
    // console.log(id)
    return (
        <div className='quizes-container'>
            <img src={logo} alt="" />
            <div className='cart-details'>
                <div>
                    <h4>{ name}</h4>
                </div>
                <div className='link-cart'>
                    {/* <button className=''>Start Practice</button> */}
                    <Link  to={`/question/${id}`}>Start Practice</Link>
                </div>
            </div>
        </div>
    );
};

export default Quizes;