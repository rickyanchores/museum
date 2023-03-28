import React from 'react'

// IMPORT
import busto from "../../images/busto.avif";

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="container">
                <img src={busto} alt="" />
                <div className="text">
                    <h1>Explore the stories behind the sculptures, their creators, and the eras in which they were made.</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;
