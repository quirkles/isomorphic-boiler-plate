import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import userReducer from '../userReducer';

import rootReducer from '../index';

describe('route reducer', () => {
  it('generates the expected reducer', () => {
    expect(combineReducers).toHaveBeenCalledWith({
      router,
      userReducer,
    });
    expect(rootReducer).toEqual({
      router,
      userReducer,
    });
  });
});
