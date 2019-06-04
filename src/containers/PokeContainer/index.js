import React, { Component } from 'react'
import * as actions from '../../actions'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PokeCard from '../../components/PokeCard';

export class PokeContainer extends Component {

  pokeCards() {
  const { pokemon } = this.props;
   return pokemon.map((poke) => {
    return <PokeCard 
            name={poke.name}
            weight={poke.weight} 
            pic={poke.sprites.front_default}
            type={poke.type}
          />
    })
  }
  

  render() {
    return (
      <section className='poke-section'>
        { this.pokeCards() }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = (dispatch) => ({
  setPokemon: (pokemon) => dispatch(actions.setPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeContainer)
