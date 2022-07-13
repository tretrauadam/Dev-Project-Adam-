import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return(
        <footer className='bg-gray-200 bg-opacity-40 w-screen pt-8 pb-28 items-center'>
            <div className='flex flex-col md:flex-row w-5/6 justify-center 2x1:w-7/12 m-auto space-y-12 md:space-y-0 items-center '>
                <div className='text-center md:text-left m-auto w-full md:w-0'></div>
                   <h1 className='font-display font-medium text-2xl text-gray-900'>Join us </h1>
                   <p className='font-body py-4 w-auto items-center text-gray-700'> Give us your email  </p>
                   <div className='flex mt-6'>
                    <input className='h-12 p-4 rounded-1 font-body bg-cyan-50 text-white rounded-r transition duration-300 border-gray-900 hover:bg-transport 
                    hover:text-gray-700 focus: border-2 focus:outline-none ' 
                    type='email'
                    placeholder='Enter your email'
                    required> 
                    </input>
                    <button className='h-12 p-4 w-28 font-body text-sm bg-gray-900 text-white rounded-r 
                    transition duration-300 border-gray-900 hover:bg transparent hover:text-gray-900 hover:border'>Subscribe</button>
                   </div>
            </div>

            <div className='flex space-x-4 md:space-x-24 p justify-center pt-2 pb-2  '>
                <div className='flex flex-col space-y-4 '>
                    <Link to='/'>
                        <h1 className='font-display font-medium md:text-lg text-gray-900'>Greenify</h1>
                    </Link>
                    <Link to='/about' className='font-body gap-x-2 gap-y-4  text-gray-700 text-sm md:text-base flex-col space-y-1' >
                        <h1>About Us</h1>
                        <h1>FAQ</h1>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col space-y-2 items-center'>
                <Link to='/shop'>
                    <h1 className='font-display font-medium md:text-lg text-gray-900'>Shopping</h1>
                </Link>
               <Link to='/shop/airPurifying'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-900'> Eco Friendly </h1>
                </Link>
                <Link to='/shop/beginner'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-900'>New plants</h1>
                </Link>
                <Link to='/shop/petFriendly'>
                    <h1 className='font-display fon-medium md:text-lg text-gray-900'>books</h1>
                </Link>
            </div>
            <div className='flex flex-col space-y-4 items-center'>
                <h1 className='font-display font-medium md:text-lg justify-center text-gray-900'> Contact Us</h1>
                <p className='font-body text-sm text-gray-700'>Email@email.com</p>
                <div className='flex space-x-6 flex-auto'>
                    <a href='www.github.com' target='{blank} rel="noopener noreferrer"'>
                        <FontAwesomeIcon className='text-xl md:text-2xl text-gray-700 hover:text-gray-900' icon={faGithub}/>
                    </a>
                    <a href='www.linkedin.com' target='_blank rel="noopener noreferrer"'>
                        <FontAwesomeIcon className="text-xl md:text-2x1 texr-geat-700 hover:text-gray-900" icon={faLinkedin}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer; 
