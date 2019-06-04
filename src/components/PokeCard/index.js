import React from 'react'

const PokeCard = ({ name, weight, pic, type }) => {
  // const { name, weight, pic, type } = this.props;
  return (
    <article className='poke-card'>
      <h3>{ name }</h3>
      <h5>{ weight }</h5>
      <img src={ pic } alt={`${name}, ${type} type pokemon front view`}/>    
    </article>
  )
}

export default PokeCard
