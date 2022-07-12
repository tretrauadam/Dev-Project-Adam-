import React from 'react'; 
import {Link} from 'react-router-dom'
import snake2 from '/src/components/assets/snake2'
import collection from '/src/components/assets/collection.png';
import petFriendly from '/src/components/assets/petFriendly.png';
import succulents from '/src/components/assets/succulents';

function ShopCards () {
    return(
        <div className='w-full bg-white'>
            <h1 className='p1-7 pt-14 pb-8 md:pb-20 font-display text-gray-800 text-3xl lg:text-6x 2xl:w-3/4 m-auto'>Collections</h1>
            <u1 className='flex flex-col md:flex-row space-y-12 md:space-y-0 m-auto text-center md:justify-between text-2xl 2xl:w-3/4'>
            <Link to='./shop/beginner'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-300 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={snake2} alt=''/>
                    <p className='font-body'>Beginner Friendly</p>
                </li>
            </Link>
            <Link to='./shop/airPurifying'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={collection} alt=''/>
                    <p className='font-body'>Air Purifiers</p>
                </li>
            </Link>
            < Link to="./shop/pet-friendly">
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={petFriendly} alt=''/> 
                    <p className='font-body'>Pet Friendly</p>
                </li>
            </Link>
            < Link to="./shop/succulents">
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={succulents} alt=''/>  
                    <p className='font-body'> Shop and Smile</p>
               </li>
            </Link>
           </u1>
        </div>
    )
}

export default ShopCards;