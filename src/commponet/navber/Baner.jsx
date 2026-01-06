import React from 'react';

const Baner = () => {
    return (
        <div className='bg-gray-200 px-10 py-5 rounded-sm  flex justify-between items-center '>
            <div className=" space-y-5 p-6">
                <h1 className='text-5xl font-bold text-[#131313]'>Books to freshen up your bookshelf</h1>
                <button className='text-lg btn bg-[#23BE0A] text-[#ffffff] font-bold'>View The List</button>
            </div>
            <div className="p-6">
                <img className=' h-100 rounded-3xl shadow-xl' src="https://i.ibb.co.com/sdyy4qSk/books.webp" alt="" />
            </div>
        </div>
    );
};

export default Baner; 