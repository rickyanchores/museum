import React from 'react'

// IMPORT IMAGES 
import David from "../../images/DavidBW.jpeg"


const Home = () => {
  return (
    <div className='Home'>
        <div className="left">
            <h1>A Picture Is A Poem</h1>
            <h1>Without Words</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vel iure doloremque pariatur dignissimos quis.</p>
            <button className='btn'>Read More</button>
        </div>
        <div className="right">
            <img src={David} alt="David Black & White" />
        </div>
    </div>
  )
}




export default Home;