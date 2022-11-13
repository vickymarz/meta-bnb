import React, { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Places from '../components/Places';
import Sponsors from '../components/Sponsors';
import Wallet from '../components/Wallet';
import card from '../images/nfts.png';

const Homepage = () => {
    const [modal, setModal] = useState("inactive");

  return (
    <>
      <Header setModal={setModal} />
        <main className='relative top-32 md:top-44'>
          <Intro />
          <Sponsors />
          <section className='px-5 md:px-20'>
            <h2 className='text-black px-5 text-2xl md:text-5xl font-bold text-center mb-11'>Inspiration for your next adventure</h2>
            <Places />
          </section>
          <section>
            <div>
              <h2>Metabnb NFTs</h2>
              <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
              <Button>
                Learn more
              </Button>
            </div>
            <div>
              <img src={card} alt="nft gift card" />
            </div>
          </section>
        </main>
        <Footer />

       {modal === "wallet-active" && (
		  <Wallet setModal={setModal} />
		)}
    </>
  )
}

export default Homepage
