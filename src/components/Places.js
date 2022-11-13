import React, { useState } from 'react'
import locations from '../data'
import Place from './Place';

const Places = () => {
  const [datas] = useState(locations);

    const displayDatas = datas.map(({id, image}) => (
        <Place key={id} image={image} />
    ))

  return (
    <div className='md:grid md:grid-cols-4 md:gap-6'>
        {displayDatas}
    </div>
  )
}

export default Places
