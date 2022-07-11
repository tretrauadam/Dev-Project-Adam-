import React from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux'; 
import ShopDisplay from './ShopDisplay'
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';


function Collections(){
    let {collection} = useParams()
    const products = useSelector(state => state.cart.products)
    let plantCollection = []

    switch(collection) {
        case 'airPurifying':
            plantCollection = products.filter(item => item.purify)
            break 
        case 'beginner':
            plantCollection = products.filter(item => item.beginner)
            break
        case 'pet-friendly':
            plantCollection = products.filter(item => item.petFriendly)
            break 
        case 'succulents':
            plantCollection = products.filter(item => item.succulents)
            break 
            default:
            break 
    }

    
}

export default Collections; 