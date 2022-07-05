import React from 'react';
import {Link} from 'react-router-dom'; 

// need to import two pictures, one for each main div card. 

function TextCards() {
    return(
        <div className='my-24 py-24 bg-gray-200 bg-opacity-40 w-full'>
            <div className='2xl:w-3/4 m-auto flex flex-col justify-center space-y-16'>
                <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                    <img src='' alt=''/>
                </div>
                <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                    <h2 className='font-display text-2xl md:text-4xl'>Lets do this</h2>
                    <p className='font-body text-lg md:text-xl tracking-wide break-words leading-loose'>
                    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on,
                    and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention 
                    or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
                    </p>
                    <Link to="/shop">
                    <button className='bg-red-300 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-500'>
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-full m-auto justify-between space-y-8 md:space-y-0'>
                <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                    <h2 className='font-display pt-4 md:pt-0 text-2xl md:text-4xl'>Lets do this again</h2>
                    <p className='font-body text-lg md:text-xl tracking-wide break-words leading-loose'>
                    Some say the world will end in fire,
                        Some say in ice.
                        From what I/'ve tasted of desire
                        I hold with those who favour fire.
                        But if it had to perish twice,
                        I think I know enough of hate
                        To say that for destruction ice
                        Is also great
                        And would suffice.
                    </p>
                    <Link to='/shop'>
                        <button className='bg-green-800 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-500'>
                            let's order
                        </button>
                    </Link>
                    <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                        <img src='' alt=''/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TextCards; 