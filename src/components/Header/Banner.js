import React from  'react';

function Banner() {
    return(
        <div className='bg-gray-200 bg-opacity-90'>
            <div className='max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8'>
                <p className='text-sm md:text-base text-opacity-80 font-display text-center text-gray-9000 tracking-wide font-light'>
                    Free delivery on 3 or more Orders !
                </p>
                <div className='toggle'>
                <label htmlFor="default-toggle" className=" relative items-center cursor-pointer flex flex-end ">
                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                </label>
                </div>
            </div>
        </div>

    )
}

export default Banner;