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
        <li key={id}>
            {text}
        </li>
      ))

  return (
    <div>
        <ul>
            {listFilters}
        <li>
            <span>Location</span>
            <span>
                <img src={settings} alt="filter" />
            </span>
        </li>
        </ul>
    </div>
  )
}

export default Filters
