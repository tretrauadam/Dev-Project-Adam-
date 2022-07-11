import React from 'react';
import { Link, useParams} from 'react-router-dom';

function ShopNav(){
    let name = useParams()

    return(
        <div className=' overflow-hidden'>
            <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1> Bloom's collection </h1>}
                {name.collection === 'airPurifying' && <h1>Air Purifying Plants</h1>}
                {name.collection === 'beginner' && <h1> Plants for beginners</h1>}
                {name.collection === 'pet-friendly' && <h1> Pet friendly plants</h1>}
                {name.collection === 'succulent' && <h1> succulents </h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {name.collection === undefined && <p> shopping for plants have never been this easy </p>}
                {name.collection === 'airPurifying' && <p>Breathe easy with these aur cleaning plants </p>}
                {name.collection === 'beginner' && <p> Easy to care for, even for you lazy bum </p>}
                {name.collection === 'pet-friendly' && <p> Super friendly for pets</p>}
                {name.colleciton === 'succulent' && <p>  strong plants that can whether any storm </p>}
          </div> 
          <div className='flex flex-wrap space-y-2 md:space-y-0 space-x-2  md:space-x-4 w-full items-end justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700'>
            <Link to={'./shop'} className={name.collection === undefined && 'hidden'} >
                <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-280 hover:bg-opacity-40'>Shop All </button>
            </Link>
            <Link to={`./shop/airpPurifying`} className={name.collection === 'airPurifying' && 'hidden'}>
                 <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-280 hover:bg-opacity-40'>Aur Purifying</button>
            </Link>
            <Link to={`./shop/beginner`} className={name.collection === 'beginner' && 'hidden'}>
                 <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-280 hover:bg-opacity-40'> Beginner Friendly </button>
            </Link>
            <Link to={`./shop/pet-friendly`} className={name.collection === 'pet-friendly' && 'hidden'}>
                 <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-280 hover:bg-opacity-40'>Pet friendly</button>
            </Link>
            <Link to={`./shop/succulent`} className={name.collection === 'succulent' && 'hidden'}>
                <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-280 hover:bg-opacity-40'>Succulents</button>
            </Link>
          </div>
        </div>
    )
}

export default ShopNav; 