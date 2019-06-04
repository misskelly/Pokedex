import * as actions from '../actions';

describe('isLoading', () => {
  it('should return a type of IS_LOADING with a boolean', () => {
    const result = actions.isLoading(true)
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }

    expect(result).toEqual(expected);
  });
});

describe('hasErrored', () => {
  it('should return a type of HAS_ERRORED with a message', () => {
    const message = 'Something went wrong'
    const result = actions.hasErrored(message)
    const expected = {
      type: 'HAS_ERRORED',
      message: 'Something went wrong'
    }
    expect(result).toEqual(expected);
  });
});

describe('setPokemon', () => {
  it('should return a type of SET_POKEMON with a payload of pokemon', () => {
    const mockPokemon = [
      {
        name: "pidgeotto",
        id: "17",
        type: "1",
        weight: 300
      }
    ]
    const result = actions.setPokemon(mockPokemon)
    const expected = {
      type: 'SET_POKEMON',
      pokemon: [{
        name: "pidgeotto",
        id: "17",
        type: "1",
        weight: 300
      }]
    }
    expect(result).toEqual(expected);
  });
});
