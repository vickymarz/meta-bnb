import React from 'react';
import meta from '../images/meta.png'
import mbtoken from '../images/mbtoken.png'
import opensea from '../images/opensea.png'

const Sponsors = () => {
  return (
    <div className='bg-pink flex justify-between items-center px-5 lg:px-20 py-4 gap-2.5 mt-16 mb-14'>
      <span className='w-26 lg:w-52'>
        <img src={mbtoken} alt="mbtoken" />
      </span>
      <span className='w-26 lg:w-52'>
        <img src={meta} alt="metamask" />
      </span>
      <span className='w-26 lg:w-52'>
        <img src={opensea} alt="opensea" />
      </span>
    </div>
  )
}

export default Sponsors
