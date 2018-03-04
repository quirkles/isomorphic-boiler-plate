import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

const Component = () => <div className="component" />;

describe('App container', () => {
  it('Renders with route and matches snapshot', () => {
    let wrapper;
    const route = {
      routes: [
        {
          path: '/home',
          component: Component,
        },
      ],
    };
    expect(() => {
      wrapper = mount(<App route={route} />);
    }).not.toThrow();
    expect(wrapper).toMatchSnapshot();
  });
});
