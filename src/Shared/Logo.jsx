import React from 'react';
import logo from '../assets/SMEC Logo Design.png';

const Logo = () => {
    return (
        <div className="flex items-center">
           <img
  src={logo}
  alt="SMEC Logo"
  className="w-20 object-contain"
/>


        </div>
    );
};

export default Logo;
