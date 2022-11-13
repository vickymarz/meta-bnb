import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({setModal}) => {
    const nav = [
        {
          id: 1,
          path: '/',
          children: 'Home',
        },
        {
          id: 2,
          path: 'locations',
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
    <nav className='flex justify-between items-center gap-x-44'>
      <ul className='flex justify-between items-center gap-x-12 text-blackk text-xl'>
        {navigation}
      </ul>
      <li>
      <Button type="button" onClick={() => setModal('modal-active')} className='rounded-lg bg-pink  px-7 py-3.5'>
        Connect Wallet
      </Button>
      </li>
    </nav>
  )
}

export default Navbar
