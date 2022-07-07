import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux'
import ShopDisplay from '.'

function shop(){
    const products = useSelector(state => state.cart.products)
    let plants = products.map(plant => 
        <ShopDisplay 
        key={plant.id}
        name={plant.name}
        light={plant.price}
        purify={plant.purify}
        )
}