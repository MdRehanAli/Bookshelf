import React from 'react';
import heroImage from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className='bg-[#1313130D] px-8 py-12 md:px-32 md:py-20 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-10 mt-16 mb-24'>
            <div className='lg:w-1/2'>
                <h1 className='text-4xl text-center lg:text-left lg:text-7xl font-bold mb-8'>Books to freshen up your bookshelf</h1>
                <div className=' flex items-center justify-center lg:justify-start'>

                    <button className='btn btn-primary'>View The List</button>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className='rounded-3xl' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;