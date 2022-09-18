import React from 'react'
import Card from '../../components/Card/Card';

const Gallery = () => {
    return (
        <div className='Gallery'>
            <h1>Gallery</h1>
            <div className="CardContainer">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Gallery;
