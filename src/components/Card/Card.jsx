import React from 'react'

const Card = (card) => {
  return (
    <div className='Card'>
        <img src={card.image} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, a.</p>
        <button className="info">Info</button>
    </div>
  )
}

export default Card;