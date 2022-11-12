import React from 'react';
import meta from '../images/meta.png'
import mbtoken from '../images/mbtoken.png'
import opensea from '../images/opensea.png'

const Sponsors = () => {
  return (
    <div>
      <span>
        <img src={mbtoken} alt="mbtoken" />
      </span>
      <span>
        <img src={meta} alt="metamask" />
      </span>
      <span>
        <img src={opensea} alt="opensea" />
      </span>
    </div>
  )
}

export default Sponsors
