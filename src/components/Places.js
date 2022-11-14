import React  from 'react';
import Place from './Place';

const Places = ({datas}) => {

    const displayDatas = datas.map(({id, image}) => (
        <Place key={id} image={image} />
    ))

  return (
    <div className='lg:grid lg:grid-cols-4 lg:gap-6'>
        {displayDatas}
    </div>
  )
}

export default Places
