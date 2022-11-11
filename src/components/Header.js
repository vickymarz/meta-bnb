import React, { useState } from 'react';
import MediaQuery from 'react-responsive/types/Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import Button from './Button';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <header>
      <MediaQuery maxWidth={768}>
        {matches =>
          matches ? (
            <>
              <div>
                <img src={logo} alt="logo" />
              </div>
              {isMenuOpen ? (
			    <Button onClick={handleMenuOpen} isMenuOpen>
				  <FontAwesomeIcon icon={faTimes} size='1x' />
				</Button>
				) : (
				<Button onClick={handleMenuOpen}>
				  <FontAwesomeIcon icon={faAlignRight} size='1x' />
				</Button>
				)
              }
              <MobileMenu menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
            </>
          ) :
          (
            <>
              <Navbar />
            </>
          )
        }
        </MediaQuery>
    </header>

  )
}

export default Header

