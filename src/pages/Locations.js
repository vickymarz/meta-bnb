import React, { useState } from 'react';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Places from '../components/Places';
import Wallet from '../components/Wallet';

const Locations = () => {
  const [modal, setModal] = useState("inactive");

  return (
    <>
      <Header setModal={setModal} />
      <Filters />
      <section>
        <Places />
      </section>
      <Footer />
      {modal === "wallet-active" && (
		  <Wallet setModal={setModal} />
		)}
    </>
  )
}

export default Locations
