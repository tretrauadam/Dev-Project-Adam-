import React from "react";

function ShopItems(props){
    return(
        <div>
            <Link to={`/shop/collection/${props.name}`}>

            </Link>
        </div>

    )
}

export default ShopItems; 
