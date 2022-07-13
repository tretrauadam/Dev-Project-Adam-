import React from 'react';
import {Link} from 'react-router-dom'; 
import work from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/work.jpg'; 
import window from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/window.jpg'; 

// need to import two pictures, one for each main div card. 

function TextCards() {
    return(
        <div className='my-24 py-24 bg-gray-200 bg-opacity-40 w-full'>
            <div className='2xl:w-3/4 m-auto flex flex-col justify-center space-y-16'>
                <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                    <img src= {window} alt=''/>
                </div>
                <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                    <h2 className='font-display text-2xl md:text-4xl'>Lets do this</h2>
                    <p className='font-body text-lg md:text-l tracking-wide break-words leading-loose'>
                        We established ourselves in the city of Hanoi, famed for its decorative and vibrant city, our first apartment in the city had a lovely balcony 
                        overlooking the lake. fortune favoured us for, we lived directly above the flower street market. some people buy clothes or a watch to treat themselves, 
                        for us, we were always excited to add plants to our pretty balcony. 
                   
                    </p>
                    <Link to="/shop">
                    <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-500'>
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-full m-auto justify-between space-y-8 md:space-y-0'>
                <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                    <h2 className='font-display pt-4 md:pt-0 text-2xl md:text-4xl'>Lets do this again</h2>
                    <p className='font-body text-lg md:text-xl tracking-wide break-words leading-loose'>
                        Enlighten your home with a bit of sunshine, we can recommend the best plants for your living style, be it under a bridge or a skyscrapper apartment.
                    </p>
                    <Link to='/shop'>
                        <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-500'>
                            let's order
                        </button>
                    </Link>
                    <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                        <img src={work} alt=''/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TextCards; 