import React, { Component } from 'react';
import { render } from 'react-dom'
// import PropTypes from 'prop-types'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { fetchPokemon } from '../../utils/fetchPokemon';

export class App extends Component {
  componentDidMount() {
    console.log(this.props, this.state)
    const { setPokemon } = this.props;
    const url = 'http://localhost:3001/pokemon'
    fetchPokemon(url)
      .then(poke => setPokemon(poke))
    // return setPokemon(pokemon);
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  error: state.error,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  setPokemon: (pokemon) => dispatch(actions.setPokemon(pokemon)),
  loading: (bool) => dispatch(actions.isLoading(bool)),
  error: (message) => dispatch(actions.hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
