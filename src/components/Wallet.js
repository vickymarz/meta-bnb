import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import metamask from '../images/metamask.png';
import walletConnect from '../images/walletconnect.png'

const Wallet = ({setModal}) => {
    return (
        <div >
            <div>
                <div>
                  <h2>Connect Wallet</h2>
                  <Button onClick={() => setModal("inactive")}>
                    <FontAwesomeIcon icon={faTimes} size='1x' />
                  </Button>
                </div>
                <ul>
                    <li>
                        <span>
                          <img src={metamask} alt="metamask" />
                          <p>Metamask</p>
                        </span>
                    </li>
                    <li>
                        <span>
                          <img src={walletConnect} alt="wallet connect" />
                          <p>WalletConnect</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
);
}

export default Wallet
