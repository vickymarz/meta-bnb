import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const nav = [
        {
          id: 1,
          path: '/',
          children: 'Home',
        },
        {
          id: 2,
          path: 'location',
          children: 'Place to stay',
        },
        {
          id: 3,
          path: 'nfts',
          children: 'NFTs',
        },
        {
          id: 4,
          path: 'community',
          children: 'Community',
        },
      ];

      const navigation = nav.map(({ id, path, children }) => (
        <li key={id}>
          <Link
            to={path}
            end
          >
            {children}
          </Link>
        </li>
      ));

  return (
    <nav>
      <ul>
        {navigation}
      </ul>
    </nav>
  )
}

export default Navbar
