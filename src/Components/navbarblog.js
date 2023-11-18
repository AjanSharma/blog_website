import React from 'react';
// import { Link } from 'react-router-dom';
import '../styling/navbarblog.css'

const Navbarblog = () => {
 return (
    <nav className="flex-container-parent">
        <div className='flex-container-logo'>
            <h1>Blog Website</h1>
        </div>
        <div className='flex-container-options'>
            <h4 className='flex-container-options-items'>Home</h4>
            <h4 className='flex-container-options-items'>My Blog</h4>
            <h4 className='flex-container-options-items'>About</h4>
            <h4 className='flex-container-options-items'>Contact</h4>
            <h4 className='flex-container-options-items editor-option'>Editor</h4>
        </div>
    </nav>
 );
};

export default Navbarblog;