import React from 'react'; 
import {Link} from 'react-router-dom'
import snake2 from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/snake2.jpg'
import collection from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/collection2.jpg';
import petFriendly from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/petFriendly.jpg';
import succulents from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/succulents.jpg';

function ShopCards () {
    return(
        <div className='w-full bg-white'>
            <h1 className='p1-7 pt-14 pb-8 md:pb-20 font-display text-gray-800 text-3xl lg:text-6x 2xl:w-3/4 m-auto'>Collections</h1>
            <ul className='flex flex-col md:flex-row space-y-12 md:space-y-0 m-auto text-center md:justify-between text-2xl 2xl:w-3/4'>
            <Link to='./shop/beginner'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-300 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={snake2} alt=''/>
                    <p className='font-body'>Beginner Friendly</p>
                </li>
            </Link>
            <Link to='/src/assets/shop/'>
                <li className='space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200 ease-in-out'>
                    <img className='h-96 w-full shadow-xl' src={collection} alt=''/>
                    <p className='font-body'>Air Purifiers</p>
                </li>
            </Link>
            <Link to="./shop/pet-friendly">
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
           </ul>
        </div>
    )
}

export default ShopCards;