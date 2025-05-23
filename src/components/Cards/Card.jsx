import React from 'react'
import './Card.css'
import cards_data from '../../assets/cards/Cards_data.js'

const TitleCards = () => {
  
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className='card-list'>

        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
