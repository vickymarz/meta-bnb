import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Places from '../components/Places';
import Sponsors from '../components/Sponsors';
import Wallet from '../components/Wallet';
import card from '../images/nfts.png';
import MediaQuery from 'react-responsive'
import locations from '../data';

const Homepage = () => {
    const [modal, setModal] = useState("inactive");
    const [datas, setDatas] = useState(locations);

    useEffect(() => {
        const newDatas = datas.slice(0, 8)
        setDatas(newDatas)
    }, []);

  return (
    <>
      <Header setModal={setModal} />
        <main className='relative top-32 md:top-44'>
          <Intro />
          <Sponsors />
          <section className='px-5 md:px-20'>
            <h2 className='text-black px-5 text-2xl md:text-5xl font-bold text-center mb-11'>Inspiration for your next adventure</h2>
            <Places datas={datas}/>
          </section>
          <section className='mt-6 md:mt-12 bg-pink px-5 md:px-20 py-12 md:py-24 md:flex justify-between items-center gap-32'>
            <div className='text-light'>
              <h2 className='text-4xl md:text-5xl font-bold mb-5 md:mb-9'>Metabnb NFTs</h2>
              <MediaQuery maxWidth={768}>
            {
            matches =>
              matches && (
                <div className='w-full mb-4'>
                  <img src={card} alt="nft gift card" />
                </div>
                )
            }
          </MediaQuery>
              <p className='text-lg leading-9'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
              <Button className='rounded-lg bg-light text-pink px-8 py-3.5 mt-4 md:mt-14'>
                Learn more
              </Button>
            </div>
            <MediaQuery minWidth={768}>
            {
            matches =>
              matches && (
                <div className='w-full'>
                  <img src={card} alt="nft gift card" />
                </div>
                )
            }
          </MediaQuery>
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
