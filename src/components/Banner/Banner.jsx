import React from 'react'

// IMPORT
import busto from "../../images/busto.avif";

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="container">
                <img src={busto} alt="" />
                <div className="text">
                    <h1>Hidden by History and Revealed in the Present</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;
