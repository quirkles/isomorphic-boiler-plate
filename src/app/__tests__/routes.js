import React from 'react';

import routes from '../routes';

import Home from '../containers/Home';
import List from '../containers/List';
import Signup from '../containers/Signup';
import App from '../containers/App';

jest.mock('../containers/Home', () => <div className="home-container" />);
jest.mock('../containers/List', () => <div className="list-container" />);
jest.mock('../containers/Signup', () => <div className="signup-container" />);
jest.mock('../containers/App', () => <div className="app-container" />);

describe('Routes module', () => {
  it('exports the expected routes', () => {
    expect(routes).toEqual([
      {
        path: '/',
        component: App,
        routes: [
          {
            path: '/home',
            component: Home,
          },
          {
            path: '/list',
            component: List,
          },
          {
            path: '/signup',
            component: Signup,
          },
        ],
      },
    ]);
  });
});
