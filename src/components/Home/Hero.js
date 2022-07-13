import React from 'react';
import Header from '../Header/ItemHeader';
import { Link } from 'react-router-dom'; 
import hero from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/hero.jpg'


function Hero() {
    return( 

        <div className='relative'>
            <Header />
            <div className='bg-center bg-cover bg-fixed bg-no-repeat h-screen md:w-full'
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${hero})`}}>
                <div className='flex flex-col h-full px-4 md:m1-auto md:mt-auto w-full md:w-1/2 justify-center text-white font-display space-y-4 md:space-y-6'>
                    <p className='text-3xl md:text-5xl'>
                    Organic plants <br></br>  Right to your Doorstep
                    </p>
                    <p className='font-light text-lg sm:text-2xl p-4' > buy now  </p>
                    <Link to="/shop">
                        <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-500'>
                            Shop Now
                        </button>
                    </Link>
              </div>
            </div>
        </div>
    )

}

export default Hero;