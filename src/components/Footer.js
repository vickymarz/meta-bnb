import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footer-logo.png'

const Footer = () => {
	return (
	  <footer>
	    <div>
          <div>
            <img src={logo} alt="logo" />
              <div>
                <Link to='#'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to='#'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link to='#'>
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
			  </div>
              <p>&copy; 2022 Metabnb</p>
		  </div>
          <div>
            <div>
              <h3>Community</h3>
                <ul>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                  </ul>
            </div>
            <div>
              <h3>Places</h3>
                <ul>
                  <li>Castle</li>
                  <li>Farm</li>
                  <li>Beach</li>
                  <li>Learn More</li>
                </ul>
            </div>
            <div>
              <h3>About Us</h3>
                <ul>
                  <li>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact Us</li>
                </ul>
            </div>
          </div>
        </div>
	</footer>
  );
};

export default Footer;
