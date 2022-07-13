import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { displayCart } from '../Cart/cartSlice';

const Nav = () => {
    const dispatch = useDispatch()

    return(
        <nav className='flex h-18 py-4 w-full m-auto text-white'>
            <Link to='/'>
                <h1 className='transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl'>Dope</h1>
            </Link>

            <ul className='flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light'>
                <Link to='/about'>
                    <li className='text-sm md:text-lg transition duration-300 transform hover:translate-y-1 hover:text-blue-500 border-blue-500 hover:border-b-2'>
                        About
                    </li>
                </Link>
                <Link to='/shop'>
                    <li className='text-sm md:text-lg transition duraction-300 transform hover:translate-y-1 hover:text-blue-500 border-blue-500 hover:border-b-2'>
                        Shop
                    </li>
                </Link>
                <li
                  onClick = {() => dispatch(displayCart())}
                  className='flex transition duration-300 transform hover:-translate-y-1 hover:text-red-500
                  hover:font-normal border-red-500 hover:border-b-2'
                >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.3' d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>                    
            </li>
        </ul>
     </nav>
    );
};

export default Nav; 
