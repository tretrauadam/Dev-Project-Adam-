import Banner from './Banner';
import Nav from './Nav';
import React from 'react';


function Header(){
    return(
        <div className='absolute w-full'>
            <Banner/>
            <Nav/>
        </div>
    )
}

export default Header; 