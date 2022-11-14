import React, { useState } from 'react';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Places from '../components/Places';
import Wallet from '../components/Wallet';
import locations from '../data';

const Locations = () => {
  const [modal, setModal] = useState("inactive");
  const [datas] = useState(locations);

  return (
    <>
      <Header setModal={setModal} />
      <div className='relative top-32 md:top-44'>
      <Filters />
      <section className='px-5 md:px-20'>
        <Places datas={datas}/>
      </section>
      <Footer />
      {modal === "wallet-active" && (
		  <Wallet setModal={setModal} />
		)}
      </div>
    </>
  )
}

export default Locations
