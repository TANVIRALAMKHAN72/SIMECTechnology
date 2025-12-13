import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Navbar/Navber';
import Footer from '../Pages/Footer/Footer';


const RootLayout = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;