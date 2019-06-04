import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

describe('mapStateToProps', () => {
  it('should return an array of pokemon objects', () => {
    
  });

  it('should return an error message', () => {
    
  });
  
  it('should return the loading state', () => {
    
  });

});

describe('mapDispatchToProps', () => {
  it('should call dispatch with setPokemon', () => {
    
  });

  it('should call dispatch with isLoading', () => {
    
  });

  it('should call dispatch with hasErrored', () => {
    
  });
});