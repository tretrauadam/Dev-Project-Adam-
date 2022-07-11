import React from  'react';

function Banner() {
    return(
        <div className='bg-gray-200 bg-opacity-90'>
            <div className='max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8'>
                <p className='text-sm md:text-base text-opacity-80 font-display text-center text-gray-9000 tracking-wide font-light'>
                    Free shipping on Orders above a million bucks
                </p>
            </div>
        </div>

    )
}

export default Banner;