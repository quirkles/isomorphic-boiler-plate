import { Map } from 'immutable';

import userReducer from '../userReducer';

describe('user reducer', () => {
  describe('when there is no pre existing state', () => {
    it('is initialized to expected shape when there is no action passed', () => {
      expect(userReducer()).toEqual(
        Map({
          userName: '',
          password: '',
          emailAddress: '',
          authenticated: false,
        }),
      );
    });
  });
});
