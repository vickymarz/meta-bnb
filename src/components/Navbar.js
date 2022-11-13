import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({setModal, menuOpen, handleMenuOpen}) => {
  console.log(menuOpen)
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
            onClick={handleMenuOpen}
            end
          >
            {children}
          </Link>
        </li>
      ));

  return (
    <nav className={`flex flex-col md:flex-row md:justify-center md:justify-between items-center md:gap-x-44 gap-y-24 md:gap-y-0 fixed md:static w-full h-full md:w-max md:h-max top-16 ${menuOpen ? 'right-0' : '-right-full'} bottom-0 bg-pink md:bg-light z-8 transition-all duration-1000 ease-in-out md:transition-none`}>
      <ul className='flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-x-12 gap-y-9 md:gap-y-0 text-light md:text-blackk text-2xl md:text-xl mt-16 md:mt-0'>
        {navigation}
      </ul>
      <Button type="button" onClick={() => setModal('modal-active')} className='rounded-lg bg-light text-pink md:text-light md:bg-pink px-7 py-3.5 text-2xl md:text-base'>
        Connect Wallet
      </Button>
    </nav>
  )
}

export default Navbar
