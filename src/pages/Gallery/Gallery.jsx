import React from 'react'
import Card from '../../components/Card/Card';
//IMPORT IMAGES


import pharoah from "../../images/pharoah.avif";
const Gallery = (props) => {
    return (
        <div className='Gallery'>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum itaque quos culpa aperiam veniam explicabo quia pariatur minus temporibus, sit nesciunt, eligendi repellendus fugiat!</div>
            <div className="CardContainer">
                <Card image={pharoah}/>
            </div>
        </div>
    )
}

export default Gallery;
