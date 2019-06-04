import React, { Component } from 'react';
import { render } from 'react-dom'
// import PropTypes from 'prop-types'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { fetchPokemon } from '../../utils/fetchPokemon';

export class App extends Component {
  componentDidMount() {
    const { setPokemon, hasErrored, isLoading } = this.props;
    const url = 'http://localhost:3001/pokemon'
    isLoading(true);
    return fetchPokemon(url)
      .then(poke => setPokemon(poke))
      .then(isLoading(false))
      .catch(err => hasErrored(err))
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
  isLoading: (bool) => dispatch(actions.isLoading(bool)),
  hasErrored: (message) => dispatch(actions.hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
