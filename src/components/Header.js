import React, { useState } from 'react';
import MediaQuery from 'react-responsive/types/Component';
import logo from '../images/logo.png'

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
				  <FontAwesomeIcons icon={faTimes} size='1x' />
				</Button>
				) : (
				<Button onClick={handleMenuOpen}>
				  <FontAwesomeIcons icon={faAlignRight} size='1x' />
				</Button>
				)
              }
              <MobileMenu />
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

