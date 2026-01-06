import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addTostotredData } from '../../commponet/localstorge/local-stire-data';
import { ToastContainer, toast } from 'react-toastify';
 

const Ditels = () => {


    const handelReastditels = (id) =>{
         addTostotredData(id)
       toast("Wow so easy!");
     




    }
    const {id} = useParams()
      const convartId = parseInt(id)
    const alldata = useLoaderData();
    const singleDat = alldata.find((book)=> book.bookId === convartId)
     const { image ,review , tags ,category ,author, bookName ,yearOfPublishing,rating ,publisher, totalPages} = singleDat;
    return (
       <div className=" flex gap-5   shadow-sm  my-10">
  <figure className='w-3/5 p-4 rounded-sm   bg-gray-200 '>
    <img
    className='h-120 w-full object-cover  rounded-2xl  p-6'

    src={image}
      alt="Movie  " />
  </figure>
  <div className="card-body w-2/5 flex-col rounded-sm space-y-4">
  <h1 className='text-2xl font-bold'>{author}</h1>
  <h1 className='text-sm font-semibold'>By : {bookName}</h1>
  <h1 className='text-sm font-semibold'>{category}</h1>
  <h1 className='text-sm font-light'><span className='font-bold text-lg'>Reviw :</span> {review}   </h1>
<div className="flex  items-center
justify-around">
      <p className='text-xl font-bold'>tag</p> 
       {tags.map(d => <p className='text-[#23BE0A] text-ld font-medium'>{d}</p>)}
       
       
    </div>
    <div className=" items-center flex justify-between">
        <p className='text-2xl font-light '>Number of Pages:</p>
        <p className='text-2xl font-bold text-end'>{totalPages}</p>
    </div>
    <div className=" items-center flex justify-between">
        <p className='text-2xl font-light '>Year of Publishing:</p>
        <p className='text-2xl font-bold text-end'>{yearOfPublishing}</p>
    </div>
    <div className=" items-center flex justify-between">
        <p className='text-2xl font-light  '>Rating:</p>
        <p className='text-2xl font-bold text-end'>{rating}</p>
    </div>
    <div className=" items-center flex justify-between">
        <p className='text-2xl font-light '>Publisher:</p>
        <p className='text-2xl font-bold text-end'>{publisher}</p>
    </div>
    <div className="text-end  gap-2">
        <ToastContainer />
        <button onClick={()=>handelReastditels( convartId)} className="btn btn-soft font-bold text-[#131313] text-lg mx-4">Read Default</button>
        <button className="btn font-bold text-[#FFFFFF] text-lg  btn-accent"> Add to Accent</button>
    </div>
   
    
  </div>
</div>
    );
};

export default Ditels;