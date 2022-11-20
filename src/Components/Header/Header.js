import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Image/brand (2).png'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-item'>
            <div className='nav-logo'>
                <img src={img} alt="" />
            </div>
            <div className='nav-link'>
            <Link to="/">Home</Link>
            <Link to="/home">Topics</Link>
            <Link to="/statics">Statics</Link>
            <Link to="/blogs">Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;