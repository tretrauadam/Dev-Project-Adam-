import React from 'react';
//import 3 images for the rounded. 



function CircleCards(){
    return(
        <div className='mb-20 w-full'>
            <h1 className='m-10 p-6 text-3xl md:text-5xl font-display text-gray-800 text-center'> Why you will love Bookies</h1>
            <ul className='flex flex-col md:flex-row w-full 2xl:w-3/4 2xl:m-auto space-y-12 md:space-y-0 text-center md:space-x-12 justify-around'>
                <li className='flex flex-col space-y-6 m-auto md:m-0'>
                    <img className='m-auto h-52 w-52 rounded full' src={'images'} alt=""/> */ rhr /*
                    <h2 className='text-2xl text-gray-800 font-display'>top quality</h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                        we source our paper from bio trees
                    </p>
                </li>
                <li class="flex flex-col space-y-6 m-auto md:m-0">
                    <img src='' alt='' className="m-auto h-52 w-52 rounded-full"/>
                    <h2 className='text-2xl text-gray-800 font-display'> Sustainble books</h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                    Trees from all around the world long for our sweet fresh blade. 
                    </p>
                </li>
                <li className='flex flex-col space-y-6 m-auto md:m-0'>
                    <img className='m-auto h-52 w-52 rounded-full' src='' alt=''/>
                    <h2 className='text-yellow-200 text-2xl font-display'> made with real paper</h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                        blood sweat and tears, literally 
                    </p>
                </li>
            </ul>
        </div>

    )
}

export default CircleCards; 