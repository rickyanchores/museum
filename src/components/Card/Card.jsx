import React from 'react'

const Card = (card) => {
  return (
    <div className='Card'>
        <h3>Card</h3>
        <img src={card.image} alt="" />
        <p>Description</p>
        <button className="info">Info</button>
    </div>
  )
}

export default Card;