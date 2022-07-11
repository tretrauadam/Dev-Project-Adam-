import React from 'react';


function Footer(){
    return(
        <footer className='bg-gray-200 bg-opacity-40 w-screen pt-8 pb-28'>
            <div className='flex flex-col md:flex-row w-5/6 2x1:w-7/12 m-auto justify-between space-y-12 md:space-y-0'>
                <div className='text-center md:text-left m-auto w-full md:w-0'></div>
                   <h1 className='font-display font-medium text-2xl text-gray-900'> Join the family</h1>
                   <p className='font-body py-4 w-72 text-gray-700'> are you sure you do not want to join us, we
                   pay peanuts. </p>
                   <div className='flex mt-6'>
                    <input className='h-12 p-4 rounded-1 font-body bg-gray-900 text-white rounded-r transition duration-300 border-gray-900 hover:bg-transport 
                    hover:text-gray-700 focus: border-2 focus:outline-none ' 
                    type='email'
                    placeholder='Enter your email'
                    required> 
                    </input>
                    <button className='h-12 p-4 w-28 font-body text-sm bg-gray-900 text-white rounded-r 
                    transition duration-300 border-gray-900 hover:bg transparent hover:text-gray-900 hover:border'>Subscribe</button>
                   </div>
            </div>

            <div className='flex space-x-6 md:space-x-24'>
                <div className='flex flex-col space-y-4'>
                    <Link to='/'>
                        <h1 className='font-display font-medium md:text-lg text-gray-900'>Bookies</h1>
                    </Link>
                    <Link className='font-body text-gray-700 text-sm md:text-base flex-col space-y-4' to='/about'>
                        <h1>About Us</h1>
                        <h1>FAQ</h1>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <Link to='/shop'>
                    <h1 className='font-display font-medium md:text-lg text-gray-900'>Shopping</h1>
                </Link>
               <Link to='/shop/??'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-700'> fruit </h1>
                </Link>
                <Link to='/shop/??'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-700'>books</h1>
                </Link>
                <Link to='/shop/??'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-700'>books</h1>
                </Link>
            </div>
            <div className='flex flex-col space-y-4'>
                <h1 className='font-display font-medium md:text-lg text-gray-900'> Contact Us</h1>
                <p className='font-body text-sm text-gray-700'>emai@email.com</p>
                <div className='flex space-x-6'>
                    <a href='www.github.com' target='{blank} rel="noopener noreferrer"'>
                        <FontAwesomeIcon className='text-xl md:text-2xl text-gray-700 hover:text-gray-900' icon={''}/>
                    </a>
                    <a href='www.linkedin.com' target='_blank rel="noopener noreferrer"'>
                        <FontAwesomeIcon className="text-xl md:text-2x1 texr-geat-700 hover:text-gray-900" icon={''}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer; 
