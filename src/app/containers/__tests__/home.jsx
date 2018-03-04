import React from 'react';
import { mount } from 'enzyme';

import Home from '../Home';

describe('Home component', () => {
  it('Renders without errors and matches snapshot', () => {
    let wrapper;
    expect(() => {
      wrapper = mount(<Home />);
    }).not.toThrow();
    expect(wrapper).toMatchSnapshot();
  });
});
