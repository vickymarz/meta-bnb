import React from 'react'
import Button from './Button'
import Input from './Input'
import background from '../images/homepage.png'

const Intro = () => {
  return (
    <section>
        <div>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the Metaverse
          </h1>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div>
            <Input type="search" placeholder="Search for location"/>
            <Button type="submit">
              Search
            </Button>
          </div>
        </div>
        <div>
            <img src={background} alt="background" />
        </div>
    </section>
  )
}

export default Intro



