import React from 'react';
import { mount } from 'enzyme';

import Signup from '../Signup';

describe('Signup component', () => {
  it('Renders without errors and matches snapshot', () => {
    let wrapper;
    expect(() => {
      wrapper = mount(<Signup />);
    }).not.toThrow();
    expect(wrapper).toMatchSnapshot();
  });
});
