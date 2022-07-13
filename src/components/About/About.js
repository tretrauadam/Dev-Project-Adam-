import React from "react";
import Header from "../Header/ItemHeader";
import Footer from "../Footer/Footer";
import AboutHero from './AboutHero'
import aboutImg from '/home/tretrauadam/shopping_cart_project/shopping_cart_rails_app/src/assets/aboutflowers.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='h-screen'>
      <Header />
      <AboutHero />
      <div className=" text-gray-700 bg-white min-h-0 h-auto">
        <div className='w-9/12 text-center m-auto'>
            <h1 className='font-display text-2xl md:text-4xl m-12'>Our Humble Beginnings</h1>
            <div className='font-body leading-loose text-sm md:text-base text-center flex flex-col w-full 2xl:w-1/2 2xl:m-auto space-y-6'>
              <p>
              what started out as a passion turned into an addiction, travelling around the globe looking for new and exciting plants. my apartment started to look
              like a botanical garden. Through this passion me and my crew are delighted to share it with you and your home.
              </p>
              
              <p>
              Gradually, my first appartment started to resemble a rainforest and this is when i decided, the poor people who are missing out on this, We need
              share our experience and help people plan their home layout with a variety of vibrant plants each with it's own unique properities. 
              </p>
            </div>

            <h2 className='font-display text-2xl md:text-4xl m-12'>Get in Contact!</h2>
            <div className='flex flex-col md:flex-row w-full 2xl:w-3/4 m-auto mb-20 font-body leading-loose space-y-6 md:space-y-0 md:space-x-12 justify-between'>
              <div className='w-full md:w-7/12'>
                <img src={aboutImg} alt='Multiple plants'/>
              </div>
              <div className='w-full md:w-5/12 flex flex-col space-y-5 m-auto text-left font-display text-sm md:text-base leading-loose'>
                <p >Questions, comments and advice. <br></br> We would love to hear from you </p>
                <p>Email us! <br></br>Bloom@email</p>
                <div className='flex space-x-6'>
                        <a href='https://github.com/jtcaovan' target='_blank rel="noopener noreferrer"'>
                            <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faGithub } /> 
                        </a>
                        <a href='https://www.linkedin.com/in/justincaovan/' target='_blank rel="noopener noreferrer"'>
                            <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faLinkedin }/> 
                        </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;