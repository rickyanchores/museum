import React from 'react'
import Card from '../../components/Card/Card';
//IMPORT IMAGES

import statue from "../../images/statue.avif";
import busto from "../../images/busto.avif";
import pharoah from "../../images/pharoah.avif";
const Gallery = (props) => {
    return (
        <div className='Gallery'>
            <h1>Gallery</h1>
            <div className="CardContainer">
                <Card image={statue}/>
                <Card image={busto}/>
                <Card image={pharoah}/>
            </div>
        </div>
    )
}

export default Gallery;
