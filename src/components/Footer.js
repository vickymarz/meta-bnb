import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footer-logo.png'

const Footer = () => {
	return (
	  <footer className='relative top-32 md:top-44 text-light pb-5 px-5 pt-16 md:px-20 bg-darkk flex flex-col md:flex-row justify-between'>
      <div>
        <div className='w-56 mb-16'>
          <img src={logo} alt="logo" />
        </div>
        <div className='flex items-center gap-x-10 mb-9'>
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
              <h3 className='font-bold text-lg mb-6'>Community</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                  </ul>
            </div>
            <div>
              <h3 className='font-bold text-lg mb-6'>Places</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>Castle</li>
                  <li>Farm</li>
                  <li>Beach</li>
                  <li>Learn More</li>
                </ul>
            </div>
            <div>
              <h3 className='font-bold text-lg mb-6'>About Us</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li className='text-skylight'>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact Us</li>
                </ul>
            </div>
	</footer>
  );
};

export default Footer;
