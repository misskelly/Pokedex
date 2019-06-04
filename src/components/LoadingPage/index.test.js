import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../LoadingPage'

describe('LoadingPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoadingPage />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})