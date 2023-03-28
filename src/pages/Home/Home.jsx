import React from 'react'

// IMPORT IMAGES 
import David from "../../images/DavidBW.jpeg"


const Home = () => {
  return (
    <div className='Home'>
        <div className="left">
            <h1>A Picture Is A Poem
                Without Words
            </h1>
            <button className='btn'>Read More</button>
        </div>
        <div className="right">
          <div className="contacts-snippet">
          <div className="li">Facebook</div>
            <div className="li">Twitter</div>
            <div className="li">Gmail</div>
          </div>
            <img src={David} alt="David Black & White" />
        </div>
    </div>
  )
}




export default Home;