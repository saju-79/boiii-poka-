import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({singleData}) => {
    const {image ,author ,bookName ,rating ,category,tags} = singleData
 
  console.log(singleData)
    return (
       <div className="card bg-base-100 w-full p-4 shadow-sm  space-y-2">
  <figure className='p-6 bg-gray-200 w-2/3 mx-auto rounded-lg  '>
    <img
    className='p-6 h-70 '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body    w-2/3 mx-auto rounded-lg ">
    <div className="card-title">
       <p className='text-[#23BE0A] text-md font-medium'>{tags[0]}</p>
       <p className='text-[#23BE0A] text-md font-medium'>{tags[1]}</p>
    </div>
     <div className="text-start space-y-1">
       <h1 className='font-bold text-xl text-[#131313]'>{bookName}</h1>
       <p className='text-sm font-medium text-[#131313]'>by{author}</p>
     </div>
    <div className=" flex justify-between">
     <p className='text-sm font-medium text-[#131313]'>{category}</p>
     <p className='text-sm font-medium text-[#131313] flex gap-1 text-end  items-center'>{rating} <FaRegStar /> </p>
     
    </div>
  </div>
</div>
    );
};

export default Book;