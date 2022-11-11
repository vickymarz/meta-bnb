import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import Button from './Button';
import Navbar from './Navbar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <header>
      <div>
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
				  <FontAwesomeIcon icon={faAlignRight} size='1x' />
				</Button>
				)
              }
              <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
            </>
          ) :
          (
            <>
             <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
            </>
          )
        }
        </MediaQuery>
        <Button type="button">
          Connect Wallet
        </Button>
    </header>

  )
}

export default Header

