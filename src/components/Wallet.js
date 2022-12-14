import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import metamask from '../images/metamask.png';
import walletConnect from '../images/walletconnect.png';
import arrow from '../images/arrow-right.png'

const Wallet = ({setModal}) => {
    return (
        <div className={`${setModal ? 'fixed top-0 right-0 left-0 bottom-0 w-screen w-screen z-20 bg-dimwhite' : 'hidden'}`}>
            <div className='w-11/12 lg:w-2/5 ml-auto mr-auto relative mt-44 flex flex-col bg-light py-6 rounded-2xl'>
                <div className='flex justify-between items-center border-b border-solid border-midgray pb-6 px-8'>
                  <h2 className='font-bold text-darkgray text-2xl'>Connect Wallet</h2>
                  <Button type='button' onClick={() => setModal(false)}>
                    <FontAwesomeIcon icon={faTimes} size='2x' className='text-darkk'/>
                  </Button>
                </div>
                <div className='pt-8 px-8'>
                  <p className='text-darkgray mb-4'>Choose your prefered wallet</p>
                <ul className='flex flex-col gap-7'>
                    <li>
                      <Button type='button' className='w-full flex justify-between items-center outline-0 rounded-xl border border-solid border-lightgray bg-light hover:bg-verylightgray active:bg-verylightgray focus:bg-verylightgray py-3 px-5'>
                        <span className='flex justify-start items-center gap-x-4'>
                          <div className='w-11'>
                            <img src={metamask} alt="metamask" />
                          </div>
                          <p className='text-lg text-blackk font-semibold'>Metamask</p>
                        </span>
                        <span>
                          <img src={arrow} alt="arrow" />
                        </span>
                      </Button>
                    </li>
                    <li>
                      <Button type='button' className='w-full flex justify-between items-center outline-0 rounded-xl border border-solid border-lightgray bg-light hover:bg-verylightgray active:bg-verylightgray focus:bg-verylightgray py-3 px-5'>
                        <span className='flex justify-start items-center gap-x-4'>
                          <div className='w-11'>
                            <img src={walletConnect} alt="wallet connect" />
                          </div>
                          <p className='text-lg text-blackk font-semibold'>WalletConnect</p>
                        </span>
                        <span>
                          <img src={arrow} alt="arrow" />
                        </span>
                      </Button>
                    </li>
                </ul>
                </div>
            </div>
        </div>
);
}

export default Wallet
