import React from 'react'
import Button from './Button'
import Input from './Input'
import background from '../images/homepage.png'
import MediaQuery from 'react-responsive'

const Intro = () => {
  return (
    <section className='px-5 md:flex md:justify-between md:items-center md:gap-x-24 md:px-20'>
        <div>
          <h1 className='text-4xl md:text-6xl tracking-tight text-blackk mb-10 md:mb-12'>
            Rent a <span className='text-pink'>Place</span> away from <span className='text-pink'>Home</span> in the Metaverse
          </h1>
          <p className='text-blackk text-xl md:text-2xl mb-10 md:mb-12'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <MediaQuery minWidth={768}>
            {
            matches =>
              matches && (
                <div className='flex justify-start items-center'>
                  <Input type="search" placeholder="Search for location" className='rounded-tl-lg border border-pink py-4 pl-3.5 w-full text-grayy placeholder-grayy outline-0 border-r-0 block'/>
                  <Button type="submit" className='bg-pink py-4 px-6 md:px-20 rounded-tl-lg outline-0 text-white'>
                    Search
                  </Button>
                </div>
                )
            }
          </MediaQuery>
        </div>
        <div className='w-11/12 m-auto'>
            <img src={background} alt="background" className='w-full'/>
        </div>
        <MediaQuery maxWidth={768}>
            {
            matches =>
              matches && (
                <div className='flex justify-start items-center mt-16'>
                  <Input type="search" placeholder="Search for location" className='rounded-tl-lg border border-pink py-4 pl-3.5 w-full text-grayy placeholder-grayy outline-0 border-r-0 block'/>
                  <Button type="submit" className='bg-pink py-4 px-6 md:px-20 rounded-tl-lg outline-0 text-white'>
                    Search
                  </Button>
                </div>
                )
            }
          </MediaQuery>
    </section>
  )
}

export default Intro



