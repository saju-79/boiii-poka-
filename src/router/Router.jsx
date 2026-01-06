import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pasges/root/Root';
import Error from '../pasges/error/Error';
import Home from '../pasges/home/Home';

export  const router = createBrowserRouter([
    {
        path:"/",
        Component:Root ,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            }
        ]
    }
 ]);