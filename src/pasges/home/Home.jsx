import React from 'react';
import Baner from '../../commponet/navber/Baner';
import Books from '../books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allData = useLoaderData()
    
   
    return (
        <div>
             <Baner></Baner>
             <Books allData ={allData}  ></Books>
        </div>
    );
};

export default Home;