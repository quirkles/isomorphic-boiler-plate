import React from 'react';
import { mount } from 'enzyme';

import List from '../List';

describe('List component', () => {
  it('Renders without errors and matches snapshot', () => {
    let wrapper;
    expect(() => {
      wrapper = mount(<List />);
    }).not.toThrow();
    expect(wrapper).toMatchSnapshot();
  });
});
