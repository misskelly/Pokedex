import { errorReducer } from './errorReducer'
import { loadingReducer } from './loadingReducer'
import { pokeReducer } from './pokeReducer'

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, '')
    expect(result).toEqual(expected);
  });

  it('should return a state with an error message', () => {
    const mockMessage = 'Something went wrong'
    const expected = 'Something went wrong';
    const result = errorReducer(mockMessage, '')
    expect(result).toEqual(expected);
  });

});


describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, '')
    expect(result).toEqual(expected);
  });

  it('should return a state with isLoading toggled', () => {
    
  });
});


describe('pokeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = pokeReducer(undefined, [])
    expect(result).toEqual(expected);
  });

  it('should return a state with an array of pokemon', () => {
    
  });
});