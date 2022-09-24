import React from 'react'

//IMPORT IMAGE

import SoloScreen from "../../images/soloscreen.avif";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="f-container">
          <img src={SoloScreen} alt="" />
          <div className="contacts-snippet">
          <div className="li">Facebook</div>
            <div className="li">Twitter</div>
            <div className="li">Gmail</div>
          </div>
        </div>
        <p>Developed by Ricky A 2023</p>
    </div>
  )
}

export default Footer;