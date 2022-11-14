import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footer-logo.png'

const Footer = () => {
	return (
	  <footer className='relative top-32 lg:top-44 text-light pb-5 px-5 pt-16 lg:px-20 bg-darkk flex flex-col lg:flex-row justify-between'>
      <div className='order-last lg:order-1 mt-12 lg:mt-0'>
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
            <div className='lg:order-2'>
              <h3 className='font-bold text-lg mb-3 lg:mb-6 mt-4 lg:mt-0'>Community</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                  </ul>
            </div>
            <div className='lg:order-3'>
              <h3 className='font-bold text-lg mb-3 lg:mb-6 mt-4 lg:mt-0'>Places</h3>
                <ul className='text-sm text-skylight flex flex-col gap-y-4'>
                  <li>Castle</li>
                  <li>Farm</li>
                  <li>Beach</li>
                  <li>Learn More</li>
                </ul>
            </div>
            <div className='lg:order-4'>
              <h3 className='font-bold text-lg mb-3 lg:mb-6 mt-4 lg:mt-0'>About Us</h3>
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
