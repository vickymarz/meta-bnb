import React, { useState } from 'react'
import locations from '../data'
import Place from './Place';

const Places = () => {
    const [datas] = useState(locations);

    const displayDatas = datas.map(({id, image}) => (
        <Place key={id} image={image} />
    ))

  return (
    <div>
        {displayDatas}
    </div>
  )
}

export default Places
