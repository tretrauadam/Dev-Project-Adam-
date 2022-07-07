import React from 'react';
import { Link } from 'react-router-dom';


const Cart = () => {
    const display = useSelector((state) => state.cart.display)
    const cart = useSelector((state) => state.cart.currentCart)
    const totalItems = useSelector((state) => state.cart.totalItems)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const dispatch = useDispatch()
    

    let cartItems = cart.map(item => 
        <CartDisplay 
        key={item.product.id}
        id={item.product.id}
        name={item.product.name}
        price = {item.product.price}
        img={item.product.img}
        quantity={item.quantity}
         /> 
        )

        return(
            <div className={display}>
                <div className='z-10 fixed w-full h-full'>
                    <div className='absolute w-1/4 md:w-3/4 inset-0 bg-gray-700 bg-opacity-50 z-20' onClick={() => dispatch(hideCart())}>
                    </div>
                    <div className='absolute inset-y-0 right-0 w-3/4 md:w-1/4 bg-white z-10'>
                        <div className='flex justify-between h-16 bg-gray-200 bg-opacity-90'>
                            <p className='text-3xl mx-4 my-3 text-gray-700 font-display'>Cart <span className='text-lg'>({totalItems}) items </span></p>
                            <svg onClick={() => dispatch(hideCart())} className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900" 
                            xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden="true">
                                <path strike-linecap="round" stroke-linejoin="round" strong-width='2' d="M6 18L18 6M6 6112 12" />
                            </svg>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
}

export default Cart; 