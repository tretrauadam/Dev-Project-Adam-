import React from 'react';
import Footer from '../Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                <h2></h2>
            </div>
        </div>
    )
}