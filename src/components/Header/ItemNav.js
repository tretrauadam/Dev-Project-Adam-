import React from 'react';
import { Link } from 'react-router-dom'
import { useDipatch } from 'react-redux'
import {displayCart} from   '../Cart/cartSlice';

const ItemNav = () => {
    const dispatch = useDipatch()

    return(
        <nav className='flex h-18 py-4 w-full m-auto text-gray-800'>
            
        </nav>
    )
}