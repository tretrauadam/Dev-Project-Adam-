import React from "react";
import {Link} from 'react-router-dom';

function ShopItems(props){
    return(
        <div>
            <Link to={{ pathname:`/shop/collection/${props.name}`}}>
                <img className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75" src={props.img} alt=''></img>
                <div className="font-body flex flex-col-reverse md:flex md:justify-between text-base md:text-xl py-3">
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
            </Link>
        </div>

    )
}

export default ShopItems; 
