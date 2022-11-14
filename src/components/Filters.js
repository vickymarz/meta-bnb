import React from 'react';
import settings from '../images/filter.png';

const Filters = () => {
    const filters = [
        {
          id: 1,
          text: 'Restaurant',
        },
        {
          id: 2,
          text: 'Cottage',
        },
        {
          id: 3,
          text: 'Castle',
        },
        {
          id: 4,
          text: 'Fantast city',
        },
        {
          id: 5,
          text: 'Beach',
        },
        {
          id: 6,
          text: 'Carbins',
        },
        {
          id: 7,
          text: 'Off-grid',
        },
        {
          id: 8,
          text: 'Farm',
        },
      ];

      const listFilters = filters.map(({id, text}) => (
        <li key={id} className='text-blackk text-xl'>
            {text}
        </li>
      ))

  return (
      <ul className='px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-y-2 mb-16'>
        {listFilters}
        <li className='text-blackk text-xl rounded-lg px-4 py-4 border border-solid border-lightergray flex justify-between items-center gap-x-12'>
          <span>Location</span>
          <span>
            <img src={settings} alt="filter" />
          </span>
        </li>
      </ul>
  )
}

export default Filters
