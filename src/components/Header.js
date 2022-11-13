import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import Button from './Button';
import Navbar from './Navbar';

const Header = ({ setModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <header className='w-full h-16 md:h-24 fixed top-0 left-0 right-0 px-5 py-5 md:px-20 bg-whites flex justify-between items-center z-10'>
      <div className='w-36 md:w-56'>
        <img src={logo} alt="logo" />
      </div>
      <MediaQuery maxWidth={768}>
        {matches =>
          matches ? (
            <>
              {isMenuOpen ? (
			          <Button type="button" onClick={handleMenuOpen} isMenuOpen>
				          <FontAwesomeIcon icon={faTimes} size='1x' />
				        </Button>
				      ) : (
				        <Button type="button" onClick={handleMenuOpen}>
				          <FontAwesomeIcon icon={faAlignRight} size='1x' className="text-pink"/>
				        </Button>
				      )
              }
              {
                isMenuOpen && <Navbar menuOpen={isMenuOpen} setModal={setModal}/>
              }
            </>
          ) :
          (
            <>
             <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
            </>
          )
        }
        </MediaQuery>
    </header>

  )
}

export default Header

