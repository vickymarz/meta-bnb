import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({handleModal, menuOpen, handleMenuOpen}) => {
    const nav = [
        {
          id: 1,
          path: '/',
          children: 'Home',
        },
        {
          id: 2,
          path: '/locations',
          children: 'Place to stay',
        },
        {
          id: 3,
          path: '/nfts',
          children: 'NFTs',
        },
        {
          id: 4,
          path: '/community',
          children: 'Community',
        },
      ];

      const handleFunctions = () => {
        handleMenuOpen()
        handleModal()
      }

      const navigation = nav.map(({ id, path, children }) => (
        <li key={id}>
          <Link
            to={path}
            onClick={handleMenuOpen}
          >
            {children}
          </Link>
        </li>
      ));

  return (
    <nav className={`flex flex-col lg:flex-row lg:justify-center lg:justify-between items-center lg:gap-x-44 gap-y-24 lg:gap-y-0 fixed lg:static w-full h-full lg:w-max lg:h-max top-16 ${menuOpen ? 'right-0' : '-right-full'} bottom-0 bg-pink lg:bg-light z-8 transition-all duration-1000 ease-in-out lg:transition-none`}>
      <ul className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-x-12 gap-y-9 lg:gap-y-0 text-light lg:text-blackk text-2xl lg:text-xl mt-16 lg:mt-0'>
        {navigation}
      </ul>
      <Button type="button" onClick={handleFunctions} className='rounded-lg bg-light text-pink lg:text-light lg:bg-pink px-7 py-3.5 text-2xl lg:text-base'>
        Connect Wallet
      </Button>
    </nav>
  )
}

export default Navbar
