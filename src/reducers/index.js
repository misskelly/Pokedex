import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer'
import { loadingReducer } from './loadingReducer'
import { pokeReducer } from './pokeReducer'

const rootReducer = combineReducers({
  pokemon: pokeReducer,
  error: errorReducer,
  loading: loadingReducer
})

export default rootReducer;