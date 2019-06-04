export const pokeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return action.pokemon
    default:
      return state;
  }
}