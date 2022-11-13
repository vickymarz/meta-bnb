import React from 'react';
import star from '../images/star.png'

const Place = ({ image }) => {

  return (
    <div className='rounded-2xl border border-lightgray border-solid p-4 flex flex-col justify-center mb-4 md:mb-0'>
        <div className='object-contain'>
            <img src={image} alt="Desert king" />
        </div>
        <div className='flex justify-between text-blackk text-xs mt-4'>
            <span>
              <p className='mb-2.5'>Desert king</p>
              <p>2345km away</p>
              <img src={star} alt="rating" className='block w-20 h-5 object-contain'/>
            </span>
            <span>
              <p className='font-bold mb-2.5'>1 MBT per night</p>
              <p>available for 2 weeks stay</p>
            </span>
        </div>
    </div>
  )
}

export default Place
