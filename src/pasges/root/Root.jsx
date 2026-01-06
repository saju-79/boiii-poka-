import React from 'react';
import Navber from '../../commponet/navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../commponet/footer/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navber></Navber> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;