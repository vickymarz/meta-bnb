import React, { useState } from 'react'
import Wallet from '../components/Wallet';

const Homepage = () => {
    const [modal, setModal] = useState("inactive");

  return (
    <div>
       {modal === "wallet-active" && (
		  <Wallet setModal={setModal} />
		)}
    </div>
  )
}

export default Homepage
