import React from 'react'; 
import {Link} from 'react-router-dom'
// need to import  4 different images to to reflect each category. 


function ShopCards () {
    return(
        <div className='w-full bg-white'>
            <h1 className='p1-7 pt-14 pb-8 md:pb-20 font-display text-gray-800 text-3xl lg:text-6x 2xl:w-3/4 m-auto'>Collections</h1>
            <u1 className='flex flex-col md:flex-row space-y-12 md:space-y-0 m-auto text-center md:justify-between text-2xl 2xl:w-3/4'>
            <Link to='./shop/white'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-300 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src='' alt=''/>
                </li>
            </Link>
            <Link to='./shop/green'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src='' alt=''/>
                </li>
            </Link>
            < Link to="./shop/white">
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src='' alt=''/> 
                </li>
            </Link>
            < Link to="./shop/blue">
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src='' alt=''/>  
               </li>
            </Link>
            <Link to='/shop/red'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src="" alt='' />
                    <p className='font-body'> Shop and Smile</p>
                </li>
            </Link>
           </u1>
        </div>
    )
}

export default ShopCards;