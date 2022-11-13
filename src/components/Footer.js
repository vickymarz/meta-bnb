import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footer-logo.png'

const Footer = () => {
	return (
	  <footer className='relative top-32 md:top-44 text-light pb-5 px-5 pt-16 md:px-20 bg-darkk flex flex-col md:flex-row justify-between'>
      <div className='order-last md:order-1 mt-12 md:mt-0'>
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
            <div className='md:order-2'>
              <h3 className='font-bold text-lg mb-3 md:mb-6 mt-4 md:mt-0'>Community</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                  </ul>
            </div>
            <div className='md:order-3'>
              <h3 className='font-bold text-lg mb-3 md:mb-6 mt-4 md:mt-0'>Places</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>Castle</li>
                  <li>Farm</li>
                  <li>Beach</li>
                  <li>Learn More</li>
                </ul>
            </div>
            <div className='md:order-4'>
              <h3 className='font-bold text-lg mb-3 md:mb-6 mt-4 md:mt-0'>About Us</h3>
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
