import React from 'react';
import Footer from '../Footer/Footer';
import AboutHero from './AboutHero';
import Header from '../Header/ItemHeader';
import {aboutImg} from '/src/aboutImg.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faWorm} from'@fortawesome/free-solid-svg-icons'



const About = () =>{
    return(
        <div className='h-screen'>
            <Header/>
            <AboutHero/>
            <div className= "text-gray-700 bg-white min-h-0 h-auto">
                <div className='w-9/12 text-center m-auto'>
                    <h1 className='font-display text-2xl md:text-4xl m-12'>We started from the bottom now we're here </h1>
                    <p className='font-body leading-loose text-sm md:text-base text-center flex flex-col w-full 2xl:w-1/2 2x1:m-auto space-y-6'>
                        bla bla bla 
                    </p>
                    <p>
                        ha ha ha 
                    </p>
                </div>
                <h2 className='font-display text-2xl md:text-4xl m-12'>Reach out</h2>
                <div className='flex flex-col md:flex-row w-full 2x1:w-3/4 m-auto mb-20 font-body leading-loose space-y-6 md:space-y-0 md:space-x-12 justify-between'>
                    <div className='w-full md:w-7/12'>
                        <img src={aboutImg} alt='a picture of plants'/>
                        <div className='w-full md:w-5/12 flex flex-col space-y-5 m-auto text-left font-display text-sm md:text-base leading-loose'>
                            <p> Questions comments or any issues please do reach out</p>
                            <p> Email us ! <br></br>bookies@email.com</p>
                            <div className='flex space-x-6'>
                                <a href='www.github.com' target='_blank'>
                                    <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={faAddressBook}  />
                                </a>
                                <a href='www.linkedin.com' target='_blank'>
                                    <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={faWorm} />
                                </a>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/> 
        </div>
    )
}
export default About; 