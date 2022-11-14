import React, { useState } from 'react';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Places from '../components/Places';
import Wallet from '../components/Wallet';
import locations from '../data';

const Locations = () => {
  const [modal, setModal] = useState(false);
  const [datas] = useState(locations);

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <Header setModal={setModal} handleModal={handleModal} />
      <div className='relative top-32 lg:top-44'>
      <Filters />
      <section className='px-5 lg:px-20'>
        <Places datas={datas}/>
      </section>
      <Footer />
      {modal && (
		  <Wallet setModal={setModal} />
		)}
      </div>
    </>
  )
}

export default Locations
