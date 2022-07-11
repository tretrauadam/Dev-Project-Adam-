import React from 'react';


function AboutHero(){
    return(
        <div className='bg-center md:bg-cover bg-fixed bg-no-repeat h-3/4 md:h screen md:w-full'
          style={{backgroundImage:`linear-graident(rgba(0,0,0,0.5), rgba(0,0,0,0.3)) url(${about})`}}>
            <h1 className='flex text-$xl md:text-%xl h-full md:ml-auto md:mt-auto w-full md:w-1/2 text-white font-display justify-center
            items-center'>
                Who are We ? 
            </h1>
          </div>
    )
}

export default AboutHero;
