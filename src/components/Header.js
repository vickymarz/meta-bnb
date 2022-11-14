import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import Button from './Button';
import Navbar from './Navbar';

const Header = ({ handleModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <header className='w-full h-20 lg:h-24 fixed top-0 left-0 right-0 px-5 py-5 lg:px-20 bg-whites flex justify-between items-center z-10'>
      <div className='w-36 lg:w-56'>
        <img src={logo} alt="logo" />
      </div>
      <MediaQuery maxWidth={1024}>
        {matches =>
          matches ? (
            <>
              {isMenuOpen ? (
			          <Button type="button" onClick={handleMenuOpen} isMenuOpen>
				          <FontAwesomeIcon icon={faTimes} size='2x' className="text-pink"/>
				        </Button>
				      ) : (
				        <Button type="button" onClick={handleMenuOpen}>
				          <FontAwesomeIcon icon={faAlignRight} size='2x' className="text-pink"/>
				        </Button>
				      )
              }

              <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} handleModal={handleModal}/>

            </>
          ) :
          (
            <>
             <Navbar handleModal={handleModal}/>
            </>
          )
        }
        </MediaQuery>
    </header>

  )
}

export default Header

