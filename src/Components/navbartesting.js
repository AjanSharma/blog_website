import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import '../styling/navbartesting.css'
import { useState } from 'react';

const Navbarblog = () => {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

  const handleClick = () => {
    setHamburgerVisible(!hamburgerVisible);
    console.log(hamburgerVisible)
  };
 return (
    <div>
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
                <div className='hamburger-icon' onClick={handleClick}>
                    <RxHamburgerMenu />
                </div>
            </div>
        </nav>
        {hamburgerVisible && (
        <div className="hamburger">
          <h4 className='flex-container-options-hamburger-items'>Home</h4>
          <h4 className='flex-container-options-hamburger-items'>My Blog</h4>
          <h4 className='flex-container-options-hamburger-items'>About</h4>
          <h4 className='flex-container-options-hamburger-items'>Contact</h4>
        </div>
      )}
    </div>
 );
};

export default Navbarblog;