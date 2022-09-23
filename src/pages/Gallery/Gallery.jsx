import React from 'react'
import Card from '../../components/Card/Card';
//IMPORT IMAGES


import pharoah from "../../images/pharoah.avif";
const Gallery = (props) => {
    return (
        <div className='Gallery'>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem veniam facere beatae pariatur delectus.</div>
            <div className="CardContainer">
                <Card image={pharoah}/>
            </div>
        </div>
    )
}

export default Gallery;
