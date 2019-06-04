import React from 'react';
import { shallow } from 'enzyme';
import PokeCard from '../PokeCard'

describe('PokeCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PokeCard />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})