import React from 'react'


// IMPORT IMAGES

import horse from "../../images/horse.avif";
import statue from "../../images/statue.avif";

const Collection = () => {
    return (
        <div className='Collection'>
            <div className="container">
            <div className="left">
                <img src={horse} alt="" />
            </div>
            <div className="right">
                <img src={statue} alt="" />
                <h3>Collection/Reinassance</h3>
            </div>
            </div>
        </div>
    )
}

export default Collection;
